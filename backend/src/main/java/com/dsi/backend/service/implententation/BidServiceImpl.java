package com.dsi.backend.service.implententation;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.Bid;
import com.dsi.backend.model.Product;
import com.dsi.backend.repository.AppUserRepository;
import com.dsi.backend.repository.BidRepository;
import com.dsi.backend.repository.ProductRepository;
import com.dsi.backend.service.BidService;
import com.dsi.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class BidServiceImpl implements BidService{

    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductService productService;

    @Autowired
    private AppUserRepository appUserRepository;


//    @Override
//    public Bid saveBid(Bid bid) {
//        Product product = productRepository.findByNameAndDescriptionAndSize(bid.getProduct().getName(), bid.getProduct().getDescription(), bid.getProduct().getSize());
//        AppUser buyer = appUserRepository.findByEmail(bid.getBuyer().getEmail());
//
//        Bid addBid = new Bid(product, buyer, bid.getOfferedPrice());
//
//        return bidRepository.save(addBid);
//    }

    @Override
    public Bid saveBid(Long id, String email, Double offeredPrice) {
        Product product = productService.getProductById(id);
        AppUser buyer = appUserRepository.findByEmail(email);

        if (Objects.equals(product.getSeller().getEmail(), email)){
            return null;
        }

        Bid bid = bidRepository.findByProductIdAndBuyerEmail(id, email);
        if (bid != null) {
            bidRepository.delete(bid);
        }
        Bid newBid = new Bid(product, buyer, offeredPrice);
        return bidRepository.save(newBid);
    }

    @Override
    public List<Bid> fetchBids(Long id, String email) {

        Product product = productService.getProductById(id);

        if(Objects.equals(product.getSeller().getEmail(), email)) {
            return bidRepository.findAllByProductIdOrderByOfferedPriceDesc(product.getId());
        }
        else {
            if (product.getIsVisible()) {
                return bidRepository.findAllByProductIdOrderByOfferedPriceDesc(product.getId());
            }
            else {
                List<Bid> bidList = new ArrayList<>();
                bidList.add(bidRepository.findByProductIdAndBuyerEmail(id, email));
                bidList.add(bidRepository.findByProductIdOrderByOfferedPriceDesc(product.getId()));

                bidList.sort(Comparator.comparingDouble(Bid::getOfferedPrice));
                return bidList;
            }
        }
    }

    @Override
    public Boolean changeBidActiveStatus(Long id, String email) {
        Product product = productService.getProductById(id);

        if (Objects.equals(product.getSeller().getEmail(), email)){
            productRepository.toggleIsBidActive(id);
            return !product.getIsBidActive();
        }
        return null;
    }

    @Override
    public Boolean changeBidVisibilityStatus(Long id, String email) {
        Product product = productService.getProductById(id);

        if (Objects.equals(product.getSeller().getEmail(), email)){
            productRepository.toggleIsBidVisibility(id);
            return !product.getIsVisible();
        }
        return null;
    }

    @Override
    public AppUser updateFinalBuyer(Long id, String sellerEmail, String buyerEmail) {
        Product product = productService.getProductById(id);
        AppUser buyer = appUserRepository.findByEmail(buyerEmail);

        if (Objects.equals(product.getSeller().getEmail(), sellerEmail)){
            productRepository.updateFinalBuyerId(buyer.getId(), id);
            return buyer;
        }
        return null;
    }
}
