package com.travelApp.backend.Repo.UsersRepo;

import com.travelApp.backend.Entity.UsersClass.PasswordMapping;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PasswordMappingRepo extends JpaRepository<PasswordMapping, Integer> {
    PasswordMapping findByUserId(Integer userId);
}
