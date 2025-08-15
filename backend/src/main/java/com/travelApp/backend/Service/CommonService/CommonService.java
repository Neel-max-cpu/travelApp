package com.travelApp.backend.Service.CommonService;

import org.springframework.http.ResponseEntity;

public interface CommonService {
    ResponseEntity<?> getData(String token);
    ResponseEntity<?> getChartData(String token);
}
