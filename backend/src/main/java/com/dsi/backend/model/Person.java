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

    @Column(name = "name")
    private String name;

    @Column(name="email")
    private String email;

    @Column(name="contact")
    private String contact;

    @Column(name="address")
    private String address;

    @Column(name="division")
    private String division;

    @Column(name="password")
    private String password;

    @Column(name="profile_picture")
    private String profilePicture;
}

