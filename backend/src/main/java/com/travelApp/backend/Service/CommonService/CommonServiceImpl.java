package com.travelApp.backend.Service.CommonService;

import com.travelApp.backend.Entity.FlightClass.Flight;
import com.travelApp.backend.Entity.HotelClass.Hotel;
import com.travelApp.backend.Entity.UsersClass.Users;
import com.travelApp.backend.Repo.FlightRepo.FlightRepo;
import com.travelApp.backend.Repo.HotelRepo.HotelRepo;
import com.travelApp.backend.Repo.UsersRepo.UsersRepo;
import com.travelApp.backend.Service.JwtService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class CommonServiceImpl implements CommonService{

    private final JwtService jwtService;
    private final HotelRepo hotelRepo;
    private final UsersRepo usersRepo;
    private final FlightRepo flightRepo;

    public CommonServiceImpl(JwtService jwtService, HotelRepo hotelRepo, UsersRepo usersRepo, FlightRepo flightRepo) {
        this.jwtService = jwtService;
        this.hotelRepo = hotelRepo;
        this.usersRepo = usersRepo;
        this.flightRepo = flightRepo;
    }

    //logger implementation
    private static final Logger logger = LoggerFactory.getLogger(CommonServiceImpl.class);

    @Override
    public ResponseEntity<?>getData(String token) {
        //get user
        try{
            Integer userId = jwtService.extractUserId(token);
            Optional<Users> optional = usersRepo.findById(userId);
            Users user = optional.get();

            Integer role = user.getRoleId();

            Map<String, Object>response = new HashMap<>();
            //if admin
            if (role != 1) {
                //if particular user
                List<Hotel>hotelData = hotelRepo.findByUserId(user.getId());
                List<Flight>flightData = flightRepo.findByUserId(user.getId());
                response.put("HotelData", hotelData);
                response.put("FlightData", flightData);

            } else {
                List<Hotel>hotelData = hotelRepo.findAll();
                List<Flight>flightData = flightRepo.findAll();
                response.put("HotelData", hotelData);
                response.put("FlightData", flightData);
            }
            //logger
            logger.info("data fetched from commonData!");
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            throw new RuntimeException("error in fetching commonData",e);
        }
    }
}
