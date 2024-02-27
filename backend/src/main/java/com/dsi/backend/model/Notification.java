package com.dsi.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
//@RequiredArgsConstructor
@Entity
public class Notification extends BaseEntity<Long>{
//    @Column
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn
    private Message message;
    @ManyToOne
    @JoinColumn
    private AppUser receiver;
    private LocalDateTime notificationTime;


}
