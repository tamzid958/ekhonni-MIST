package com.dsi.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "bid")
public class Bid extends BaseEntity<Long> implements Serializable {

    @ManyToOne @JoinColumn(nullable = false, name = "product_id")
    private Product product;

    @ManyToOne @JoinColumn(nullable = false, name = "buyer_id")
    private AppUser buyer;

    @Column(name = "offered_price")
    private Double offeredPrice;
}
