package com.dsi.backend.service;

import com.dsi.backend.model.Bid;
import com.dsi.backend.model.Product;

import java.util.Set;

public interface BidService {
    Bid saveBid(Long id, String email, Double offeredPrice);

    Set<Bid> fetchBids(Long id, String email);
}
