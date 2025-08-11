package com.travelApp.backend.Repo.HotelRepo;

import com.travelApp.backend.Entity.HotelClass.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HotelRepo extends JpaRepository<Hotel, Integer> {
}
