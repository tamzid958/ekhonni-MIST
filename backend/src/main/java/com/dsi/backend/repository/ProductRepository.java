package com.dsi.backend.repository;

import com.dsi.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByIsApprovedByAdminFalse();

    List<Product> findByIsApprovedByAdminTrue();

    Product findByNameAndDescriptionAndSize(String name, String description, String size);

}
