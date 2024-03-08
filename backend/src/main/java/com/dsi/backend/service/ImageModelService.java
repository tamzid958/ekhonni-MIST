package com.dsi.backend.service;

import com.dsi.backend.model.ImageModel;
import com.dsi.backend.model.Product;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Set;

@Service
public interface ImageModelService {
    public abstract Set<ImageModel> uploadImage(Product product, MultipartFile[] multipartFiles) throws IOException;

    public abstract Set<ImageModel> downloadImage(Long id);

}
