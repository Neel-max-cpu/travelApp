package com.travelApp.backend.Service.UsersServices;

public interface MailService {
    boolean sendRegisterMail(String email, String body, Integer val);
}
