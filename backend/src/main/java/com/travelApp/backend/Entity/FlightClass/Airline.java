package com.travelApp.backend.Entity.FlightClass;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "airline")
public class Airline {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "airline_name")
    private String airlineName;

    @Column(name = "airline_code")
    private  String airlineCode;
}
