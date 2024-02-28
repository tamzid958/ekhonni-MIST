package com.dsi.backend.projection;

import com.dsi.backend.model.Message;

public interface NotificationView {
    Long getId();
    Message getMessage();
    AppUserView getReceiver();
    String getFormattedTime();


}
