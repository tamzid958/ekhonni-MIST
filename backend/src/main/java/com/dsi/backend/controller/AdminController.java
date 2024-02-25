package com.dsi.backend.controller;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.Product;
import com.dsi.backend.service.AdminService;
import com.dsi.backend.service.AppUserService;
import com.dsi.backend.service.ProductService;
import jakarta.persistence.criteria.CriteriaBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@RequestMapping("api/v1/admin")
public class AdminController {

    @Autowired
    public AppUserService appUserService;

    @Autowired
    public ProductService productService;

    @Autowired
    public AdminService adminService;



    @PostMapping("/login")
    public ResponseEntity<?> loginAdmin(@RequestBody AppUser appUser){
        return appUserService.loginAppUser(appUser.getEmail(),appUser.getPassword());
    }

    @PutMapping("/products/{id}")
    public Product updateProduct(@PathVariable("id") Long id, @RequestParam Boolean isApprovedByAdmin) {
        return productService.updateProduct(id, isApprovedByAdmin);
    }

    @GetMapping("/products/review")
    public List<Product> fetchAllRequest() {
        return productService.fetchAllRequests();
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


}
