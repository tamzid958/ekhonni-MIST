package com.dsi.backend.model;

import jakarta.persistence.*;
import lombok.*;
import org.antlr.v4.runtime.misc.NotNull;

import java.io.Serializable;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "bid")
public class Bid extends BaseEntity<Long> implements Serializable {

    @ManyToOne @JoinColumn
    @NotNull
    private Product product;

    @ManyToOne @JoinColumn
    @NotNull
    private AppUser buyer;

    @Column(name = "offered_price")
    private Double offeredPrice;
}
