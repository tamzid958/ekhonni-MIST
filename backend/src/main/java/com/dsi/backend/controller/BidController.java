package com.dsi.backend.controller;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.Bid;
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

    @PostMapping("/buyer/save")
    public ResponseEntity<?> saveBid(@RequestParam Long id, String token, Double offeredPrice) {
        String buyerEmail = jwtTokenService.getUsernameFromToken(token);

        Bid bid = bidService.saveBid(id, buyerEmail, offeredPrice);
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

    @PostMapping("/seller/activity")
    public ResponseEntity<?> changeBidActivity(@RequestParam Long id, String token) {
        String sellerEmail = jwtTokenService.getUsernameFromToken(token);

        Boolean result = bidService.changeBidActiveStatus(id, sellerEmail);
        if (result !=null)
            return new ResponseEntity<>("Activity status change successful. Current Status :"+ result, HttpStatus.OK);
        else return new ResponseEntity<>("Unauthorized action.", HttpStatus.UNAUTHORIZED);
    }

    @PostMapping("/seller/visibility")
    public ResponseEntity<?> changeBidVisibility(@RequestParam Long id, String token) {
        String sellerEmail = jwtTokenService.getUsernameFromToken(token);

        Boolean result = bidService.changeBidVisibilityStatus(id, sellerEmail);
        if (result !=null)
            return new ResponseEntity<>("Visibility status change successful. Current Status : " + result + ".", HttpStatus.OK);
        else return new ResponseEntity<>("Unauthorized action.", HttpStatus.UNAUTHORIZED);
    }

    @PostMapping("/seller/accept-buyer")
    public ResponseEntity<?> acceptBuyer(@RequestParam Long id, String token, String buyerEmail) {
        String sellerEmail = jwtTokenService.getUsernameFromToken(token);

        AppUser result = bidService.updateFinalBuyer(id, sellerEmail, buyerEmail);
        if (result !=null)
            return new ResponseEntity<>("Buyer added successfully. Current Buyer : " + result, HttpStatus.OK);
        else return new ResponseEntity<>("Unauthorized action.", HttpStatus.UNAUTHORIZED);
    }

    @PostMapping("/seller/revert-buyer")
    public ResponseEntity<?> revertBuyer(@RequestParam Long id, String token) {
        String sellerEmail = jwtTokenService.getUsernameFromToken(token);

        Boolean result = bidService.revertFinalBuyer(id, sellerEmail);
        if (result)
            return new ResponseEntity<>("Buyer reverted successfully", HttpStatus.OK);
        else return new ResponseEntity<>("Unauthorized action.", HttpStatus.UNAUTHORIZED);
    }

    @PostMapping("/buyer/buy-now")
    public ResponseEntity<?> buyNow(@RequestParam Long id, String token) {
        String buyerEmail = jwtTokenService.getUsernameFromToken(token);

        Boolean result = bidService.changeIsSold(id, buyerEmail);
        if (result)
            return new ResponseEntity<>("Purchase Successful", HttpStatus.OK);
        else return new ResponseEntity<>("Unauthorized action.", HttpStatus.UNAUTHORIZED);
    }

}
