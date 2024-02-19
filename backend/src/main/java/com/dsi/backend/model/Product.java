package com.dsi.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

import java.io.Serializable;

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
    private String category;
    private Double startingPrice;
    private String image;
    private Boolean usedCondition;
}
