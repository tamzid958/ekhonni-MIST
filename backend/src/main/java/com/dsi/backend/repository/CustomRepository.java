package com.dsi.backend.repository;

import com.dsi.backend.model.FilterRequest;
import com.dsi.backend.projection.ProductView;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;

public interface CustomRepository {
    Page<ProductView> filter(FilterRequest filterRequest);

//    @Modifying
//    @Query("UPDATE Product p SET p.isBidActive = NOT(p.isBidActive) WHERE p.id = :id")
//    void toggleIsBidActive(@Param("id") Long id);
}
