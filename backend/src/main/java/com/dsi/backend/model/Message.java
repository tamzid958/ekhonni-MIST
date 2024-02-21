package com.dsi.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.*;
import org.springframework.stereotype.Service;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
//@RequiredArgsConstructor
@Entity
public class Message extends BaseEntity<Long>{
    @Column
    private String text;
    private String link;
    private String buttonText;
}
