package com.dsi.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "image")
public class ImageModel extends BaseEntity<Long>{

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn (name = "product_id")//, referencedColumnName = "id", columnDefinition = "bigint")
    private Product product;
    private String name;
    private String type;

    @Column(name = "image_byte", columnDefinition = "TEXT")
    private String imageByte;
}
