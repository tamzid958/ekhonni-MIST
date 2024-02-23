package com.dsi.backend.service;

import com.dsi.backend.model.AppUser;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


public interface AppUserService {

    AppUser registerAppUser(AppUser appUser);

    ResponseEntity<?> loginAppUser(String email, String password);

    ResponseEntity<?> updateProfile(AppUser appUser);

    ResponseEntity<?> fetchInformation(AppUser appUser);

    AppUser uploadImage(MultipartFile imageFile, AppUser appUser) throws IOException;

//    ResponseEntity<?> deleteAccount(AppUser appUser);
}

