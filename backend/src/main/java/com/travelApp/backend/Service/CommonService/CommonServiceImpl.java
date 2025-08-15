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

import java.text.DateFormatSymbols;
import java.time.LocalDate;
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

    @Override
    public ResponseEntity<?> getChartData(String token) {
        //get user
        try{
            Integer userId = jwtService.extractUserId(token);
            Optional<Users> optional = usersRepo.findById(userId);
            Users user = optional.get();

            Integer role = user.getRoleId();

            int currentYear = LocalDate.now().getYear();
            logger.info("currentYear: {}", currentYear);
            Map<Integer, Map<String, Integer>> monthlyCounts = new LinkedHashMap<>();
            for (int month = 1; month <= 12; month++) {
                Map<String, Integer> counts = new HashMap<>();
                counts.put("flights", 0);
                counts.put("hotels", 0);
                monthlyCounts.put(month, counts);
            }

            //data
            List<Hotel> hotelData;
            List<Flight> flightData;
            if (role != 1) {
                hotelData = hotelRepo.findByUserId(user.getId());
                flightData = flightRepo.findByUserId(user.getId());
            } else {
                hotelData = hotelRepo.findAll();
                flightData = flightRepo.findAll();
            }

            // Count hotels by month
            for (Hotel hotel : hotelData) {
                if (hotel.getCreatedOn() != null) {
                    LocalDate date = hotel.getCreatedOn().toLocalDate();
                    if (date.getYear() == currentYear) {
                        int month = date.getMonthValue();
                        monthlyCounts.get(month).put("hotels", monthlyCounts.get(month).get("hotels") + 1);
                    }
                }
            }
            // Count flights by month
            for (Flight flight : flightData) {
                if (flight.getCreatedOn() != null) {
                    LocalDate date = flight.getCreatedOn().toLocalDate();
                    if (date.getYear() == currentYear) {
                        int month = date.getMonthValue();
                        monthlyCounts.get(month).put("flights", monthlyCounts.get(month).get("flights") + 1);
                    }
                }
            }

            // chartData for frontend
            List<Map<String, Object>> chartData = new ArrayList<>();
            DateFormatSymbols dfs = new DateFormatSymbols();
            for (int month = 1; month <= 12; month++) {
                Map<String, Object> monthEntry = new HashMap<>();
                monthEntry.put("month", dfs.getMonths()[month - 1]); // "January", "February"...
                monthEntry.put("flights", monthlyCounts.get(month).get("flights"));
                monthEntry.put("hotels", monthlyCounts.get(month).get("hotels"));
                chartData.add(monthEntry);
            }

            Map<String, Object> response = new HashMap<>();
            response.put("year", currentYear);
            response.put("chartData", chartData);

            //logger
            logger.info("data fetched from chartData!");
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            throw new RuntimeException("error in fetching chartData",e);
        }
    }
}
