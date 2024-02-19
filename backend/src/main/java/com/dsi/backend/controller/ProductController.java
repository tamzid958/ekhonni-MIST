package com.dsi.backend.controller;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.ImageModel;
import com.dsi.backend.model.Product;
import com.dsi.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/api/v1/user/products")
public class ProductController {

    @Autowired
    public ProductService productService;

//    @PostMapping(value = "/save", consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
//    public ResponseEntity<?> saveProduct(@RequestPart("product") Product product,
//                                         @RequestPart("imageFile")MultipartFile[] file) {
//        try {
//            Set<ImageModel> image = uploadImage(file);
//            product.setProductImage(image);
//            Product savedProduct = productService.saveProduct(product);
//
//            return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
//        } catch (Exception exception) {
//            System.out.println(exception.getMessage());
//            return null;
//        }
//    }

//    public Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException {
//        Set<ImageModel> image = new HashSet<>();
//
//        for (MultipartFile file: multipartFiles) {
//            ImageModel imageModel = new ImageModel(file.getOriginalFilename(),
//                    file.getContentType(),
//                    file.getBytes());
//            image.add(imageModel);
//        }
//
//        return image;
//    }


}
