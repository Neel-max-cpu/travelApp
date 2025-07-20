package com.travelApp.backend.Repo.UsersRepo;

import com.travelApp.backend.Entity.UsersClass.ForgetPasswordLogger;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ForgetPasswordLoggerRepo extends JpaRepository<ForgetPasswordLogger, Integer> {
    Optional<ForgetPasswordLogger> findTopByEmailAndOtpAndIsActive(String email, String otp, Character isActive);
}
