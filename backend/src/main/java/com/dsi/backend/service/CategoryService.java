package com.dsi.backend.service;

import com.dsi.backend.model.CategoryRecord;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CategoryService {
    List<CategoryRecord> getAllCategoriesWithSubcategories();
}
