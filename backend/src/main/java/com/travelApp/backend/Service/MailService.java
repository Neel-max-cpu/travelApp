package com.travelApp.backend.Service;

public interface MailService {
    boolean sendRegisterMail(String email, String body, Integer val);
}
