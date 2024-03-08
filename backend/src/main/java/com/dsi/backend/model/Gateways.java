package com.dsi.backend.model;

import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Gateways {
    private String visa;
    private String master;
    private String amex;
    private String othercards;
    private String internetbanking;
    private String mobilebanking;
}
