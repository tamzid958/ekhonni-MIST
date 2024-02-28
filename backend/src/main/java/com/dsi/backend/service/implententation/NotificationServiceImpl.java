package com.dsi.backend.service.implententation;

import com.dsi.backend.exception.NotificationNotFoundException;
import com.dsi.backend.model.AppUser;
import com.dsi.backend.model.Message;
import com.dsi.backend.model.Notification;
import com.dsi.backend.projection.NotificationView;
import com.dsi.backend.repository.AppUserRepository;
import com.dsi.backend.repository.MessageRepository;
import com.dsi.backend.repository.NotificationRepository;
import com.dsi.backend.service.JwtTokenService;
import com.dsi.backend.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.projection.SpelAwareProxyProjectionFactory;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class NotificationServiceImpl implements NotificationService {
    @Autowired
    private NotificationRepository notificationRepository;

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    private JwtTokenService jwtTokenService;

    @Override
    public NotificationView saveNotification(String token, Notification notification) {
        Message message = notification.getMessage();
        messageRepository.save(message);
        AppUser receiver = appUserRepository.findByEmail(jwtTokenService.getUsernameFromToken(token.substring(7)));
        notification.setReceiver(receiver);
        notification.setNotificationTime(LocalDateTime.now());
        Notification savedNotification = notificationRepository.save(notification);
        return new SpelAwareProxyProjectionFactory().createProjection(NotificationView.class, savedNotification);
    }

    @Override
    public List<NotificationView> fetchNotification(String token) {
        AppUser receiver = appUserRepository.findByEmail(jwtTokenService.getUsernameFromToken(token.substring(7)));
        List<Notification> notifications = notificationRepository.findByReceiver(receiver);
        return notifications.stream()
                .map(notification -> new SpelAwareProxyProjectionFactory().createProjection(NotificationView.class,notification))
                .toList();
    }

    @Override
    public String clearAllNotification(String token) {
        AppUser receiver = appUserRepository.findByEmail(jwtTokenService.getUsernameFromToken(token.substring(7)));
        List<Notification> notifications = notificationRepository.findByReceiver(receiver);
        notificationRepository.deleteAll(notifications);
        return "All notifications cleared";
    }

    @Override
    public String clearNotification(Long id) {
        Notification notification = notificationRepository.findById(id)
                .orElseThrow(()->new NotificationNotFoundException("Notification id invalid"));

        notificationRepository.delete(notification);
        return "Notification cleared";
    }


}
