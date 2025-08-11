package com.travelApp.backend.Service.FlightServices;

import com.travelApp.backend.Dto.FlightBooking;
import com.travelApp.backend.Entity.FlightClass.Flight;
import com.travelApp.backend.Entity.UsersClass.Users;
import com.travelApp.backend.Helper.CreateOtp;
import com.travelApp.backend.Repo.FlightRepo.FlightRepo;
import com.travelApp.backend.Repo.UsersRepo.UsersRepo;
import com.travelApp.backend.Service.JwtService;
import com.travelApp.backend.Service.UsersServices.AuthServiceImpl;
import com.travelApp.backend.Service.UsersServices.MailService;
import org.apache.catalina.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class FlightServiceImpl implements FlightService{

    private final FlightRepo flightRepo;
    private final UsersRepo  usersRepo;
    private final JwtService jwtService;
    private final MailService mailService;


    public FlightServiceImpl(FlightRepo flightRepo, UsersRepo usersRepo, JwtService jwtService,
                             MailService mailService) {
        this.flightRepo = flightRepo;
        this.usersRepo = usersRepo;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }

    //logger implementation
    private static final Logger logger = LoggerFactory.getLogger(FlightServiceImpl.class);


    boolean sendEmail(String email, FlightBooking booking) {
        //logger
        logger.info("email sent from the flight service");
        String body = "Hello,\n\n" +
                "Your flight booking is confirmed!\n\n" +
                "🛫 From: " + booking.getOrigin() + " (" + booking.getDeptTerminal() + " Terminal)\n" +
                "🛬 To: " + booking.getDestination() + " (" + booking.getArrivalTerminal() + " Terminal)\n" +
                "📅 Departure: " + booking.getDepartureDate() + " at " + booking.getDepartureTime() + "\n" +
                "📅 Arrival: " + booking.getArrivalDate() + " at " + booking.getArrivalTime() + "\n\n" +
                "✈️ Airline: " + booking.getAricraftCompany() + " - " + booking.getAircraftName() + "\n" +
                "🪪 Carrier Code: " + booking.getCarrierCodeForImage() + "\n" +
                "⏱ Duration: " + booking.getFlightDuration() + "\n" +
                "🎟 Class: " + booking.getTravellerClass() + " Class" + "\n" +
                "👥 Passengers: " + booking.getNumberOfPassangers() +" Passengers" + "\n" +
                "💰 Total Price: Rs " + booking.getTotalPrice() + "\n\n" +
                "We wish you a pleasant journey!\n\n" +
                "- TravelApp Team";

        return mailService.sendFlightConfirmationMail(email, body);
    }

    @Override
    public Map<String, Flight> saveBooking(String token, FlightBooking request){
        //logger
        logger.info("saveBooking starting in FlightServiceImpl");
        try {
            //get user
            Integer userId = jwtService.extractUserId(token);
            Optional<Users>optional =  usersRepo.findById(userId);
            Users user = optional.get();

            Flight flight = new Flight();
            //fill from request
            flight.setOrigin(request.getOrigin());
            flight.setDestination(request.getDestination());
            flight.setDepartureDate(request.getDepartureDate());
            flight.setDepartureTime(request.getDepartureTime());
            flight.setArrivalDate(request.getArrivalDate());
            flight.setArrivalTime(request.getArrivalTime());
            flight.setTotalPrice(request.getTotalPrice());
            flight.setAricraftCompany(request.getAricraftCompany());
            flight.setAircraftName(request.getAircraftName());
            flight.setCarrierCodeForImage(request.getCarrierCodeForImage());
            flight.setFlightDuration(request.getFlightDuration());
            flight.setDeptTerminal(request.getDeptTerminal());
            flight.setArrivalTerminal(request.getArrivalTerminal());
            flight.setTravellerClass(request.getTravellerClass());
            flight.setNumberOfPassangers(request.getNumberOfPassangers());

            //auto fill
            flight.setUserId(user.getId());
            flight.setUserEmail(user.getEmail());
            if(sendEmail(user.getEmail(), request)){
                flight.setSendMailConfirmation('Y');
            }
            flight.setCreatedOn(LocalDateTime.now());

            flightRepo.save(flight);
            //logger
            logger.info("saveBooking end in FlightServiceImpl");
            Map<String, Flight> response = new HashMap<>();
            response.put("done", flight);
            return response;
        } catch (Exception e) {
            //logger
            logger.error("Error in saving :{}",e.getMessage());
            throw new RuntimeException("Exception in saveBooking", e);
        }

    }
}
