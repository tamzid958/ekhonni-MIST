package com.dsi.backend.repository;

import com.dsi.backend.model.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface BidRepository extends JpaRepository<Bid, Long> {
    List<Bid> findAllByProductIdOrderByOfferedPriceDesc(Long product_id);
    //Bid findByProductIdOrderByOfferedPriceDesc(Long product_id);
    Bid findTopByProductIdOrderByOfferedPriceDesc(Long product_id);
    Bid findByProductIdAndBuyerEmail(Long id, String email);
}
