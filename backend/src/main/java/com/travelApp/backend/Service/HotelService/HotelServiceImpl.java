package com.travelApp.backend.Service.HotelService;

import com.travelApp.backend.Dto.FlightBooking;
import com.travelApp.backend.Dto.HotelBooking;
import com.travelApp.backend.Entity.HotelClass.Hotel;
import com.travelApp.backend.Entity.UsersClass.Users;
import com.travelApp.backend.Repo.HotelRepo.HotelRepo;
import com.travelApp.backend.Repo.UsersRepo.UsersRepo;
import com.travelApp.backend.Service.JwtService;
import com.travelApp.backend.Service.UsersServices.MailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class HotelServiceImpl implements HotelService {

    private final HotelRepo hotelRepo;
    private final UsersRepo usersRepo;
    private final JwtService jwtService;
    private final MailService mailService;

    public HotelServiceImpl(HotelRepo hotelRepo, UsersRepo usersRepo, JwtService jwtService,
                             MailService mailService) {
        this.hotelRepo = hotelRepo;
        this.usersRepo = usersRepo;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }

    //logger implementation
    private static final Logger logger = LoggerFactory.getLogger(HotelServiceImpl.class);

    boolean sendEmail(String email, HotelBooking booking) {
        //logger
        logger.info("email sent from the hotel service");
        String body = "Hello,\n\n" +
                "Your hotel booking is confirmed!\n\n" +
                "🏨 Hotel: " + booking.getHotelName() + "\n" +
                "📍 Location: " + booking.getCityCode() + "\n" +
                "📅 Check-in: " + booking.getCheckInDate() + "\n" +
                "📅 Check-out: " + booking.getCheckOutDate() + "\n" +
                "👥 Guests: " + booking.getGuestNumber() + "\n" +
                "🖼 Hotel Images: \n" +
                "   - " + booking.getImage1() + "\n" +
                "   - " + booking.getImage2() + "\n" +
                "   - " + booking.getImage3() + "\n" +
                "💰 Total Price: Rs " + booking.getPrice() + "\n\n" +
                "We hope you have a relaxing and enjoyable stay!\n\n" +
                "- TravelApp Team";

        return mailService.sendHotelConfirmationMail(email, body);
    }



    @Override
    public Map<String, Hotel> saveBooking(String token, HotelBooking request) {
        //logger
        logger.info("saveBooking starting in hotelBookingImpl");

        try{
            //get user
            Integer userId = jwtService.extractUserId(token);
            Optional<Users> optional = usersRepo.findById(userId);
            Users user = optional.get();

            Hotel hotel = new Hotel();
            //fill from request
            hotel.setImage1(request.getImage1());
            hotel.setImage2(request.getImage2());
            hotel.setImage3(request.getImage3());
            hotel.setCheckInDate(request.getCheckInDate());
            hotel.setCheckOutDate(request.getCheckOutDate());
            hotel.setGuestNumber(request.getGuestNumber());
            hotel.setHotelName(request.getHotelName());
            hotel.setPrice(request.getPrice());

            //auto fill
            hotel.setUserId(user.getId());
            hotel.setUserEmail(user.getEmail());
            if(sendEmail(user.getEmail(), request)){
                hotel.setSendMailConfirmation('Y');
            }
            hotel.setCreatedOn(LocalDateTime.now());

            hotelRepo.save(hotel);
            //logger
            logger.info("saveBooking end in hotelBookingImpl");
            Map<String, Hotel> response = new HashMap<>();
            response.put("done", hotel);
            return response;
        } catch (RuntimeException e) {
            logger.error("Error in saving :{}",e.getMessage());
            throw new RuntimeException("Exception in saveBooking", e);
        }
    }


}
