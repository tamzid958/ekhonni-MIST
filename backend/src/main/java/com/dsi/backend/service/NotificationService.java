package com.dsi.backend.service;

import com.dsi.backend.model.Notification;
import org.springframework.stereotype.Service;

@Service
public interface NotificationService {
    Notification saveNotification(Notification notification);
}
