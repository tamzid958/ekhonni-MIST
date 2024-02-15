package com.dsi.backend.dto;

import lombok.*;

import java.util.List;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public abstract class PersonDto {

    private String id;
    private String name;
    private String email;
    private String password;
    private String contact;
    private String address;
    private String profilePicture;

}
