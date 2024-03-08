package com.dsi.backend.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PaymentGatewayResp {
    private String status;
    private String failedreason;
    private String sessionkey;
    private Gateways gw;
    private String redirectGatewayURL;
    private String directPaymentURLBank;
    private String directPaymentURLCard;
    private String directPaymentURL;
    private String redirectGatewayURLFailed;
    @JsonProperty("GatewayPageURL")
    private String GatewayPageURL;
    private String storeBanner;
    private String storeLogo;
    private String store_name;
    private List<GatwaysDesc> desc;
    private String is_direct_pay_enable;
}
