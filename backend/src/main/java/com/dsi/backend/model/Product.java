package com.dsi.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Set;


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
    private Boolean usedCondition;
    private Boolean isApprovedByAdmin; // true-> will show in product list
    @ManyToOne @JoinColumn (name = "seller_id", referencedColumnName = "id", columnDefinition = "bigint")
    private AppUser seller;
    private Boolean isSold;
    private Boolean isBidActive;
    private LocalDateTime productTime;
    private Boolean isVisible;

    public String getCategoryName() {
        if (this.category != null) {
            return this.category.getCategory();
        }
        return null;
    }
}
