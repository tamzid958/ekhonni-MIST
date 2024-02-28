package com.dsi.backend.service.implententation;

import com.dsi.backend.model.BaseEntity;
import com.dsi.backend.model.ImageModel;
import com.dsi.backend.model.Product;
import com.dsi.backend.repository.ImageModelRepository;
import com.dsi.backend.service.ImageModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ImageModelServiceImpl implements ImageModelService {


    @Autowired
    private ImageModelRepository imageModelRepository;

    @Override
    public Set<ImageModel> uploadImage(Product product, MultipartFile[] multipartFiles) throws IOException {
        Set<ImageModel> image = new HashSet<>();

        for (MultipartFile file: multipartFiles) {
            ImageModel imageModel = new ImageModel(product, file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes());
            imageModelRepository.save(imageModel);
            image.add(imageModel);
        }

        return image;
    }

    @Override
    public Set<ImageModel> downloadImage(Long id) {
        return imageModelRepository.findAllByProductId(id);
    }
}
