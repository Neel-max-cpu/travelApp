package com.travelApp.backend.Controllers;

import com.travelApp.backend.Dto.FlightBooking;
import com.travelApp.backend.Entity.FlightClass.Flight;
import com.travelApp.backend.Expections.BadRequestsException;
import com.travelApp.backend.Service.FlightServices.FlightService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/flight")
public class FlightController {

    private final FlightService flightService;

    //logger implementation
    private static final Logger logger = LoggerFactory.getLogger(FlightController.class);

    public FlightController(FlightService flightService) {
        this.flightService = flightService;
    }

    /*
      {
    "type": "flight",
    "fromCity": "Delhi, Indira Gandhi Intl (DEL)",
    "toCity": "New York, John F Kennedy Intl (JFK)",
    "departureDate": "Sunday, August 31st 2025",
    "departureTime": "02:45",
    "arrivalDate": "Sunday, Aug 31st 2025",
    "arrivalTime": "14:00",
    "price": 38683,
    "currency": "INR",
    "carrier": "KUWAIT AIRWAYS",
    "carrierCode": "KU",
    "duration": "20h 45m",
    "deptTerminal": "3",
    "arrivalTerminal": "4",
    "aircraftCompany": "KUWAIT AIRWAYS",
    "aircraftName": "AIRBUS A330-800NEO",
    "travellerClass": "Economy",
    "numberofTravellers": "1"
}
    */

    @PostMapping("/saveBooking")
    ResponseEntity<?> saveBooking(@RequestHeader("Authorization") String authHeader,
                                  @RequestBody FlightBooking request){
        logger.info("saveBooking flight started started");
        try {
            String token = authHeader.replace("Bearer ", "");
            Map<String, Flight> result = flightService.saveBooking(token, request);
            return ResponseEntity.ok(result);
        }catch (Exception e) {
            throw new BadRequestsException("Error saveBooking");
        }

    }

}
