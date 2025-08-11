package com.travelApp.backend.Dto;

import lombok.Data;

@Data
public class HotelBooking {
    private String image1;
    private String image2;
    private String image3;
    private String checkInDate;
    private String checkOutDate;
    private String guestNumber;
    private String hotelName;
    private String cityCode;
    private Double price;
}
