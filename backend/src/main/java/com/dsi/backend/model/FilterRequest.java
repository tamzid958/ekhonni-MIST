package com.dsi.backend.model;

import lombok.*;

import java.util.List;


public record FilterRequest(
        int pageNumber,
        List<CategoryRecord> categories,
        double startPrice, double endPrice,
        String search,
        List<String> division,
        String sort
        ) {
}