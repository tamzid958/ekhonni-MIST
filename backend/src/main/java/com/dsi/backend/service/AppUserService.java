package com.dsi.backend.service;

import com.dsi.backend.model.AppUser;
import org.springframework.http.ResponseEntity;


public interface AppUserService {

    AppUser registerAppUser(AppUser appUser);


    ResponseEntity<?> loginAppUser(String email, String password);

    ResponseEntity<?> updateProfile(AppUser appUser);

    ResponseEntity<?> fetchInformation(Long id);
}

