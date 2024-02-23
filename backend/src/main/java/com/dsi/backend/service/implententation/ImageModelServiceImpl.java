package com.dsi.backend.service.implententation;

import com.dsi.backend.model.ImageModel;
import com.dsi.backend.service.ImageModelService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

@Service
public class ImageModelServiceImpl implements ImageModelService {


    @Override
    public Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException {
        Set<ImageModel> image = new HashSet<>();

        for (MultipartFile file: multipartFiles) {
            ImageModel imageModel = new ImageModel(file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes());
            image.add(imageModel);
        }

        return image;
    }
}
