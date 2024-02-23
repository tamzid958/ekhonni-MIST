package com.dsi.backend.controller;

import com.dsi.backend.model.Bid;
import com.dsi.backend.model.Product;
import com.dsi.backend.service.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user/products/bid")
public class BidController {

    @Autowired
    public BidService bidService;

    @PostMapping("/save")
    public ResponseEntity<?> saveBid(@RequestBody Bid bid) {
        return new ResponseEntity<>(bidService.saveBid(bid), HttpStatus.CREATED);
    }

    @GetMapping("/fetch")
    public ResponseEntity<?> fetchBids(@RequestBody Product product) {
        return new ResponseEntity<>(bidService.fetchBids(product), HttpStatus.OK);
    }


}
