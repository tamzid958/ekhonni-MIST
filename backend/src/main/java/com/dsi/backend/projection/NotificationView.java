package com.dsi.backend.projection;

import com.dsi.backend.model.AppUserView;
import com.dsi.backend.model.Message;
import org.springframework.beans.factory.annotation.Value;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public interface NotificationView {
    Long getId();
    Message getMessage();
    AppUserView getReceiver();
    String getFormattedTime();


}
