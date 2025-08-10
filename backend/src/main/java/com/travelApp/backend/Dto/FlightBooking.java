package com.travelApp.backend.Dto;

import jakarta.persistence.Column;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class FlightBooking {
    private  String origin;
    private  String destination;
    private String departureDate;
    private String departureTime;
    private String arrivalDate;
    private String arrivalTime;
    private  Double totalPrice;
    private  String aricraftCompany;
    private  String aircraftName;
    private  String carrierCodeForImage;
    private  String flightDuration;
    private  String deptTerminal;
    private  String arrivalTerminal;
    private  String travellerClass;
    private Integer numberOfPassangers;
}
