package com.dsi.backend.service.implententation;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.Bid;
import com.dsi.backend.model.Product;
import com.dsi.backend.repository.AppUserRepository;
import com.dsi.backend.repository.BidRepository;
import com.dsi.backend.repository.ProductRepository;
import com.dsi.backend.service.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class BidServiceImpl implements BidService{

    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private AppUserRepository appUserRepository;


    @Override
    public Bid saveBid(Bid bid) {
        Product product = productRepository.findByNameAndDescriptionAndSize(bid.getProduct().getName(), bid.getProduct().getDescription(), bid.getProduct().getSize());
        AppUser buyer = appUserRepository.findByEmail(bid.getBuyer().getEmail());

        Bid addBid = new Bid(product, buyer, bid.getOfferedPrice());

        return bidRepository.save(addBid);
    }

//    @Override
//    public Set<Bid> fetchBids(Product product) {
//        return bidRepository.findByProductIdOrderByOfferedPriceDesc(product.getId());
//    }
}
