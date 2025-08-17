package com.travelApp.backend.Service.CommonService;

import com.travelApp.backend.Dto.NewsLetterReq;
import org.springframework.http.ResponseEntity;

public interface CommonService {
    ResponseEntity<?> getData(String token);
    ResponseEntity<?> getTotalData(String token);
    ResponseEntity<?> getChartData(String token);
    ResponseEntity<?> setNewsLetter(NewsLetterReq request);
}
