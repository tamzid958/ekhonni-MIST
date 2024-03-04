package com.dsi.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class PaymentGatewayReqParam extends BaseEntity<Long> {
    @Column
    private String currency;
    private String success_url;
    private String fail_url;
    private String cancel_url;
    private String emi_option;
    private String shipping_method;
    private String num_of_item;
    private String weight_of_items;
    private String logistic_pickup_id;
    private String logistic_delivery_type;
    private String product_profile;
    private String vat;
    private String discount_amount;
    private String convenience_fee;

}
