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
    private String emi_option;
    private String shipping_method;
    private String num_of_item;
    private String product_profile;
    private String cus_country;


}
