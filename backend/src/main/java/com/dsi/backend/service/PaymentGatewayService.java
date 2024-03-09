package com.dsi.backend.service;

import com.dsi.backend.model.Transaction;
import com.dsi.backend.model.PaymentGatewayResp;
import com.dsi.backend.model.Product;
import com.dsi.backend.model.ValidateResp;
import com.dsi.backend.projection.PaymentGatewayReqView;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public interface PaymentGatewayService {
    PaymentGatewayResp initiatePayment(Product product, String token) throws JsonProcessingException;

    String convertToUrl(Transaction transaction, String productId);

    PaymentGatewayResp convertToObject(String response) throws JsonProcessingException;

    PaymentGatewayReqView convertToView(Transaction transaction);

    Map<String, String> validatePayment(ValidateResp validateResp, String token);
}
