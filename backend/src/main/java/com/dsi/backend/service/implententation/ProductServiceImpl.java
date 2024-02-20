package com.dsi.backend.service.implententation;

import com.dsi.backend.exception.ProductNotFoundException;
import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.Category;
import com.dsi.backend.model.Product;
import com.dsi.backend.repository.AppUserRepository;
import com.dsi.backend.repository.CategoryRepository;
import com.dsi.backend.repository.ProductRepository;
import com.dsi.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private AppUserRepository appUserRepository;

    public Product saveProduct(Product product) {
        product.setIsApprovedByAdmin(null);
        product.setIsSold(false);
        product.setProductTime(LocalDateTime.now());
        Category category = categoryRepository.findByCategoryAndSubCategory(product.getCategory().getCategory(),product.getCategory().getSubCategory());
        if (category == null) {
            throw new IllegalArgumentException("Invalid category name");
        }
        AppUser seller = appUserRepository.findByEmail(product.getSeller().getEmail());
        product.setCategory(category);
        product.setSeller(seller);
        return productRepository.save(product);
    }

    public Product updateProduct(Long id, Boolean isApprovedByAdmin) {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));
        existingProduct.setIsApprovedByAdmin(isApprovedByAdmin);
        existingProduct.setIsBidActive(true); //bid activates immediately after being accepted
        return productRepository.save(existingProduct);
    }

    public List<Product> fetchAllRequests() {
        return productRepository.findByIsApprovedByAdminIsNull();
    }

    public List<Product> fetchAllProducts() {
        return productRepository.findByIsApprovedByAdminTrue();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(()->new ProductNotFoundException("Product not found by id: "+id));
    }

    public List<Product> findSortedProducts(String field, Boolean direction) {
       if (field.equalsIgnoreCase("startingPrice"))
       {
           if(!direction)
               return productRepository.findByIsApprovedByAdminTrueOrderByStartingPriceAsc();
           else
               return productRepository.findByIsApprovedByAdminTrueOrderByStartingPriceDesc();
       }
       else if (field.equalsIgnoreCase("productTime")) {
           if (!direction)
               return productRepository.findByIsApprovedByAdminTrueOrderByProductTimeAsc();
           else
               return productRepository.findByIsApprovedByAdminTrueOrderByProductTimeDesc();
       }

       else return null;
    }

}
