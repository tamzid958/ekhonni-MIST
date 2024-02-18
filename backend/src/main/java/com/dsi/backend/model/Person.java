package com.dsi.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public class Person extends BaseEntity<Long> implements Serializable {

    @Column
    private String name;
    @Column(unique = true)
    private String email;
    private String contact;
    private String address;
    private String division;
    private String password;
    private String profilePicture;
}

