package com.dsi.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
//@AllArgsConstructor // Already defined in Person class no arg, as Person and Admin have same attributes.
@ToString
@Entity
@Table(name = "admin")
public class Admin extends Person{

}


