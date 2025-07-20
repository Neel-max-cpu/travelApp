package com.travelApp.backend.Entity.FlightClass;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "flight_segments")
public class FlightSegment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private  Integer id;

    @Column(name = "flight_id")
    private  Integer flightId;

    @Column(name = "segment_number")
    private  Integer segmentNumber;

    @Column(name = "departure_airport")
    private  String departureAirport;

    @Column(name = "arrival_airport")
    private  String arrivalAirport;

    @Column(name = "departure_datetime")
    private LocalDateTime departureDatetime;

    @Column(name = "arrival_datetime")
    private LocalDateTime arrivalDatetime;

    @Column(name = "carrier_code")
    private  String carrierCode;

    @Column(name = "flight_number")
    private  String flightNumber;

    @Column(name = "aircraft_code")
    private  String aircraftCode;

    @Column(name = "duration")
    private String duration;
}
