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
    @Column(name="name")
    private String name;
    @Column(name="size")
    private String size;
    @Column(name="description")
    private String description;
    @Column(name="category")
    private String category;
    @Column(name="starting_price")
    private Double startingPrice;
    @Column(name="image")
    private String image;
    @Column(name="used_condition")
    private Boolean usedCondition;
}
