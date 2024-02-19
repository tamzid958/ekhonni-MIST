package com.dsi.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table(name = "image")
public class ImageModel extends BaseEntity<Long>{

    private String name;
    private String type;
    @Column(length = 50000000, name = "image_byte")
    private byte[] imageByte;
}
