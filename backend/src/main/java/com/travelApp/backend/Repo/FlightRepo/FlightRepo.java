package com.travelApp.backend.Repo.FlightRepo;

import com.travelApp.backend.Entity.FlightClass.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FlightRepo extends JpaRepository<Flight, Integer> {
    List<Flight> findByUserId(Integer userId);
}
