package com.dsi.backend.service;

import com.dsi.backend.model.Notification;
import com.dsi.backend.projection.NotificationView;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface NotificationService {
    NotificationView saveNotification(String token, Notification notification);

    List<NotificationView> fetchNotification(String token);

    String clearAllNotification(String token);

    String clearNotification(Long id);
}
