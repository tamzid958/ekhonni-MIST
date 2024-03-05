package com.dsi.backend.service;

import jakarta.mail.MessagingException;

public interface MailSenderService {

    String sendMail(String mailto, String subject, String message) throws MessagingException;
}
