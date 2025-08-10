package com.travelApp.backend.Service;

import com.travelApp.backend.Entity.UsersClass.Users;

public interface JwtService {
    String generateToken(Users users);
    Integer extractUserId(String token);
    boolean isTokenValid(String jwt, Users userDetails);
}
