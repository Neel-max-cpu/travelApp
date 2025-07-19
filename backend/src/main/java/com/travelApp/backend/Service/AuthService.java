package com.travelApp.backend.Service;

import com.travelApp.backend.Dto.UsersReq;
import com.travelApp.backend.Entity.Users;
import org.springframework.http.ResponseEntity;

public interface AuthService {
    Users registerUser(UsersReq req);
    boolean sendOtp(UsersReq req);
    ResponseEntity<?> signIn(UsersReq req);
}
