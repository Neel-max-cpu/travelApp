package com.travelApp.backend.Expections;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {
    //build error helper
    private ResponseEntity<?> buildErrorResponse(String message, HttpStatus status) {
        return ResponseEntity.status(status).body(
                Map.of(
                        "timestamp", LocalDateTime.now(),
                        "status", status.value(),
                        "error", status.getReasonPhrase(),
                        "message", message
                )
        );
    }

    // NOT FOUND
    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<?>handleUserNotFound(NotFoundException ex){
        return buildErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    // FORBIDDEN/UNAUTHORIZED
    @ExceptionHandler(ForbiddenException.class)
    public ResponseEntity<?>handleForbiddenException(ForbiddenException ex){
        return buildErrorResponse(ex.getMessage(), HttpStatus.FORBIDDEN);
    }

    // BAD REQUESTS
    @ExceptionHandler(BadRequestsException.class)
    public ResponseEntity<?>handleUserAlreadyExists(BadRequestsException ex){
        return buildErrorResponse(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }
}
