package com.travelApp.backend.Service.CommonService;

import com.travelApp.backend.Dto.HotelBooking;
import com.travelApp.backend.Dto.NewsLetterReq;
import com.travelApp.backend.Entity.FlightClass.Flight;
import com.travelApp.backend.Entity.HotelClass.Hotel;
import com.travelApp.backend.Entity.UsersClass.NewsLetter;
import com.travelApp.backend.Entity.UsersClass.Users;
import com.travelApp.backend.Repo.FlightRepo.FlightRepo;
import com.travelApp.backend.Repo.HotelRepo.HotelRepo;
import com.travelApp.backend.Repo.UsersRepo.NewsLetterRepo;
import com.travelApp.backend.Repo.UsersRepo.UsersRepo;
import com.travelApp.backend.Service.JwtService;
import com.travelApp.backend.Service.UsersServices.MailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.text.DateFormatSymbols;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Service
public class CommonServiceImpl implements CommonService{

    private final JwtService jwtService;
    private final HotelRepo hotelRepo;
    private final UsersRepo usersRepo;
    private final FlightRepo flightRepo;
    private final NewsLetterRepo newsLetterRepo;
    private final MailService mailService;

    public CommonServiceImpl(
            JwtService jwtService, HotelRepo hotelRepo, UsersRepo usersRepo,
            FlightRepo flightRepo, NewsLetterRepo newsLetterRepo, MailService mailService) {
        this.jwtService = jwtService;
        this.hotelRepo = hotelRepo;
        this.usersRepo = usersRepo;
        this.flightRepo = flightRepo;
        this.newsLetterRepo = newsLetterRepo;
        this.mailService = mailService;
    }

    //logger implementation
    private static final Logger logger = LoggerFactory.getLogger(CommonServiceImpl.class);

    boolean sendNewsletterConfirmation(String email) {
        logger.info("Newsletter subscription confirmation sent from the common service");

        String body = "Hello,\n\n" +
                "Thank you for subscribing to TravelApp's newsletter! ✨\n\n" +
                "You're now part of a community that loves exploring the world, discovering hidden gems, and unlocking exclusive travel deals.\n\n" +
                "Here's what to expect:\n" +
                "🧳 Curated travel inspiration\n" +
                "🏨 Handpicked hotel recommendations\n" +
                "✈️ Flight deals and booking tips\n" +
                "🌍 Destination spotlights\n\n" +
                "We’ll drop the best of travel straight into your inbox—no spam, just wanderlust.\n\n" +
                "Welcome aboard!\n\n" +
                "- TravelApp Team";
        return mailService.sendNewsLetterConfirmationMail(email, body);
    }



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
                List<Hotel>hotelData = hotelRepo.findByUserIdOrderByIdDesc(user.getId());
                List<Flight>flightData = flightRepo.findByUserIdOrderByIdDesc(user.getId());

                response.put("HotelData", hotelData);
                response.put("FlightData", flightData);

            } else {
                List<Hotel>hotelData = hotelRepo.findAllByOrderByIdDesc();
                List<Flight>flightData = flightRepo.findAllByOrderByIdDesc();
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
    public ResponseEntity<?>getTotalData(String token) {
        //get user
        try{
            Integer userId = jwtService.extractUserId(token);
            Optional<Users> optional = usersRepo.findById(userId);
            Users user = optional.get();

            Integer role = user.getRoleId();

            Map<String, Object>response = new HashMap<>();
            if (role != 1) {
                // for normal user → count only their bookings
                long hotelCount = hotelRepo.countByUserId(user.getId());
                long flightCount = flightRepo.countByUserId(user.getId());

                response.put("HotelCount", hotelCount);
                response.put("FlightCount", flightCount);

            } else {
                // for admin → count all
                long hotelCount = hotelRepo.count();
                long flightCount = flightRepo.count();

                response.put("HotelCount", hotelCount);
                response.put("FlightCount", flightCount);
            }
            //logger
            logger.info("getdata fetched from commonData!");
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

    @Override
    public ResponseEntity <?>setNewsLetter(NewsLetterReq request){
        logger.info("setNewsLetter in service");
        try{
            Map<String, String> response = new HashMap<>();
            NewsLetter newsLetter = new NewsLetter();
            if(newsLetterRepo.findByEmail(request.getEmail()).isPresent()){
                //logger
                logger.info("email already in use");
                response.put("message", "Already subscribed to our newsletter!");
            }
            else{
                if (sendNewsletterConfirmation(request.getEmail())) {
                    newsLetter.setEmail(request.getEmail());
                    newsLetter.setCreatedOn(LocalDateTime.now());
                    newsLetterRepo.save(newsLetter);
                    response.put("message", "News letter sent successfully in the email!");
                }
            }
            return  ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            throw new RuntimeException("error in setNewsLetter",e);
        }
    }
}
