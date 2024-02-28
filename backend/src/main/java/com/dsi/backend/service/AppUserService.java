package com.dsi.backend.service;

import com.dsi.backend.model.AppUser;
import jakarta.mail.MessagingException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


public interface AppUserService {

    AppUser registerAppUser(AppUser appUser);

    ResponseEntity<?> loginAppUser(String email, String password);

    ResponseEntity<?> updateProfile(String email, AppUser appUser);

    ResponseEntity<?> fetchInformation(String email);

    AppUser uploadImage(MultipartFile imageFile, AppUser appUser) throws IOException;

    AppUser findUser(String email);

    void generateLink(String email) throws MessagingException;

    AppUser addAdmin(AppUser appUser);

    AppUser deleteAdmin(String email);

    ResponseEntity<?> fetchOtherAdmins(String email);

//    ResponseEntity<?> deleteAccount(AppUser appUser);
}

