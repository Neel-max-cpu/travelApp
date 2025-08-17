package com.travelApp.backend.Repo.HotelRepo;

import com.travelApp.backend.Entity.HotelClass.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelRepo extends JpaRepository<Hotel, Integer> {
    List<Hotel> findByUserId(Integer userId);
    List<Hotel> findByUserIdOrderByIdDesc(Integer userId);
    List<Hotel> findAllByOrderByIdDesc();
}
