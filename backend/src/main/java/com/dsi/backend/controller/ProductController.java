package com.dsi.backend.controller;

import com.dsi.backend.model.*;
import com.dsi.backend.service.ImageModelService;
import com.dsi.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;


@RestController
@RequestMapping("/api/v1")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ImageModelService imageModelService;

    @PostMapping(value = "/user/products/save", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> saveProduct(@RequestPart("product") Product product,
                                         @RequestPart("imageFile") MultipartFile[] file) {
        Product savedProduct = productService.saveProduct(product, file);

        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }
//    @GetMapping("/products")
//    public List<ProductView> fetchAllProduct() {
//        return productService.fetchAllProducts();
//    }

    @GetMapping(value = "/products/{id}")
    public Product getProductById(@PathVariable("id") Long id) {
        return productService.getProductById(id);
    }

    @GetMapping("/products")
    public Page<ProductView> filterProducts(@RequestParam(defaultValue = "0") int page,@RequestBody FilterRequest filterRequest) {
        return productService.fetchProducts(page, filterRequest);
    }

    @GetMapping("/products/count")
    public Map<String,Long> countProducts(@RequestParam(defaultValue = "") String division) {
        return productService.countProducts(division);
    }
    @GetMapping("/products/category")
    public ResponseEntity<List<Product>> showByCategories(@RequestParam String category) {
        List<Product> products = productService.showByCategory(category);
        return ResponseEntity.ok(products);
    }
}
 
