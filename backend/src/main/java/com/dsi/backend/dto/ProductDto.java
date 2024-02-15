package com.dsi.backend.dto;

import lombok.*;

import java.util.List;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {

    private String id;
    private String name;
    private String size;
    private String description;
    private String category;
    private Double startingPrice;
    private Double currentPrice;
    private List<String> images;
    private Boolean usedCondition;

}
