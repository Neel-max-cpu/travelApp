package com.travelApp.backend.Controllers;

import com.travelApp.backend.Dto.UsersReq;
import com.travelApp.backend.Entity.UsersClass.Users;
import com.travelApp.backend.Expections.BadRequestsException;
import com.travelApp.backend.Service.UsersServices.AuthService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class Auth {

    private final AuthService authService;


    //logger implementation
    private static final Logger logger = LoggerFactory.getLogger(Auth.class);

    public Auth(AuthService authService) {
        this.authService = authService;
    }

    @GetMapping("/health")
    public ResponseEntity<?> health() {
        //logger
        logger.info("Health check started");
        try{
            Map<String, String> response = new HashMap<>();
            response.put("status", "OK");
            //logger
            logger.info("Health check finished");

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            //logger
            logger.error("Health check failed");

            throw new BadRequestsException("Error health check");
        }
    }

    @PostMapping("/sendOtp")
    public ResponseEntity<?>sendOtp(@RequestBody UsersReq req){
        //logger
        logger.info("OTP sending started");
        try{

            Boolean flag = authService.sendOtp(req);
            if(flag){
                Map<String, String> response = new HashMap<>();
                response.put("status", "otp sent successfully valid for 10mins");

                //logger
                logger.info("OTP sent successfully valid for 10mins");

                return ResponseEntity.ok(response);
            }
            Map<String, String> response = new HashMap<>();
            response.put("status", "OTP sending failed");

            //logger
            logger.error("OTP sending failed");

            return ResponseEntity.badRequest().body(response);
        } catch (Exception e) {
            //logger
            logger.error("OTP failed from backend");
            throw new BadRequestsException("Error while sending the otp");
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UsersReq req){
        //logger
        logger.info("Registration started");
        try{
            Users users = authService.registerUser(req);

            //logger
            logger.info("Registration finished");

            return ResponseEntity.ok(users);
        } catch (Exception e) {
            //logger
            logger.error("Registration failed");

            throw new BadRequestsException("Error registering user");
        }
    }

    @PostMapping("/login")
    public  ResponseEntity<?> login(@RequestBody UsersReq req){
        logger.info("Login started");
        try {
            return ResponseEntity.ok(authService.signIn(req));
        } catch (Exception e) {
            //logger
            logger.error("Login failed");
            throw new BadRequestsException("Error login");
        }
    }


    @PostMapping("/sendOtpForgotPassword")
    public ResponseEntity<?>sendOtpForgotPassword(@RequestBody UsersReq req){
        //logger
        logger.info("OTP sending started forgot password");
        try{

            Boolean flag = authService.sendOtpForgotPassword(req);
            if(flag){
                Map<String, String> response = new HashMap<>();
                response.put("status", "otp sent successfully valid for 10mins");

                //logger
                logger.info("OTP sent successfully valid for 10mins for forgot password");

                return ResponseEntity.ok(response);
            }
            Map<String, String> response = new HashMap<>();
            response.put("status", "OTP sending failed");

            //logger
            logger.error("OTP sending failed forgot password");

            return ResponseEntity.badRequest().body(response);
        } catch (Exception e) {
            //logger
            logger.error("OTP failed from backend");
            throw new BadRequestsException("Error while sending the otp");
        }
    }

    @PostMapping("/forgetPass")
    public ResponseEntity<?> forgetPass(@RequestBody UsersReq req){
        logger.info("ForgetPass started");
        try{
            return ResponseEntity.ok(authService.forgetPass(req));
        } catch (Exception e) {
            throw new BadRequestsException("Error forgetPass");
        }
    }


    @PostMapping("/resetPass")
    public ResponseEntity<?> resetPass(@RequestHeader("Authorization") String authHeader, @RequestBody UsersReq req){
        logger.info("ResetPassword started");
        try{
            String token = authHeader.replace("Bearer ", "");
            return ResponseEntity.ok(authService.resetPass(req, token));
        } catch (Exception e) {
            throw new BadRequestsException("Error forgetPass");
        }
    }

    @PostMapping("/disableOtp")
    public ResponseEntity<?> disableOtp(@RequestBody UsersReq req){
        logger.info("DisableOtp started");
        try{
            return ResponseEntity.ok(authService.disableOtp(req));
        } catch (Exception e) {
            throw new BadRequestsException("Error disableOtp");
        }
    }

}
