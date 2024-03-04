package com.dsi.backend.service;

import com.dsi.backend.model.PaymentGatewayReq;
import com.dsi.backend.model.PaymentGatewayResp;
import com.dsi.backend.model.Product;
import com.dsi.backend.projection.PaymentGatewayReqView;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.stereotype.Service;

@Service
public interface PaymentGatewayService {
    PaymentGatewayResp initiatePayment(Product product, String token) throws JsonProcessingException;

    String convertToUrl(PaymentGatewayReq paymentGatewayReq);

    PaymentGatewayResp convertToObject(String response) throws JsonProcessingException;

    PaymentGatewayReqView convertToView(PaymentGatewayReq paymentGatewayReq);
}
