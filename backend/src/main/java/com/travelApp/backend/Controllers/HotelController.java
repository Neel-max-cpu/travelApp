package com.travelApp.backend.Controllers;

import com.travelApp.backend.Dto.HotelBooking;
import com.travelApp.backend.Entity.HotelClass.Hotel;
import com.travelApp.backend.Expections.BadRequestsException;
import com.travelApp.backend.Service.HotelService.HotelService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/hotel")
public class HotelController {

    private final HotelService hotelService;

    //logger implementation
    private static final Logger logger = LoggerFactory.getLogger(HotelController.class);

    public HotelController(HotelService hotelService) {
        this.hotelService = hotelService;
    }

    @PostMapping("/saveBooking")
    ResponseEntity<?> saveBooking(@RequestHeader("Authorization") String authHeader,
                                  @RequestBody HotelBooking request){
        logger.info("saveBooking hotel started started");
        try {
            String token = authHeader.replace("Bearer ", "");
            Map<String, Hotel> result = hotelService.saveBooking(token, request);
            return ResponseEntity.ok(result);
        }catch (Exception e) {
            throw new BadRequestsException("Error saveBooking");
        }

    }
}
