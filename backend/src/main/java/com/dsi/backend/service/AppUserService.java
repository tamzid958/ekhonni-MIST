package com.dsi.backend.service;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.AppUserView;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


public interface AppUserService {

    AppUserView registerAppUser(AppUser appUser);

    ResponseEntity<?> loginAppUser(String email, String password);

    ResponseEntity<?> updateProfile(String email, AppUser appUser);

    ResponseEntity<?> fetchInformation(String email);

    AppUserView uploadImage(MultipartFile imageFile, AppUser appUser) throws IOException;

    AppUser addAdmin(AppUser appUser);

    AppUser deleteAdmin(String email);

    ResponseEntity<?> fetchOtherAdmins(String email);

//    ResponseEntity<?> deleteAccount(AppUser appUser);
}

