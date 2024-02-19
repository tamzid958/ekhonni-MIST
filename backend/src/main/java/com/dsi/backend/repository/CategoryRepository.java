package com.dsi.backend.repository;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.Category;
import com.dsi.backend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

    Category findByCategoryAndSubCategory(String category, String subCategory);
}
