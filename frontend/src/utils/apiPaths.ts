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
    AUTHORIZATIONFORDEV:"/api/auth/amadeus/token"
  },
  COMMON: {
    CITYWITHNAME: "https://test.api.amadeus.com/v1/reference-data/locations",   
    BOOKEDDATA:"/api/common/commonData",
    CHARTDATA:"/api/common/chartData",  
    NEWSLETTER:"/api/common/newsLetter",
  },
  FLIGHT: {
    FLIGHTSEARCH: "https://test.api.amadeus.com/v2/shopping/flight-offers",
    IATACODETOCITY: (iataCode: string) =>
      `https://aerokey-api.vercel.app/v1/airports/code/${iataCode}`,
    FLIGHTBOOKING:"/api/flight/saveBooking",
  },
  HOTELS: {
    GETHOTELSINCITY: (params: {
      cityCode?: string;
      radius?: string;
      amenities?: string[];
      ratings?: string[];
    }) => {
      const queryParams = new URLSearchParams();

      if (params.cityCode) queryParams.append("cityCode", params.cityCode);
      if (params.radius) queryParams.append("radius", params.radius);
      if (params.amenities?.length)
        queryParams.append("amenities", params.amenities.join(","));
      if (params.ratings?.length)
        queryParams.append("ratings", params.ratings.join(","));

      return `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?${queryParams.toString()}`;
    },
    GETHOTELOFFERS:(params: {
      hotelIds: string[];
      adults: number;
      checkInDate: string;
      checkOutDate?: string | null;
    }) => {
      const queryParams = new URLSearchParams();

      if (params.hotelIds) queryParams.append("hotelIds", params.hotelIds.join(","));
      if (params.adults) queryParams.append("adults", params.adults.toString());
      if (params.checkInDate)
        queryParams.append("checkInDate", params.checkInDate);
      if (params.checkOutDate)
        queryParams.append("ratings", params.checkOutDate);

      return `https://test.api.amadeus.com/v3/shopping/hotel-offers?${queryParams.toString()}`;
    },
    GETHOTELIMAGE:(params:{
      query:string;
      per_page:number;
      client_id:string;
    })=>{
      const queryParams = new URLSearchParams();
      if(params.client_id) queryParams.append("client_id", params.client_id);
      if(params.query) queryParams.append("query", params.query);
      if(params.per_page) queryParams.append("per_page", params.per_page.toString());

      return `https://api.unsplash.com/search/photos?${queryParams.toString()}`;
    },
    HOTELBOOKING:"/api/hotel/saveBooking",
  },
};

export const fetchSearchAccessToken = async () => {
  try {
    const response = await axiosInstance.post(API_PATHS.AUTH.AUTHORIZATIONFORDEV);
    localStorage.setItem(
      "accesstokenAuthorization",
      response.data.access_token
    );
    localStorage.setItem("TokenstartedIn", moment().toISOString());
  } catch (error:any) {
    toast.error("Error getting the access token!");
    console.log("error in searching: ", error);
  }

}

/*
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
*/