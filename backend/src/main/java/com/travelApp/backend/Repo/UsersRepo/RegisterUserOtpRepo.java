package com.travelApp.backend.Repo.UsersRepo;

import com.travelApp.backend.Entity.UsersClass.RegisterUserOtp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RegisterUserOtpRepo extends JpaRepository<RegisterUserOtp, Integer> {
    Optional<RegisterUserOtp> findTopByEmailAndOtpAndIsActive(String email, String otp, Character isActive);
}
