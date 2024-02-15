package com.dsi.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

import java.util.List;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ProductEntity {
    @Id
    private String id;
    private String name;
    private String size;
    private String description;
    private String category;
    private Double startingPrice;
    private String image;
    private Boolean usedCondition;
}
