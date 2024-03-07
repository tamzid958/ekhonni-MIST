package com.dsi.backend.repository;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.Bid;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Repository
public interface BidRepository extends JpaRepository<Bid, Long> {
    List< Optional<Bid> > findAllByProductIdOrderByOfferedPriceDesc(Long product_id);
    //Bid findByProductIdOrderByOfferedPriceDesc(Long product_id);
    Optional<Bid> findTopByProductIdOrderByOfferedPriceDesc(Long product_id);
    Bid findByProductIdAndBuyerEmail(Long id, String email);

    List<Bid> findAllByBuyer(AppUser buyer);
}
