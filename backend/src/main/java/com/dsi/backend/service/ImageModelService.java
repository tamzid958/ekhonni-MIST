package com.dsi.backend.service;

import com.dsi.backend.model.ImageModel;
import com.dsi.backend.model.Product;
import com.dsi.backend.projection.ImageModelView;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Set;

@Service
public interface ImageModelService {
    public abstract Set<ImageModel> uploadImage(Product product, MultipartFile[] multipartFiles) throws IOException;

    public abstract List<ImageModelView> downloadImage(Long id);

}
