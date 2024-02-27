package com.dsi.backend.projection;

import com.dsi.backend.model.AppUserView;
import com.dsi.backend.model.Message;

import java.time.LocalDateTime;

public interface NotificationView {
    Long getId();
    Message getMessage();
    AppUserView getReceiver();
    LocalDateTime getNotificationTime();
}
