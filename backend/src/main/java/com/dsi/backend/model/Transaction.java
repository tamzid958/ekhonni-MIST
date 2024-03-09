package com.dsi.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String tran_id;
    @ManyToOne
    private PaymentGatewayReqParam paymentGatewayReqParam;
    @ManyToOne
    private Product product;
    @ManyToOne
    private AppUser appUser;
    private Double finalPrice;
    private String connectionStatus;
    private String transactionStatus;

    public String getTotal_amount(){
        return Double.toString(finalPrice);
    }
    public String getCurrency(){
        return paymentGatewayReqParam.getCurrency();
    }
    public String getProduct_category(){
        return product.getCategory().getCategory()+','+product.getCategory().getSubCategory();
    }
    public String getEmi_option(){
        return paymentGatewayReqParam.getEmi_option();
    }
    public String getCus_name(){
        return appUser.getName();
    }
    public String getCus_email(){
        return appUser.getEmail();
    }
    public String getCus_add1(){
        return appUser.getAddress();
    }
    public String getCus_add2(){
        return appUser.getAddress();
    }
    public String getCus_city(){
        return appUser.getDivision();
    }
    public String getCus_state(){
        return appUser.getDivision();
    }
    public String getCus_postcode(){
        return appUser.getDivision();
    }
    public String getCus_country(){
        return paymentGatewayReqParam.getCus_country();
    }
    public String getCus_phone(){
        return appUser.getContact();
    }
    public String getShipping_method(){
        return paymentGatewayReqParam.getShipping_method();
    }
    public String getNum_of_item(){
        return paymentGatewayReqParam.getNum_of_item();
    }
    public String getProduct_name(){
        return product.getName();
    }
    public String getProduct_profile(){
        return paymentGatewayReqParam.getProduct_profile();
    }
    public String getProduct_amount(){
        return Double.toString(finalPrice);
    }
    public String getVat(){
        return Integer.toString(0);
    }
    public String getDiscount_amount(){
        return Integer.toString(0);
    }
    public String getConvenience_fee(){
        return Integer.toString(0);
    }

}
