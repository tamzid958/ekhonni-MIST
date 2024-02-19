package com.dsi.backend.model;

import jakarta.persistence.*;
import lombok.*;

import javax.swing.text.StyledEditorKit;
import java.io.Serializable;
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
    private String category;
    private Double startingPrice;
    private String image;
    private Boolean usedCondition;
    private Boolean isApprovedByAdmin; // true-> will show in product list

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "product_image",
            joinColumns = @JoinColumn(name = "product_id"),
            inverseJoinColumns = @JoinColumn(name = "image_id")
    )
    private Set<ImageModel> productImage;
}
