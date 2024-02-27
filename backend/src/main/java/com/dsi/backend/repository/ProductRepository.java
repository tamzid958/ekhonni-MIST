package com.dsi.backend.repository;

import com.dsi.backend.model.ImageModel;
import com.dsi.backend.model.Product;
import com.dsi.backend.model.ProductView;
import jakarta.persistence.EntityManager;
import org.hibernate.query.SortDirection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.access.method.P;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByIsApprovedByAdminFalse();
    List<Product> findByIsApprovedByAdminTrue();
    List<ProductView> findByIsApprovedByAdminIsNullOrderByProductTimeAsc();
    Product findByNameAndDescriptionAndSize(String name, String description, String size);
    List<Product> findByIsApprovedByAdminIsNull();
    List<Product> findByIsApprovedByAdminTrueAndCategoryCategory(String category);
    List<Product> findByIsApprovedByAdminTrueAndSellerDivision(String division);
    List<Product> findByIsApprovedByAdminTrueAndCategoryCategoryIn(List<String> categories);
    List<Product> findByIsApprovedByAdminTrueAndCategorySubCategoryIn(List<String> subCategory);
    List<Product> findByIsApprovedByAdminTrueAndSellerDivisionIn(List<String> division);
    List<Product> findByIsApprovedByAdminTrueAndStartingPriceBetween(Double minPrice, Double maxPrice);

    List<Product> findByIsApprovedByAdminTrueOrderByStartingPriceAsc();

    List<Product> findByIsApprovedByAdminTrueOrderByStartingPriceDesc();

    List<Product> findByIsApprovedByAdminTrueOrderByProductTimeAsc();

    List<Product> findByIsApprovedByAdminTrueOrderByProductTimeDesc();

}
