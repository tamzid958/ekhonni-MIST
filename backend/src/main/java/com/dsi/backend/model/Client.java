package com.dsi.backend.model;


import jakarta.persistence.Entity;
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Client extends Person {
    private String userStatus;

}
