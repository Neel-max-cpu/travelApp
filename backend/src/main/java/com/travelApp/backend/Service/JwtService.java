package com.travelApp.backend.Service;

import com.travelApp.backend.Entity.Users;

public interface JwtService {
    String generateToken(Users users);
}
