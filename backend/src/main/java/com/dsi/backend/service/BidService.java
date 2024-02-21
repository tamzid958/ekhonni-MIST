package com.dsi.backend.service;

import com.dsi.backend.model.Bid;
import com.dsi.backend.model.Product;

import java.util.Set;

public interface BidService {
    Bid saveBid(Bid bid);

//    Set<Bid> fetchBids(Product product);
}
