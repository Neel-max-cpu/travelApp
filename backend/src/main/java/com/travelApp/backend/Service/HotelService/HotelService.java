package com.travelApp.backend.Service.HotelService;

import com.travelApp.backend.Dto.HotelBooking;
import com.travelApp.backend.Entity.HotelClass.Hotel;

import java.util.Map;

public interface HotelService {
    Map<String, Hotel> saveBooking(String token, HotelBooking request);
}
