package com.dsi.backend.model;

import lombok.*;

import java.util.List;


public record FilterRequest(
        List<String> categories,
        List<String> subcategories,
        List<String> division,
        List<Double> price,
        String sort) {
}
