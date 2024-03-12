package com.dsi.backend.service.implententation;

import com.dsi.backend.model.ImageModel;
import com.dsi.backend.model.Product;
import com.dsi.backend.projection.ImageModelView;
import com.dsi.backend.repository.ImageModelRepository;
import com.dsi.backend.service.ImageModelService;
import net.coobird.thumbnailator.Thumbnails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.projection.ProjectionFactory;
import org.springframework.data.projection.SpelAwareProxyProjectionFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.*;

@Service
public class ImageModelServiceImpl implements ImageModelService {


    @Autowired
    private ImageModelRepository imageModelRepository;

    @Override
    public Set<ImageModel> uploadImage(Product product, MultipartFile[] multipartFiles) throws IOException {
        Set<ImageModel> image = new HashSet<>();


        for (MultipartFile file : multipartFiles) {
//            File f = (File) file1;
//            Thumbnails.of(f).scale(1).outputQuality(0.5).toFile(f);
//            MultipartFile file = (MultipartFile) f;
            Base64.Encoder encoder = Base64.getEncoder();
            String bytes = encoder.encodeToString(file.getBytes());
            String imageBase64 = "data:" + file.getContentType() + ";base64, " + bytes;
            ImageModel imageModel = new ImageModel(product, file.getOriginalFilename(),
                    file.getContentType(),
                    imageBase64
                    );
            imageModelRepository.save(imageModel);
            image.add(imageModel);
        }

        return image;
    }

    @Override
    public List<ImageModelView> downloadImage(Long productId) {
        Set<ImageModel> imageModels = imageModelRepository.findAllByProductId(productId);
        List<ImageModelView> imageModelViews = new ArrayList<>();
        ProjectionFactory projectionFactory = new SpelAwareProxyProjectionFactory();

        for (ImageModel image : imageModels) {
            imageModelViews.add(projectionFactory.createProjection(ImageModelView.class, image));
        }
        return imageModelViews;
    }
}
