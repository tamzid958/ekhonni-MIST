package com.dsi.backend.repository;

import com.dsi.backend.model.FilterRequest;
import com.dsi.backend.model.Product;
import com.dsi.backend.projection.ProductView;
import org.springframework.data.domain.Page;

public interface CustomRepository {
    Page<ProductView> filter(FilterRequest filterRequest);
}
