package com.travelApp.backend.Entity.UsersClass;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "register_user_otp")
public class RegisterUserOtp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "email")
    private String email;

    @Column(name = "otp")
    private String otp;

    @Column(name = "is_active")
    private Character isActive;

    @Column(name = "created_on")
    private LocalDateTime createdOn;
}
