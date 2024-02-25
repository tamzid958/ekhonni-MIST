package com.dsi.backend.service;

import com.dsi.backend.model.*;
import org.springframework.data.domain.Page;
import com.dsi.backend.model.Product;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@Service
public interface ProductService {
    Product saveProduct(Product product, MultipartFile[] file);

    Product updateProduct(Long id, Boolean isApprovedByAdmin);

    List<Product> fetchAllRequests();

    List<Product> fetchAllProducts();

    Product getProductById(Long id);

    List<Product> findSortedProducts(String field, Boolean direction);

    Page<Product> findProductsWithPagination(int offset, int pageSize);

    List<Product> filterProducts(FilterRequest filter);

    Map<String,Long> countProducts();

    List<Product> showByCategory(String category);

    Category insertCategory(Category category);

    ResponseEntity<?> removeCategory(Category category);

}
