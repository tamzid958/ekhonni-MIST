package com.dsi.backend.service.implententation;

import com.dsi.backend.model.Product;
import com.dsi.backend.repository.ProductRepository;
import com.dsi.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    public Product saveProduct(Product product) {
        product.setIsApprovedByAdmin(false);
        return productRepository.save(product);
    }
}
