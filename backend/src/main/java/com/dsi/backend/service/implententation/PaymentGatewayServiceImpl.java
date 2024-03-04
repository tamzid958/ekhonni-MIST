package com.dsi.backend.service.implententation;

import com.dsi.backend.model.*;
import com.dsi.backend.projection.AppUserView;
import com.dsi.backend.projection.PaymentGatewayReqView;
import com.dsi.backend.projection.ProductView;
import com.dsi.backend.repository.AppUserRepository;
import com.dsi.backend.repository.PaymentGatewayReqParamRepository;
import com.dsi.backend.repository.PaymentGatewayReqRepository;
import com.dsi.backend.repository.ProductRepository;
import com.dsi.backend.service.AppUserService;
import com.dsi.backend.service.JwtTokenService;
import com.dsi.backend.service.PaymentGatewayService;
import com.dsi.backend.service.ProductService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.projection.SpelAwareProxyProjectionFactory;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class PaymentGatewayServiceImpl implements PaymentGatewayService {

    private final WebClient webClient;
    private static ObjectMapper objectMapper = new ObjectMapper();
    @Autowired
    private ProductService productService;
    @Autowired
    private AppUserService appUserService;
    @Autowired
    private PaymentGatewayReqRepository paymentGatewayReqRepository;
    @Autowired
    private PaymentGatewayReqParamRepository paymentGatewayReqParamRepository;

    @Autowired
    public PaymentGatewayServiceImpl(WebClient webClient) {
        this.webClient = webClient;
    }

    @Override
    public PaymentGatewayResp initiatePayment(Product product, String token) throws JsonProcessingException {
        product = productService.fetchProductById(product.getId());
        AppUser appUser = appUserService.fetchInformation(token);

        PaymentGatewayReq paymentGatewayReq = new PaymentGatewayReq();
        PaymentGatewayReqParam otherParams = paymentGatewayReqParamRepository.findById(1L)
                        .orElseThrow(()->new RuntimeException());

        paymentGatewayReq.setPaymentGatewayReqParam(otherParams);
        paymentGatewayReq.setProduct(product);
        paymentGatewayReq.setAppUser(appUser);
        paymentGatewayReq = paymentGatewayReqRepository.save(paymentGatewayReq);

        String param = this.convertToUrl(paymentGatewayReq);
        PaymentGatewayResp paymentGatewayResp = this.postCall(param);
        paymentGatewayReq.setStatus(paymentGatewayResp.getStatus());
        paymentGatewayReqRepository.save(paymentGatewayReq);
        return paymentGatewayResp;
    }

    private PaymentGatewayResp postCall(String param) throws JsonProcessingException {


        String responseString = webClient
                .post()
                .uri("/gwprocess/v4/api.php")
                .body(BodyInserters.fromValue(param))
                .exchangeToMono(r -> {
                    if (r.statusCode().equals(HttpStatus.OK)) {
                        return r.bodyToMono(String.class);
                    } else if (r.statusCode().is4xxClientError()) {
                        return Mono.just("Error response");
                    } else {
                        return r.createException()
                                .flatMap(Mono::error);
                    }
                })
                .block();

        return this.convertToObject(responseString);
    }
    @Override
    public String convertToUrl(PaymentGatewayReq paymentGatewayReq) {
        PaymentGatewayReqView paymentGatewayReqView = this.convertToView(paymentGatewayReq);
        Map<String, String> paymentGatewayMap = objectMapper.convertValue(paymentGatewayReqView, Map.class);
        paymentGatewayMap.put("store_id", System.getenv("STORE_ID"));
        paymentGatewayMap.put("store_passwd", System.getenv("STORE_PASSWD"));


        return paymentGatewayMap.keySet().stream()
                .map(key -> key + '=' + URLEncoder.encode(paymentGatewayMap.get(key), StandardCharsets.UTF_8))
                .collect(Collectors.joining("&"));
    }

    @Override
    public PaymentGatewayResp convertToObject(String response) throws JsonProcessingException {
//        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        return objectMapper.readValue(response, PaymentGatewayResp.class);
    }

    @Override
    public PaymentGatewayReqView convertToView(PaymentGatewayReq paymentGatewayReq) {
        return new SpelAwareProxyProjectionFactory().createProjection(PaymentGatewayReqView.class, paymentGatewayReq);
    }
}
