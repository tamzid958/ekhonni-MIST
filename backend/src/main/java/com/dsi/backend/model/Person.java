package com.dsi.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.*;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@MappedSuperclass
public class Person {

    @Id //primary key
    private String id;
    private String name;
    private String email;
    private String password;
    private String contact;
    private String address;
    private String profilePicture;

    public void verify
}

