package com.travelApp.backend.Entity.FlightClass;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "flight_class")
public class FlighClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "flight_class_name")
    private String flightClassName;
}
