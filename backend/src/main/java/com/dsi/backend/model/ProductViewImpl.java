package com.dsi.backend.model;

import java.time.LocalDateTime;
import java.util.Set;

public class ProductViewImpl implements ProductView {
    private final Product product;

    public ProductViewImpl(Product product) {
        this.product = product;
    }

    @Override
    public String getId() {
        return String.valueOf(product.getId());
    }

    @Override
    public String getName() {
        return product.getName();
    }

    @Override
    public String getSize() {
        return product.getSize();
    }

    @Override
    public String getDescription() {
        return product.getDescription();
    }

    @Override
    public Category getCategory() {
        return product.getCategory();
    }

    @Override
    public Double getStartingPrice() {
        return product.getStartingPrice();
    }

    @Override
    public Boolean getUsedCondition() {
        return product.getUsedCondition();
    }

    @Override
    public AppUserView getSeller() {
        return new AppUserViewImpl(product.getSeller());
    }

    @Override
    public Boolean getIsSold() {
        return product.getIsSold();
    }

    @Override
    public Boolean getIsBidActive() {
        return product.getIsBidActive();
    }

    @Override
    public Boolean getIsVisible() {
        return product.getIsVisible();
    }

    @Override
    public LocalDateTime getProductTime() {
        return product.getProductTime();
    }

    @Override
    public Set<ImageModel> getProductImage() {
        return product.getProductImage();
    }
}
