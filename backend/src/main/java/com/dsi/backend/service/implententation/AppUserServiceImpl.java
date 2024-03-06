package com.dsi.backend.service.implententation;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.projection.AppUserView;
import com.dsi.backend.model.ImageModel;
import com.dsi.backend.model.TokenResponse;
import com.dsi.backend.projection.LoginView;
import com.dsi.backend.repository.AppUserRepository;
import com.dsi.backend.repository.ImageRepository;
import com.dsi.backend.service.AppUserService;
import com.dsi.backend.service.MailSenderService;
import com.dsi.backend.service.NotificationService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.projection.SpelAwareProxyProjectionFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.dsi.backend.service.JwtTokenService;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriComponentsBuilder;

import java.io.IOException;
import java.util.HashMap;
import java.util.Date;
import java.util.List;
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
    public AppUserView registerAppUser(AppUser appUser){
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        appUser.setClientStatus("verified");
        appUser.setRole("ROLE_USER");
        AppUser savedAppUser = appUserRepository.save(appUser);
        return new SpelAwareProxyProjectionFactory().createProjection(AppUserView.class,savedAppUser);
    }

    @Override
    public ResponseEntity<?> loginAppUser(String email, String password) {
        try{
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email, password);
            authenticationManager.authenticate(authenticationToken);
            String jwtToken = jwtTokenService.createToken(email);
            AppUser appUser = appUserRepository.findByEmail(email);
            LoginView loginView = new SpelAwareProxyProjectionFactory().createProjection(LoginView.class, appUser);
            Map<String, Object> responseBody = new HashMap<>();
            responseBody.put("user", loginView);
            responseBody.put("token", jwtToken);
            return ResponseEntity.ok(responseBody);
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return new ResponseEntity<>(Map.of("error", "bad credential"),HttpStatus.UNAUTHORIZED);
    }

    @Override
    public ResponseEntity<?> updateProfile(String token, AppUser appUser) {
        if(appUser==null){
            return new ResponseEntity<>("Nothing to be updated with", HttpStatus.NO_CONTENT);
        }
        AppUser updatedAppUser = appUserRepository.findByEmail(jwtTokenService.getUsernameFromToken(token.substring(7)));

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
        AppUser savedAppUser = appUserRepository.save(updatedAppUser);
//        return new ResponseEntity<>(appUserRepository.getByEmail(savedAppUser.getEmail()),HttpStatus.OK);
//        ProjectionFactory projectionFactory = new SpelAwareProxyProjectionFactory();
        AppUserView appUserView = new SpelAwareProxyProjectionFactory().createProjection(AppUserView.class, savedAppUser);
        return new ResponseEntity<>(appUserView,HttpStatus.OK);

    }

    @Override
    public AppUserView convertToView(AppUser appUser){
        return new SpelAwareProxyProjectionFactory().createProjection(AppUserView.class, appUser);
    }

    @Override
    public AppUser fetchInformation(String token) {
//        AppUser appUser = appUserRepository.findByEmail(email);
        return appUserRepository.findByEmail(jwtTokenService.getUsernameFromToken(token.substring(7)));
    }

    @Override
    public AppUserView uploadImage(MultipartFile imageFile, String token) throws IOException {
        ImageModel imageModel = new ImageModel(imageFile.getOriginalFilename(),
                imageFile.getContentType(),
                imageFile.getBytes());
        imageModel = imageRepository.save(imageModel);

        AppUser appUser = appUserRepository.findByEmail(jwtTokenService.getUsernameFromToken(token.substring(7)));
        appUser.setProfilePicture(imageModel);
        AppUser savedAppUser = appUserRepository.save(appUser);

        return new SpelAwareProxyProjectionFactory().createProjection(AppUserView.class, savedAppUser);
    }

    @Override

    public AppUser findUser(String email) {
        return appUserRepository.findByEmail(email);
    }

    @Override
    public void generateLink(String email) throws MessagingException {
        String token = jwtTokenService.createLinkToken(email);
        String url = UriComponentsBuilder.fromHttpUrl(baseURL).path("/api/v1/reset-password").queryParam("token", token).toUriString();
        String link = baseURL + "/api/v1/reset-password?token=" + token;

        String message = "This email has been sent to you because there has been an attempt to change your account password. If this is really you, click on this link to change your password:" + link ;


        mailSenderService.sendMail(email, "Reset Your Password", message);
    }

    @Override
    public ResponseEntity<?> validateToken(String token) {
        String email = jwtTokenService.getUsernameFromToken(token);
        long expirationTime = jwtTokenService.getExpirationDateFromToken(token).getTime();
        long currentTime = System.currentTimeMillis();

        AppUser appUser = appUserRepository.findByEmail(email);
        if (appUser != null) {
            if (currentTime <= expirationTime) {
                return new ResponseEntity<>(appUser,HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(HttpStatus.REQUEST_TIMEOUT);
    }

    @Override
    public AppUser addAdmin(AppUser appUser) {
        appUser.setPassword(passwordEncoder.encode(appUser.getPassword()));
        appUser.setRole("ROLE_ADMIN");
        return appUserRepository.save(appUser);
    }

    @Override
    public AppUser deleteAdmin(String email) {

        AppUser admin = appUserRepository.findByEmail(email);
        appUserRepository.delete(admin);

        return null;
    }

    @Override
    public ResponseEntity<?> fetchOtherAdmins(String email) {
        AppUser loggedAdmin = appUserRepository.findByEmail(email);
        List<AppUser> userList= appUserRepository.findAllByRole("ROLE_ADMIN");
        userList.remove(loggedAdmin);
        return new ResponseEntity<>(userList, HttpStatus.OK);
    }

    @Override
    public ResponseEntity<?> resetPassword(String email, String password) {
        AppUser user = appUserRepository.findByEmail(email);
        if ( user != null) {
            user.setPassword(passwordEncoder.encode(password));
            appUserRepository.save(user);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
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
