package com.travelApp.backend.Service.UsersServices;

public interface MailService {
    boolean sendRegisterMail(String email, String body, Integer val);
    boolean sendFlightConfirmationMail(String email, String body);
    boolean sendHotelConfirmationMail(String email, String body);
}
