package com.dsi.backend.projection.implementation;

import com.dsi.backend.model.AppUser;
import com.dsi.backend.projection.AppUserView;

class AppUserViewImpl implements AppUserView {
    private final AppUser appUser;

    public AppUserViewImpl(AppUser appUser) {
        this.appUser = appUser;
    }

    @Override
    public String getId() {
        return String.valueOf(appUser.getId());
    }

    @Override
    public String getName() {
        return appUser.getName();
    }

    @Override
    public String getEmail() {
        return appUser.getEmail();
    }

    @Override
    public String getContact() {
        return appUser.getContact();
    }

    @Override
    public String getAddress() {
        return appUser.getAddress();
    }

    @Override
    public String getDivision() {
        return appUser.getDivision();
    }

    @Override
    public String getClientStatus() {
        return appUser.getClientStatus();
    }

    @Override
    public ImageModel getProfilePicture() {
        return appUser.getProfilePicture();
    }
}
