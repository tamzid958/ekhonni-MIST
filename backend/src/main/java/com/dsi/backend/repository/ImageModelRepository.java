package com.dsi.backend.repository;

import com.dsi.backend.model.ImageModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ImageModelRepository extends JpaRepository<ImageModel,Long> {
}
