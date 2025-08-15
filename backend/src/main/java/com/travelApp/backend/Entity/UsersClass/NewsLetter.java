package com.travelApp.backend.Entity.UsersClass;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "news_letter")
public class NewsLetter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "email")
    private String email;

    @Column(name = "created_on")
    private LocalDateTime createdOn;
}
