package com.dsi.backend.projection;

import com.dsi.backend.model.ImageModel;
import jakarta.persistence.Column;
import jakarta.persistence.OneToOne;

public interface AppUserView {

    Long getId();
    String getName();
    String getEmail();
    String getContact();
    String getAddress();
    String getDivision();
    String getClientStatus();
    ImageModel getProfilePicture();
}
