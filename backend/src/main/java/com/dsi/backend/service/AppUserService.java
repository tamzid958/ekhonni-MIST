package com.dsi.backend.service;

import com.dsi.backend.model.AppUser;
import jakarta.mail.MessagingException;
import com.dsi.backend.projection.AppUserView;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


public interface AppUserService {

    AppUserView registerAppUser(AppUser appUser);

    ResponseEntity<?> loginAppUser(String email, String password);

    ResponseEntity<?> updateProfile(String token, AppUser appUser);

    AppUserView convertToView(AppUser appUser);

    AppUser fetchInformation(String token);

    AppUserView uploadImage(MultipartFile imageFile, String token) throws IOException;

    AppUser findUser(String email);

    void generateLink(String email) throws MessagingException;

    ResponseEntity<?> validateToken(String token);

    AppUser addAdmin(AppUser appUser);

    AppUser deleteAdmin(String email);

    ResponseEntity<?> fetchOtherAdmins(String email);

//    ResponseEntity<?> deleteAccount(AppUser appUser);

    ResponseEntity<?> resetPassword(String email, String password);
}

