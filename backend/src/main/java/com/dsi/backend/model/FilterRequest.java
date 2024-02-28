package com.dsi.backend.model;

import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor
public class FilterRequest {
        private List<String> categories;
        private List<String> subcategories;
        private List<String> division;
        private List<Double> price;
        private String sort;
}
