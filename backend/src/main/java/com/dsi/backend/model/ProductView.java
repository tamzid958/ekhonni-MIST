package com.dsi.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Set;
//projection using interface
public interface ProductView {
    String getId();
    String getName();
    String getSize();
    String getDescription();
    Category getCategory();
    Double getStartingPrice();
    Boolean getUsedCondition();
    AppUserView getSeller();
    Boolean getIsSold();
    Boolean getIsBidActive();
    Boolean getIsVisible();
    LocalDateTime getProductTime();
    default Set<ImageModel> getProductImage() {
        return null;
    }
}
