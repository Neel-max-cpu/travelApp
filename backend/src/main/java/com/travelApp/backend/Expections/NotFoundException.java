package com.travelApp.backend.Expections;

public class NotFoundException extends RuntimeException {
    public NotFoundException(String message){
        super(message);
    }
}
