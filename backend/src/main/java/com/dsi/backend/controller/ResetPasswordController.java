package com.dsi.backend.controller;


import com.dsi.backend.model.AppUser;
import com.dsi.backend.repository.AppUserRepository;
import com.dsi.backend.service.AppUserService;
import com.dsi.backend.service.ResetPasswordService;
import jakarta.mail.MessagingException;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
public class ResetPasswordController {

    @Autowired
    public AppUserService appUserService;

    public ResetPasswordService resetPasswordService;

    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@RequestParam String email) throws MessagingException {
        AppUser user = appUserService.findUser(email);
        if ( user != null) {
            appUserService.generateLink(email);
            return new ResponseEntity<>(user,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/reset-password")
    public ResponseEntity<?> checkLink(@RequestParam(required = false) String token) {
        return appUserService.validateToken(token);
    }

    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@RequestParam String email, String password) {
        return appUserService.resetPassword(email,password);
    }
}
