import toast, { Toaster } from "react-hot-toast";
import axiosInstance from "./axiosInstance";
import moment from "moment";

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const API_PATHS = {
  AUTH: {
    OTPREGISTER: "/api/auth/sendOtp",
    REGISTER: "/api/auth/register",
    LOGIN: "/api/auth/login",
    OTPFORGETPASS: "/api/auth/sendOtpForgotPassword",
    FORGOT_PASS: "/api/auth/forgetPass",
    RESETPASS: "/api/auth/resetPass",
    DISABLEOTP: "/api/auth/disableOtp",        
    AUTHORIZATION: "https://test.api.amadeus.com/v1/security/oauth2/token",
  },
  FLIGHT: {
    FLIGHTSEARCH: "https://test.api.amadeus.com/v2/shopping/flight-offers",
    CITYWITHNAME: "https://test.api.amadeus.com/v1/reference-data/locations",
  },
};

export const fetchSearchAccessToken = async () => {
  const data = new URLSearchParams();
  const client_id: string = process.env.NEXT_PUBLIC_CLIENT_ID!;
  const client_secret: string = process.env.NEXT_PUBLIC_CLIENT_SECRET!;

  data.append("grant_type", "client_credentials");
  data.append("client_id", client_id);
  data.append("client_secret", client_secret);
  try {
    const response = await axiosInstance.post(
      API_PATHS.AUTH.AUTHORIZATION,
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    localStorage.setItem(
      "accesstokenAuthorization",
      response.data.access_token
    );
    localStorage.setItem("TokenstartedIn", moment().toISOString());
  } catch (error) {
    toast.error("error in getting the accsss token!");
    console.log("error in searching: ", error);
  }
};
