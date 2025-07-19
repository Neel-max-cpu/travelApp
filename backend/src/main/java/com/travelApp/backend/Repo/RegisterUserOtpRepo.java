package com.travelApp.backend.Repo;

import com.travelApp.backend.Entity.RegisterUserOtp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RegisterUserOtpRepo extends JpaRepository<RegisterUserOtp, Integer> {
    Optional<RegisterUserOtp> findTopByEmailAndOtpAndIsActive(String email, String otp, Character isActive);
}
