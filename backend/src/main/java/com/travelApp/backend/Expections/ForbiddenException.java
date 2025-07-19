package com.travelApp.backend.Expections;

public class ForbiddenException extends RuntimeException {
    public ForbiddenException(String message){
        super(message);
    }
}
