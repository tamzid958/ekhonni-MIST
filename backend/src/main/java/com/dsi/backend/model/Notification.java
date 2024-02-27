package com.dsi.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

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

    public String getFormattedTime(){
        return getNotificationTime().format(DateTimeFormatter.ofPattern("hh:mm a dd MMM, yyyy"));
    }

}
