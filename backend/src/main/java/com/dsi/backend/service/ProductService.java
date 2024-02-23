package com.dsi.backend.service;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.FilterRequest;
import com.dsi.backend.model.Product;
import com.dsi.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {
    Product saveProduct(Product product);

    Product updateProduct(Long id, Boolean isApprovedByAdmin);

    List<Product> fetchAllRequests();

    List<Product> fetchAllProducts();

    Product getProductById(Long id);

    List<Product> findSortedProducts(String field, Boolean direction);

    Page<Product> findProductsWithPagination(int offset, int pageSize);

    List<Product> filterProducts(FilterRequest filter);

}
