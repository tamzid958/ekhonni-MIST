package com.dsi.backend.repository;

import com.dsi.backend.model.ImageModel;
import com.dsi.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Set;

public interface ImageModelRepository extends JpaRepository<ImageModel,Long> {
    Set<ImageModel> findAllByProductId(Long product_id);
}
