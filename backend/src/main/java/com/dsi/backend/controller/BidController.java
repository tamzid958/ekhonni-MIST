package com.dsi.backend.controller;

import com.dsi.backend.model.Bid;
import com.dsi.backend.model.Product;
import com.dsi.backend.service.BidService;
import com.dsi.backend.service.JwtTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user/products/bid")
public class BidController {

    @Autowired
    public BidService bidService;

    @Autowired
    private JwtTokenService jwtTokenService;

    @PostMapping("/save")
    public ResponseEntity<?> saveBid(@RequestParam Long id, String token, Double offeredPrice) {
        String email = jwtTokenService.getUsernameFromToken(token);
        Bid bid = bidService.saveBid(id, email, offeredPrice);
        if (bid != null) {
            return new ResponseEntity<>(bid, HttpStatus.CREATED);
        }
        else {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/fetch")
    public ResponseEntity<?> fetchBids(@RequestParam Long id, String token) {
        String email = jwtTokenService.getUsernameFromToken(token);
        return new ResponseEntity<>(bidService.fetchBids(id, email), HttpStatus.OK);
    }


}
