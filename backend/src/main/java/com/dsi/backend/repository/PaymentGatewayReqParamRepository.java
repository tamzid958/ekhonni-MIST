package com.dsi.backend.repository;

import com.dsi.backend.model.PaymentGatewayReqParam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentGatewayReqParamRepository extends JpaRepository<PaymentGatewayReqParam, Long> {
}
