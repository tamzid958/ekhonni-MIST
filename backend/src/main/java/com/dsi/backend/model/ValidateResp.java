package com.dsi.backend.model;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ValidateResp {
    String tran_id;
    String transactionStatus;
}
