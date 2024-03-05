package com.dsi.backend.service.implententation;

import com.dsi.backend.model.Category;
import com.dsi.backend.model.CategoryRecord;
import com.dsi.backend.repository.CategoryRepository;
import com.dsi.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService{

    @Autowired
    private CategoryRepository categoryRepository;

    public List<CategoryRecord> getAllCategoriesWithSubcategories() {
        List<Category> categories = categoryRepository.findAll();
        Map<String, List<String>> categoryMap = new HashMap<>();

        for (Category category : categories) {
            String categoryName = category.getCategory();
            List<String> subcategories = Arrays.asList(category.getSubCategory().split(", "));

            if (categoryMap.containsKey(categoryName)) {
                categoryMap.get(categoryName).addAll(subcategories);
            } else {
                categoryMap.put(categoryName, new ArrayList<>(subcategories));
            }
        }

        return categoryMap.entrySet().stream()
                .map(entry -> new CategoryRecord(entry.getKey(), entry.getValue()))
                .collect(Collectors.toList());
    }
}
