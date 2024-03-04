package com.dsi.backend.projection;

public interface PaymentGatewayReqView {
    String getTran_id();
    String getTotal_amount();
    String getCurrency();
    String getProduct_category();
    String getSuccess_url();
    String getFail_url();
    String getCancel_url();
    String getEmi_option();
    String getCus_name();
    String getCus_email();
    String getCus_add1();
    String getCus_add2();
    String getCus_city();
    String getCus_state();
    String getCus_postcode();
    String getCus_country();
    String getCus_phone();
    String getShipping_method();
    String getNum_of_item();
    String getWeight_of_items();
    String getLogistic_pickup_id();
    String getLogistic_delivery_type();
    String getProduct_name();
    String getProduct_profile();
    String getProduct_amount();
    String getVat();
    String getDiscount_amount();
    String getConvenience_fee();
}
