package com.travelApp.backend.Entity.UsersClass;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "forget_password_log")
public class ForgetPasswordLogger {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "user_id")
    private Integer userId;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "email")
    private String email;

    @Column(name = "otp")
    private String otp;

    @Column(name = "is_active")
    private Character isActive;

    @Column(name = "created_on")
    private LocalDateTime createdOn;
}
