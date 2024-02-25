package com.dsi.backend.service.implententation;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.ImageModel;
import com.dsi.backend.model.TokenResponse;
import com.dsi.backend.repository.AppUserRepository;
import com.dsi.backend.repository.ImageRepository;
import com.dsi.backend.service.AppUserService;
import com.dsi.backend.service.MailSenderService;
import com.dsi.backend.service.NotificationService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.dsi.backend.service.JwtTokenService;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.util.Map;

@Service
public class AppUserServiceImpl implements AppUserService{

    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenService jwtTokenService;

    @Autowired
    private ImageRepository imageRepository;

    @Autowired
    private NotificationService notificationService;

    @Autowired
    private MailSenderService mailSenderService;

    private String baseURL="http://localhost:8080";


    @Override
    public AppUser registerAppUser(AppUser appUser){
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        appUser.setClientStatus("verified");
        appUser.setRole("ROLE_USER");
        return appUserRepository.save(appUser);
    }

    @Override
    public ResponseEntity<?> loginAppUser(String email, String password) {
        try{
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email, password);
            authenticationManager.authenticate(authenticationToken);
            String jwtToken = jwtTokenService.createToken(email);
            return ResponseEntity.ok(new TokenResponse(jwtToken));
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(Map.of("error", "bad credential"),HttpStatus.UNAUTHORIZED);
    }

    @Override
    public ResponseEntity<?> updateProfile(AppUser appUser) {
        if(appUser==null){
            return new ResponseEntity<>("Nothing to be updated with", HttpStatus.NO_CONTENT);
        }
        AppUser updatedAppUser = appUserRepository.findByEmail(appUser.getEmail());

        if(appUser.getName()!=null) {
            updatedAppUser.setName(appUser.getName());
        }
        else if(appUser.getEmail()!=null){
            updatedAppUser.setEmail(appUser.getEmail());
        }
        else if(appUser.getContact()!=null){
            updatedAppUser.setContact(appUser.getContact());
        }
        else if(appUser.getAddress()!=null){
            updatedAppUser.setAddress(appUser.getAddress());
        }
        else if(appUser.getDivision()!=null){
            updatedAppUser.setDivision(appUser.getDivision());
        }
        else{
            return new ResponseEntity<>("Nothing to be updated with", HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(appUserRepository.save(updatedAppUser),HttpStatus.OK);
    }



    @Override
    public ResponseEntity<?> fetchInformation(AppUser appUser) {
        appUser = appUserRepository.findByEmail(appUser.getEmail());
        return ResponseEntity.ok(appUser);
    }

    @Override
    public AppUser uploadImage(MultipartFile imageFile, AppUser appUser) throws IOException {
        ImageModel imageModel = new ImageModel(imageFile.getOriginalFilename(),
                imageFile.getContentType(),
                imageFile.getBytes());
        imageModel = imageRepository.save(imageModel);

        appUser = appUserRepository.findByEmail(appUser.getEmail());
        appUser.setProfilePicture(imageModel);

        return appUserRepository.save(appUser);
    }

    @Override
    public AppUser findUser(String email) {
        return appUserRepository.findByEmail(email);
    }

    @Override
    public void generateLink(String email) throws MessagingException {
        String token = jwtTokenService.createLinkToken(email);
        String url = UriComponentsBuilder.fromHttpUrl(baseURL).path("/api/v1/reset-password").queryParam("token",token).toUriString();
        String link = baseURL + "/api/v1/reset-password/?token=" + token;
        mailSenderService.sendMail(email,"Reset Your Password", link);
    }

//    @Override
//    public ResponseEntity<?> deleteAccount(AppUser appUser) {
////        appUser = appUserRepository.findById(appUser.getId())
////                .orElseThrow(()->new UsernameNotFoundException("Person does not exist"));
//
//        appUser = appUserRepository.findByEmail(appUser.getEmail());
//        notificationService.clearAllNotification(appUser.getId());
//        return ResponseEntity.ok("Account deleted successfully");
//    }


}
