package com.dsi.backend.controller;

import com.dsi.backend.model.*;
import com.dsi.backend.projection.ProductView;
import com.dsi.backend.service.ImageModelService;
import com.dsi.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import java.util.Map;


@RestController
@RequestMapping("/api/v1")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ImageModelService imageModelService;

    @PostMapping(value = "/user/products/save", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<?> saveProduct(@RequestPart("product") Product product,
                                         @RequestPart("imageFile") MultipartFile[] file,
                                         @RequestHeader(HttpHeaders.AUTHORIZATION) String token) {
        ProductView savedProduct = productService.saveProduct(product, file, token);

        return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
    }
//    @GetMapping("/products")
//    public List<ProductView> fetchAllProduct() {
//        return productService.fetchAllProducts();
//    }

    @RequestMapping("/products/filter")
    public Page<ProductView> filterProduct(@RequestBody FilterRequest filterRequest) {
        return productService.filterProduct(filterRequest);
    }
    @GetMapping(value = "/products/{id}")
    public ProductView getProductById(@PathVariable("id") Long id) {
        return productService.getProductById(id);
    }

//    @GetMapping("/products/page/{page}")
//    public Page<ProductView> filterProducts(@PathVariable int page, @RequestParam FilterRequest filterRequest) {
//        return productService.fetchProducts(page, filterRequest);
//    }

    @GetMapping("/products/page/{page}")
    public Page<ProductView> filterProducts(@PathVariable int page, @RequestParam(required = false) List<String> categories, @RequestParam(required = false) List<String> subCategories, @RequestParam(required = false) List<String> division, @RequestParam(required = false) List<Double> price, @RequestParam(required = false) String sort, @RequestParam(defaultValue = "") String searchKey) {
        return productService.fetchProducts(page, categories, subCategories, division, price, sort,searchKey);
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

}
 
