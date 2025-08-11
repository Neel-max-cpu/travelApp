package com.travelApp.backend.Entity.HotelClass;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "hotels")
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private  Integer id;

    @Column(name = "user_id")
    private  Integer userId;

    @Column(name = "user_email")
    private  String userEmail;

    @Column(name = "image1")
    private  String image1;

    @Column(name = "image2")
    private  String image2;

    @Column(name = "image3")
    private  String image3;

    @Column(name = "check_in_date")
    private  String checkInDate;

    @Column(name = "check_out_date")
    private  String checkOutDate;

    @Column(name = "guest_number")
    private  String guestNumber;

    @Column(name = "hotel_name")
    private  String hotelName;

    @Column(name = "cityCode")
    private  String cityCode;

    @Column(name = "price")
    private  Double price;

    @Column(name = "send_mail_confirmation")
    private Character sendMailConfirmation;

    @Column(name = "created_on")
    private LocalDateTime createdOn;

}
