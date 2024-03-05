package com.dsi.backend.service.implententation;

import com.dsi.backend.service.JwtTokenService;
import com.dsi.backend.service.MailSenderService;
import com.dsi.backend.service.ResetPasswordService;
import jakarta.mail.MessagingException;
import org.springframework.stereotype.Service;

@Service
public class ResetPasswordServiceImpl implements ResetPasswordService {


    private JwtTokenService jwtTokenService;

    private String baseURL="http://localhost:8080";

    private MailSenderService mailSenderService;


    @Override
    public void generateLink(String email) throws MessagingException {
        String token = jwtTokenService.createLinkToken(email);
        String link = baseURL + "/api/v1" + "/reset-password/" + token;
        mailSenderService.sendMail(email,"Reset Your Password", link);
    }

}
