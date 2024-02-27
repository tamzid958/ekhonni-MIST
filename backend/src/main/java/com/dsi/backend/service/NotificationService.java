package com.dsi.backend.service;

import com.dsi.backend.model.Notification;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface NotificationService {
    Notification saveNotification(Notification notification);

    List<Notification> fetchNotification(String email);

    String clearAllNotification(String email);
}
