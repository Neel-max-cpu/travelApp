package com.travelApp.backend.Helper;

import java.util.Random;

public class CreateOtp {
    public static String generateOtp() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000); // generates a number between 100000 and 999999
        return String.valueOf(otp);
    }
}
