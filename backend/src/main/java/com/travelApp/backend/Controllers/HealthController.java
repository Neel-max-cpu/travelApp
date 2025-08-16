package com.travelApp.backend.Controllers;

import com.travelApp.backend.Service.FlightServices.FlightServiceImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {
    //logger implementation
    private static final Logger logger = LoggerFactory.getLogger(HealthController.class);
    @GetMapping("/health")
    public ResponseEntity<String> health() {
        logger.info("health in health controller");
        return ResponseEntity.ok("Backend is up ✅");
    }
}
