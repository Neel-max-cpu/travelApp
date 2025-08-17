package com.travelApp.backend.Controllers;

import com.travelApp.backend.Dto.NewsLetterReq;
import com.travelApp.backend.Service.CommonService.CommonService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/common")
public class CommonController {

    private final CommonService commonService;

    public CommonController(CommonService commonService) {
        this.commonService = commonService;
    }

    //logger implementation
    private static final Logger logger = LoggerFactory.getLogger(CommonController.class);

    @GetMapping("/commonData")
    ResponseEntity<?> commonData(@RequestHeader("Authorization") String authHeader) {
        logger.info("commonData in controller");
        String token = authHeader.replace("Bearer ", "");
        return commonService.getData(token);
    }

    @GetMapping("/totalData")
    ResponseEntity<?> totalData(@RequestHeader("Authorization") String authHeader) {
        logger.info("totalData in controller");
        String token = authHeader.replace("Bearer ", "");
        return commonService.getTotalData(token);
    }

    @GetMapping("/chartData")
    ResponseEntity<?> chartData(@RequestHeader("Authorization") String authHeader) {
        logger.info("chartData in controller");
        String token = authHeader.replace("Bearer ", "");
        return commonService.getChartData(token);
    }

    @PostMapping("/newsLetter")
    ResponseEntity<?> newsLetter(@RequestBody NewsLetterReq request) {
        logger.info("newsLetter in controller");
        return commonService.setNewsLetter(request);
    }
}
