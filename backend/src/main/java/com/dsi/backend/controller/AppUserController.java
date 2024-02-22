package com.dsi.backend.controller;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.service.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/v1")
public class AppUserController {

    @Autowired
    public AppUserService appUserService;

    @PostMapping("/register")
    public ResponseEntity<?> registerAppUser(@RequestBody AppUser appUser) {
        AppUser registeredUser = appUserService.registerAppUser(appUser);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }
    @PostMapping("/user/login")
    public ResponseEntity<?> loginAppUser(@RequestBody AppUser appUser){
        return appUserService.loginAppUser(appUser.getEmail(),appUser.getPassword());
    }

    @GetMapping("/user/profile/{id}")
    public ResponseEntity<?> fetchInformation(@PathVariable Long id){
        return appUserService.fetchInformation(id);
    }

    @PutMapping("/user/profile/update")
    public ResponseEntity<?> updateProfile(@RequestBody AppUser appUser){
        return appUserService.updateProfile(appUser);
    }



}
