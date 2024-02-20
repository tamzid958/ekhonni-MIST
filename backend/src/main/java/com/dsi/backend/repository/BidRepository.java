package com.dsi.backend.repository;

import com.dsi.backend.model.Bid;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BidRepository extends JpaRepository<Bid, Long> {

    Bid findBidById(Long id);
}
