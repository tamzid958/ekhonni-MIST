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
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private AppUserRepository appUserRepository;

    public Product saveProduct(Product product) {
        product.setIsApprovedByAdmin(false);
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
        if(!isApprovedByAdmin)
        {
            productRepository.delete(existingProduct);
            return null;
//            return "Product with ID " + id + " has been deleted successfully.";
        }
        else
        {
            existingProduct.setIsApprovedByAdmin(true);
            return productRepository.save(existingProduct);
        }
    }

    public List<Product> fetchAllRequests() {
        return productRepository.findByIsApprovedByAdminFalse();
    }

    public List<Product> fetchAllProducts() {
        return productRepository.findByIsApprovedByAdminTrue();
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(()->new ProductNotFoundException("Product not found by id: "+id));
    }

}
