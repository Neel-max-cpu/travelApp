package com.travelApp.backend.Repo.FlightRepo;

import com.travelApp.backend.Entity.FlightClass.Flight;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FlightRepo extends JpaRepository<Flight, Integer> {
    long countByUserId(Integer userId);
    long count();

    List<Flight> findByUserId(Integer userId);
    List<Flight> findByUserIdOrderByIdDesc(Integer userId);
    List<Flight> findAllByOrderByIdDesc();
}
