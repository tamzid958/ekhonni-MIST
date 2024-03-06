package com.dsi.backend.controller;

import com.dsi.backend.model.Product;
import com.dsi.backend.model.ValidateResp;
import com.dsi.backend.service.PaymentGatewayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/v1/user")
public class PaymentGatewayController {

    @Autowired
    private PaymentGatewayService paymentGatewayService;

    @RequestMapping("/buy-now")
    public ResponseEntity<?> buyNow(@RequestBody Product product, @RequestHeader(HttpHeaders.AUTHORIZATION) String token){
        try {
            return new ResponseEntity<>(paymentGatewayService.initiatePayment(product, token), HttpStatus.CREATED);
        }
        catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
    }

    @RequestMapping("/validate")
    public ResponseEntity<?> validate(@RequestBody ValidateResp validateResp, @RequestHeader(HttpHeaders.AUTHORIZATION) String token){
       try {
           return new ResponseEntity<>(paymentGatewayService.validatePayment(validateResp, token), HttpStatus.CREATED);
       }
       catch (Exception e){
           return new ResponseEntity<>(Map.of("error", e.getMessage()),HttpStatus.NOT_FOUND);
       }
    }
}
