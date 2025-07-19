package com.travelApp.backend.Expections;

public class BadRequestsException extends RuntimeException {
    public BadRequestsException(String message){
        super(message);
    }
}
