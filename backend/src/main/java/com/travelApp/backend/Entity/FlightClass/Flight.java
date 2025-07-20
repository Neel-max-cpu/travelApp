package com.travelApp.backend.Entity.FlightClass;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Data
@Table(name = "flight")
public class Flight {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private  Integer id;

    @Column(name = "user_id")
    private  Integer userId;

    @Column(name = "user_email")
    private  String userEmail;

    @Column(name = "origin")
    private  String origin;

    @Column(name = "destination")
    private  String destination;

    @Column(name = "departure_date")
    private LocalDate departureDate;

    @Column(name = "departure_time")
    private LocalTime departureTime;

    @Column(name = "arrival_date")
    private LocalDate  arrivalDate;

    @Column(name = "flight_number")
    private  String flightNumber;

    @Column(name = "airline_id")
    private  Integer airlineId;

    @Column(name = "travel_class_id")
    private  Integer travelClassId;

    @Column(name = "number_of_passengers")
    private  Integer numberOfPassengers;

    @Column(name = "total_price")
    private  Double totalPrice;

    @Column(name = "currency")
    private  String currency;

    @Column(name = "send_mail_confirmation")
    private  Character sendMailConfirmation;

    @Column(name = "created_on")
    private LocalDateTime createdOn;
}
