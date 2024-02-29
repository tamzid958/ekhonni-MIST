package com.dsi.backend.service;

import com.dsi.backend.model.Bid;

import java.util.List;

public interface BidService {
    Bid saveBid(Long id, String email, Double offeredPrice);

    List<Bid> fetchBids(Long id, String email);

    Boolean changeBidActiveStatus(Long id, String email);
}
