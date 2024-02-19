package com.dsi.backend.controller;

import com.dsi.backend.model.Notification;
import com.dsi.backend.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class NotificationController {
    @Autowired
    NotificationService notificationService;
    @PostMapping("/user/notification/save")
    public ResponseEntity<?> saveNotification(@RequestBody Notification notification){

        return ResponseEntity.ok(notificationService.saveNotification(notification));
    }
}
