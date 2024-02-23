package com.dsi.backend.controller;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.FilterRequest;
import com.dsi.backend.model.ImageModel;
import com.dsi.backend.model.Product;
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
import java.util.Set;


@RestController
@RequestMapping("/api/v1")
public class ProductController {

    @Autowired
    private ProductService productService;


    @PostMapping("/user/products/save")
    public ResponseEntity<?> saveProduct(@RequestBody Product product) {
        Product savedProduct = productService.saveProduct(product);
        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }

    @GetMapping("/products")
    public List<Product> fetchAllProduct() {
        return productService.fetchAllProducts();
    }

    @GetMapping(value = "/products/{id}")
    public Product getProductById(@PathVariable("id") Long id) {
        return productService.getProductById(id);
    }

    @GetMapping("/products/sort")
    public List<Product> findSortedProducts(@RequestParam String field,@RequestParam Boolean direction) {
        return productService.findSortedProducts(field,direction); //0-> asc, 1->desc
    }

    @GetMapping("/products/pagination")
    public Page<Product> findProductsWithPagination(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "5") int size) {
        return productService.findProductsWithPagination(page,size);
    }

    @GetMapping("/products/filter")
    public List<Product> filterProducts(@RequestBody FilterRequest filterRequest) {
        return productService.filterProducts(filterRequest);
    }

}