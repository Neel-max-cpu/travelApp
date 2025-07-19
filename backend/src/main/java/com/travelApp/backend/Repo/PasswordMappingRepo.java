package com.travelApp.backend.Repo;

import com.travelApp.backend.Entity.PasswordMapping;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PasswordMappingRepo extends JpaRepository<PasswordMapping, Integer> {
}
