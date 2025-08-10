package com.travelApp.backend.Service.UsersServices;

import com.travelApp.backend.Dto.UsersReq;
import com.travelApp.backend.Entity.UsersClass.Users;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface AuthService {
    Users registerUser(UsersReq req);
    boolean sendOtp(UsersReq req);
    ResponseEntity<?> signIn(UsersReq req);
    boolean sendOtpForgotPassword(UsersReq req);
    ResponseEntity<?> forgetPass(UsersReq req);
    ResponseEntity<?> resetPass(UsersReq req, String token);
    ResponseEntity<?> disableOtp(UsersReq req);
    Map<String, Object> getAccessToken();

}
