package com.dsi.backend.model;

import com.dsi.backend.repository.ImageModelRepository;
import com.dsi.backend.service.ImageModelService;
import com.dsi.backend.service.implententation.ImageModelServiceImpl;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Set;



@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Product extends BaseEntity<Long>{

    @Column
    private String name;
    private String size;
    private String description;
    @ManyToOne
    @JoinColumn(name = "category_id", referencedColumnName = "id")
    private Category category;
    private Double startingPrice;
    private Boolean usedCondition;
    private Boolean isApprovedByAdmin; // true-> will show in product list
    @ManyToOne @JoinColumn (name = "seller_id", referencedColumnName = "id", columnDefinition = "bigint")
    private AppUser seller;
    private Boolean isSold;
    private Boolean isBidActive;
    private LocalDateTime productTime;
    private Boolean isVisible;
    private Long finalBuyerId;


//    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
//    @JoinTable(name = "product_image",
//            joinColumns = @JoinColumn(name = "product_id"),
//            inverseJoinColumns = @JoinColumn(name = "image_id")
//    )
//    private Set<ImageModel> productImage;
//
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "product", cascade = CascadeType.ALL)
//    @JoinColumn(referencedColumnName = "product_id")
    private Set<ImageModel> productImage;

    public String getCategoryName() {
        if (this.category != null) {
            return this.category.getCategory();
        }
        return null;
    }

//    public Set<ImageModel> getProductImage() {
//
//    }

}
