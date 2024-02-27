package com.dsi.backend.service;

import com.dsi.backend.model.Notification;
import com.dsi.backend.projection.NotificationView;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface NotificationService {
    NotificationView saveNotification(Notification notification);

    List<NotificationView> fetchNotification(String email);

    String clearAllNotification(String email);

    String clearNotification(Long id);
}
