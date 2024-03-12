package com.dsi.backend.model;

import com.dsi.backend.projection.ProductView;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.projection.ProjectionFactory;
import org.springframework.data.projection.SpelAwareProxyProjectionFactory;

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

    public ProductView getProduct() {
        ProjectionFactory projectionFactory = new SpelAwareProxyProjectionFactory();
        return projectionFactory.createProjection(ProductView.class, this.product);
    }
}
