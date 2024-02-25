package com.dsi.backend.service.implententation;

import com.dsi.backend.service.MailSenderService;
import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class MailSenderServiceImpl implements MailSenderService {

    private final JavaMailSender mailSender;


//    @Override
//    public String sendMail(String mailto, String subject, String msg) throws MessagingException {
//        MimeMessage message = mailSender.createMimeMessage();
//        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(message,
//                MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
//                StandardCharsets.UTF_8.name());
//
//
//        mimeMessageHelper.setTo(mailto);
//        mimeMessageHelper.setSubject(subject);
//        mimeMessageHelper.setFrom("ekhonni.official@gmail.com");
//        mimeMessageHelper.setText(msg, true);
//        mailSender.send(message);
//    }

    @Override
    public String sendMail(String mailto, String subject, String message) {

        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();

        simpleMailMessage.setFrom("ekhonni.official@gmail.com");
        simpleMailMessage.setTo(mailto);
        simpleMailMessage.setSubject(subject);
        simpleMailMessage.setText(message);

        this.mailSender.send(simpleMailMessage);
        return "Email Sent";
    }

}
