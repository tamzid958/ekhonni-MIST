package com.dsi.backend.service;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.Bid;

import java.util.List;
import java.util.Optional;

public interface BidService {
    Bid saveBid(Long id, String buyerEmail, Double offeredPrice);

    List<Optional<Bid>> fetchBids(Long id, String sellerEmail);

    Boolean changeBidActiveStatus(Long id, String sellerEmail);

    Boolean changeBidVisibilityStatus(Long id, String sellerEmail);

    AppUser updateFinalBuyer(Long id, String sellerEmail, String buyerEmail);

    Boolean revertFinalBuyer(Long id, String sellerEmail);

    Boolean changeIsSold(Long id, String buyerEmail);

    Bid fetchBidByProductAndBuyer(Long id, String buyerEmail);
}
