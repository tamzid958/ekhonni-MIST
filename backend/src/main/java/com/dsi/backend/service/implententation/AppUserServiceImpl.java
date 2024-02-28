package com.dsi.backend.service.implententation;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.AppUserView;
import com.dsi.backend.model.ImageModel;
import com.dsi.backend.model.TokenResponse;
import com.dsi.backend.repository.AppUserRepository;
import com.dsi.backend.repository.ImageRepository;
import com.dsi.backend.service.AppUserService;
import com.dsi.backend.service.NotificationService;
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

import java.io.IOException;
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
            return ResponseEntity.ok(new TokenResponse(jwtToken));
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
    public ResponseEntity<?> fetchInformation(String token) {
//        AppUser appUser = appUserRepository.findByEmail(email);
        AppUserView appUserView = appUserRepository.getByEmail(jwtTokenService.getUsernameFromToken(token.substring(7)));
        return ResponseEntity.ok(appUserView);
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
