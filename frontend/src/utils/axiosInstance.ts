import axios from "axios";
import { API_PATHS, BASE_URL } from "./apiPaths";


const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

//Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accesToken = localStorage.getItem("token");
    // if authorization is not there(then api based)
    if (accesToken && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${accesToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // common error - handle globally
    if (error.response) {
      if (error.response.status === 401) {
        // unauthorized redirect to main page
        window.location.href = "";
      } else if (error.response.status === 500) {
        console.log("Server error! Please try again!");
      } else if (error.code === "ECONNABORTED") {
        console.log("Request timmed out please try again.");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
