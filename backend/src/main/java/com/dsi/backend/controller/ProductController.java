package com.dsi.backend.controller;

import com.dsi.backend.model.*;
import com.dsi.backend.projection.ImageModelView;
import com.dsi.backend.projection.ProductView;
import com.dsi.backend.service.CategoryService;
import com.dsi.backend.service.ImageModelService;
import com.dsi.backend.service.JwtTokenService;
import com.dsi.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import java.util.Map;
import java.util.Set;


@RestController
@RequestMapping("/api/v1")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ImageModelService imageModelService;

    @Autowired
    private JwtTokenService jwtTokenService;


    @PostMapping(value = "/user/products/save", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> saveProduct(@RequestPart("product") Product product,
                                         @RequestPart("imageFile") MultipartFile[] file,
                                         @RequestHeader(HttpHeaders.AUTHORIZATION) String token) {
        ProductView savedProduct = productService.saveProduct(product, file, token);

        return new ResponseEntity<>(productService.getProductById(savedProduct.getId()), HttpStatus.CREATED);
    }

    @RequestMapping("/products/filter")
    public Page<ProductView> filterProduct(@RequestBody FilterRequest filterRequest) {
        return productService.filterProduct(filterRequest);

    }

    @GetMapping("/products/category/all")
    public ResponseEntity<List<CategoryRecord>> getAllCategoriesWithSubcategories() {
        List<CategoryRecord> categories = categoryService.getAllCategoriesWithSubcategories();
        if (!categories.isEmpty()) {
            return ResponseEntity.ok(categories);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(value = "/products/{id}")
    public ResponseEntity<?> getProductById(@PathVariable("id") Long id) {
        ProductView product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }

    @GetMapping("/products/count")
    public Map<String,Long> countProducts(@RequestParam(defaultValue = "") String division) {
        return productService.countProducts(division);
    }
    @GetMapping("/products/category")
    public ResponseEntity<List<ProductView>> showByCategories(@RequestParam String category) {
        List<ProductView> products = productService.showByCategory(category);
        return ResponseEntity.ok(products);
    }

    @GetMapping("/user/your-products")
    public ResponseEntity<?> yourProducts(@RequestHeader(HttpHeaders.AUTHORIZATION) String token) {
        String sellerEmail = jwtTokenService.getUsernameFromToken(token.substring(7));
        List<ProductView> productViewList = productService.sellerProducts(sellerEmail);
        return ResponseEntity.ok(productViewList);
    }

}
 
