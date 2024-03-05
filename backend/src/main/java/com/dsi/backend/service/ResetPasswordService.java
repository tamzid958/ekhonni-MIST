package com.dsi.backend.service;

import jakarta.mail.MessagingException;

public interface ResetPasswordService {

    void generateLink(String email) throws MessagingException;

}
