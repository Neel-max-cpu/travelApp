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
    private String departureDate;

    @Column(name = "departure_time")
    private String departureTime;

    @Column(name = "arrival_date")
    private String arrivalDate;

    @Column(name = "arrival_time")
    private String arrivalTime;

    @Column(name = "total_price")
    private  Double totalPrice;

    @Column(name = "aricraft_company")
    private  String aricraftCompany;

    @Column(name = "aircraft_name")
    private  String aircraftName;

    @Column(name = "carrier_code_for_image")
    private  String carrierCodeForImage;

    @Column(name = "flight_duration")
    private  String flightDuration;

    @Column(name = "dept_terminal")
    private  String deptTerminal;

    @Column(name = "arrival_terminal")
    private  String arrivalTerminal;

    @Column(name = "traveller_class")
    private  String travellerClass;

    @Column(name = "number_of_passangers")
    private Integer numberOfPassangers;

    @Column(name = "send_mail_confirmation")
    private Character sendMailConfirmation;

    @Column(name = "created_on")
    private LocalDateTime createdOn;
}
