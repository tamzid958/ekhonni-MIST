package com.dsi.backend.controller;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.service.AppUserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        return appUserService.loginAppUser(appUser.getEmail(), appUser.getPassword());
    }

}
