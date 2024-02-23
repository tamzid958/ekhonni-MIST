package com.dsi.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;


@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Product extends BaseEntity<Long>{
    @Column
    private String name;
    private String size;
    private String description;
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;
    private Double startingPrice;
    private String image;
    private Boolean usedCondition;
    private Boolean isApprovedByAdmin; // true-> will show in product list
    @ManyToOne @JoinColumn (name = "seller_id", referencedColumnName = "id", columnDefinition = "bigint")
    private AppUser seller;
    private Boolean isSold;
    private Boolean isBidActive;
    private LocalDateTime productTime;
    private Boolean isVisible;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "product_image",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "image_id")
    )
    private Set<ImageModel> productImage;
}
