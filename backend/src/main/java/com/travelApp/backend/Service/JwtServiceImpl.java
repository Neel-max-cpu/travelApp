package com.travelApp.backend.Service;

import com.travelApp.backend.Entity.Users;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;

@Service
public class JwtServiceImpl implements JwtService {
    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private long jwtExpirationInMs;

    @Override
    public String generateToken(Users users){
        Key key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
        return Jwts.builder()
                .setSubject(users.getId().toString())
                .claim("email", users.getEmail())
                .claim("roleId", users.getRoleId())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationInMs))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }
}
