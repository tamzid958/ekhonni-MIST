package com.dsi.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class PersonEntity {

    @Id //primary key
    private String id;
    private String name;
    private String email;
    private String password;
    private String contact;
    private String address;
    private String profilePicture;
}

