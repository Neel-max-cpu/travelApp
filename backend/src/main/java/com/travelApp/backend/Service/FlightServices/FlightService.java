package com.travelApp.backend.Service.FlightServices;

import com.travelApp.backend.Dto.FlightBooking;
import com.travelApp.backend.Entity.FlightClass.Flight;
import org.springframework.http.ResponseEntity;

import java.util.Map;

public interface FlightService {
    Map<String, Flight> saveBooking(String token, FlightBooking request);
}
