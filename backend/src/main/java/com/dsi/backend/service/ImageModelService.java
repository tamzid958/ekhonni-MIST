package com.dsi.backend.service;

import com.dsi.backend.model.ImageModel;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Set;

@Service
public interface ImageModelService {
    Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException;
}
