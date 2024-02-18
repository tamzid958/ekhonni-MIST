package com.dsi.backend.service;

import com.dsi.backend.model.AppUser;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;


public interface AppUserService {

    AppUser registerAppUser(AppUser appUser);


    ResponseEntity<?> loginAppUser(String email, String password);
}

