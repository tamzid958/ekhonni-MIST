package com.dsi.backend.repository;

import com.dsi.backend.model.Bid;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface BidRepository extends JpaRepository<Bid, Long> {

//    Set<Bid> findByProductIdOrderByOfferedPriceDesc(Long product_id);
}
