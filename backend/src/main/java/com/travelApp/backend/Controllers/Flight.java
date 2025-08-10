package com.travelApp.backend.Controllers;

import com.travelApp.backend.Dto.FlightBooking;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/flight")
public class Flight {
    //logger implementation
    private static final Logger logger = LoggerFactory.getLogger(Flight.class);

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
    "travellerClass": "Economy"
}


     */

    @PostMapping("/saveBooking")
    ResponseEntity<?> saveBooking(@RequestBody FlightBooking request){

    }

}
