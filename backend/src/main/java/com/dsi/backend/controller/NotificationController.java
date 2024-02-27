package com.dsi.backend.controller;

import com.dsi.backend.model.Notification;
import com.dsi.backend.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/user/notification")
public class NotificationController {
    @Autowired
    NotificationService notificationService;
    @PostMapping("/save")
    public ResponseEntity<?> saveNotification(@RequestBody Notification notification){

        return ResponseEntity.ok(notificationService.saveNotification(notification));
    }

    @GetMapping("/fetch/{email}")
    public ResponseEntity<?> fetchNotification(@PathVariable String email){
        return ResponseEntity.ok(notificationService.fetchNotification(email));
    }

    @DeleteMapping("/delete/all/{email}")
    public ResponseEntity<?> clearAllNotification(@PathVariable String email){
        return ResponseEntity.ok(notificationService.clearAllNotification(email));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> clearNotification(@PathVariable Long id){
        return ResponseEntity.ok(notificationService.clearNotification(id));
    }
}
