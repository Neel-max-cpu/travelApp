package com.travelApp.backend.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "password_mapping")
public class PasswordMapping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "user_name")
    private  String userName;

    @Column(name = "password")
    private String password;

    @Column(name = "created_on", columnDefinition = "DATETIME")
    private LocalDateTime createdOn;

    @Column(name = "last_modified", columnDefinition = "DATETIME")
    private LocalDateTime lastModified;
}
