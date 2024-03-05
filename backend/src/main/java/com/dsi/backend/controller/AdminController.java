package com.dsi.backend.controller;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.Category;
import com.dsi.backend.model.Product;
import com.dsi.backend.projection.ProductView;
import com.dsi.backend.service.AdminService;
import com.dsi.backend.service.AppUserService;
import com.dsi.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/admin")
public class AdminController {

    @Autowired
    public AppUserService appUserService;

    @Autowired
    public ProductService productService;

    @Autowired
    public AdminService adminService;


    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable("id") Long id, @RequestParam Boolean isApprovedByAdmin) {
        return productService.updateProduct(id, isApprovedByAdmin);
    }

    @GetMapping("/products/review")
    public Map<String, Object> fetchAllRequest() {
        Map<String, Object> result = new HashMap<>();
        List<ProductView> product = productService.fetchAllRequests();
        int size = product.size();
        result.put("products", product);
        result.put("size", size);
        return result;
    }

    @PostMapping("/add-admin")
    public ResponseEntity<?> addAdmin(@RequestBody AppUser appUser) {
        return new ResponseEntity<>(appUserService.addAdmin(appUser), HttpStatus.CREATED);
    }


    @GetMapping("/fetch-admin")
    public ResponseEntity<?> fetchAdmin(@RequestParam String email) {
        return new ResponseEntity<>(appUserService.fetchOtherAdmins(email), HttpStatus.CREATED);
    }


    @PostMapping("/delete-admin")
    public ResponseEntity<?> deleteAdmin(@RequestParam String email) {
        return new ResponseEntity<>(appUserService.deleteAdmin(email), HttpStatus.CREATED);
    }


    @PostMapping("/add-category")
    public ResponseEntity<?> insertCategory(@RequestBody Category category) {
        return new ResponseEntity<>(productService.insertCategory(category), HttpStatus.CREATED);
    }

    @PostMapping("/delete-category")
    public ResponseEntity<?> removeCategory(@RequestBody Category category) {
        return new ResponseEntity<>(productService.removeCategory(category), HttpStatus.OK);
    }

}
