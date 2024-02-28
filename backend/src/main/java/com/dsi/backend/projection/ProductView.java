package com.dsi.backend.projection;

import com.dsi.backend.model.Category;
import com.dsi.backend.model.ImageModel;
import com.dsi.backend.projection.AppUserView;

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
    Set<ImageModel> getProductImage();
}
