package com.travelApp.backend.Repo.UsersRepo;

import com.travelApp.backend.Entity.UsersClass.NewsLetter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface NewsLetterRepo extends JpaRepository<NewsLetter, Integer> {
    Optional<NewsLetter> findByEmail(String email);
}
