package com.travelApp.backend.Dto;

import lombok.Data;

@Data
public class UsersReq {
    private String name;
    private String email;
    private String otp;
    private String password;
    private String confirmPassword;
}
