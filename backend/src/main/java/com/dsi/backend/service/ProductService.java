package com.dsi.backend.service;

import com.dsi.backend.model.*;
import com.dsi.backend.projection.ProductView;

import org.springframework.data.domain.Page;
import com.dsi.backend.model.Product;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@Service
public interface ProductService {
    ProductView saveProduct(Product product, MultipartFile[] file, String token);

    Product updateProduct(Long id, Boolean isApprovedByAdmin);

    List<ProductView> fetchAllRequests();

//    List<ProductView> fetchAllProducts();

    ProductView getProductById(Long id);

//    Page<ProductView> fetchProducts(int page, FilterRequest filter);
    Page<ProductView> fetchProducts(int page, List<String> categories, List<String> subCategories, List<String> division, List<Double> price, String sort,String searchKey);
    Map<String,Long> countProducts(String division);
    List<ProductView> showByCategory(String category);

    Category insertCategory(Category category);

    ResponseEntity<?> removeCategory(Category category);

    Page<ProductView> filterProduct(FilterRequest filterRequest);
}
