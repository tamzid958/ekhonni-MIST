package com.dsi.backend.projection;

public interface PaymentGatewayReqView {
    String getTran_id();
    String getTotal_amount();
    String getCurrency();
    String getProduct_category();
    String getEmi_option();
    String getCus_name();
    String getCus_email();
    String getCus_add1();
    String getCus_add2();
    String getCus_city();
    String getCus_state();
    String getCus_country();
    String getCus_phone();
    String getShipping_method();
    String getNum_of_item();
    String getProduct_name();
    String getProduct_profile();

}
