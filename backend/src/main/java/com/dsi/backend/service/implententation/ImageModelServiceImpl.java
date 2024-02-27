package com.dsi.backend.service.implententation;

import com.dsi.backend.model.BaseEntity;
import com.dsi.backend.model.ImageModel;
import com.dsi.backend.model.Product;
import com.dsi.backend.repository.ImageModelRepository;
import com.dsi.backend.service.ImageModelService;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class ImageModelServiceImpl implements ImageModelService {

    private ImageModelRepository imageModelRepository;

    @Override
    public Set<ImageModel> uploadImage(Product product, MultipartFile[] multipartFiles) throws IOException {
        Set<ImageModel> image = new HashSet<>();

        for (MultipartFile file: multipartFiles) {
            ImageModel imageModel = new ImageModel(file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes());
            image.add(imageModel);
        }

        return image;
    }

    @Override
    public Set<ImageModel> downloadImage(Product product) {
        List<Long> imageId= product.getProductImage().stream().map(BaseEntity::getId).toList();

        return imageModelRepository.findImageModelByIdIsIn(imageId);
    }
}
