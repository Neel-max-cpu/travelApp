export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;


export const API_PATHS = {
    AUTH:{
        OTPREGISTER:"/api/auth/sendOtp",
        REGISTER: "/api/auth/register",
        LOGIN:"/api/auth/login",
        OTPFORGETPASS:"/api/auth/sendOtpForgotPassword",        
        FORGOT_PASS:"/api/auth/forgetPass",    
        RESETPASS:"/api/auth/resetPass",
        DISABLEOTP:"/api/auth/disableOtp",
    },    
    FLIGHT:{
        //post
        FLIGHTAUTHORIZATION:"https://test.api.amadeus.com/v1/security/oauth2/token",
        //post
        FLIGHTSEARCH:"https://test.api.amadeus.com/v2/shopping/flight-offers"
    }
};