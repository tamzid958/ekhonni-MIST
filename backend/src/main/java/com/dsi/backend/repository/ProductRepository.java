package com.dsi.backend.repository;

import com.dsi.backend.model.Product;
import org.hibernate.query.SortDirection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.access.method.P;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByIsApprovedByAdminFalse();

    List<Product> findByIsApprovedByAdminTrue();

    List<Product> findByIsApprovedByAdminIsNull();

    List<Product> findByIsApprovedByAdminTrueOrderByStartingPriceAsc();

    List<Product> findByIsApprovedByAdminTrueOrderByStartingPriceDesc();

    List<Product> findByIsApprovedByAdminTrueOrderByProductTimeAsc();

    List<Product> findByIsApprovedByAdminTrueOrderByProductTimeDesc();
}
