package com.dsi.backend.controller;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.service.AppUserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class AppUserController {

    @Autowired
    public AppUserService appUserService;

    @PostMapping("/register")
    public ResponseEntity<String> registerAppUser(@RequestBody AppUser appUser) {
        AppUser registeredUser = appUserService.registerAppUser(appUser);
        return new ResponseEntity<>("User registered successfully", HttpStatus.CREATED);
    }

}
