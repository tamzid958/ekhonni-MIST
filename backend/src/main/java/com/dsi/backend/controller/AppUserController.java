package com.dsi.backend.controller;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.projection.AppUserView;
import com.dsi.backend.service.AppUserService;
import com.dsi.backend.service.JwtTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Map;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/v1")
public class AppUserController {

    @Autowired
    public AppUserService appUserService;

    @PostMapping("/register")
    public ResponseEntity<?> registerAppUser(@RequestBody AppUser appUser) {
        AppUserView registeredUser = appUserService.registerAppUser(appUser);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginAppUser(@RequestBody AppUser appUser){

        return appUserService.loginAppUser(appUser.getEmail(), appUser.getPassword());
    }

    @GetMapping("/user/profile")
    public ResponseEntity<?> fetchInformation(@RequestHeader(HttpHeaders.AUTHORIZATION) String token){
        AppUser appUser = appUserService.fetchInformation(token);
        return ResponseEntity.ok(appUserService.convertToView(appUser));
    }

    @PutMapping("/user/profile/update")
    public ResponseEntity<?> updateProfile(@RequestHeader(HttpHeaders.AUTHORIZATION) String token, @RequestBody AppUser appUser){
        return appUserService.updateProfile(token,appUser);
    }

    @PutMapping(value="/user/profile/upload-image", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> uploadImage(@RequestPart MultipartFile imageFile, @RequestHeader(HttpHeaders.AUTHORIZATION) String token){
        try{
//            System.out.println(appUser.getId());

            return ResponseEntity.ok(appUserService.uploadImage(imageFile, token));
        }
        catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("error", "Image upload failed"));
        }
    }
//    @DeleteMapping("/user/profile/delete-account")
//    public ResponseEntity<?> deleteAccount(@RequestBody AppUser appUser){
//        return appUserService.deleteAccount(appUser);
//    }

}
