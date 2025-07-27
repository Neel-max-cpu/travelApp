// hooks/useAmadeusToken.ts
import { useEffect, useState } from "react";
import moment from "moment";
import { fetchSearchAccessToken } from "@/utils/apiPaths";


const useAmadeusToken = () => {
  const [amadeusAccessToken, setAmadeusAccessToken] = useState('');

  useEffect(() => {
    const accessTime = localStorage.getItem("TokenstartedIn");
    const token = localStorage.getItem("accesstokenAuthorization");

    const isTokenExpired = (storedTime: string) => {
      const now = moment();
      const past = moment(storedTime);
      return now.diff(past, "seconds") > 1799;
    };

    const checkAndSetToken = async () => {
      if (!accessTime || isTokenExpired(accessTime)) {
        await fetchSearchAccessToken();
      }
      const validToken = localStorage.getItem("accesstokenAuthorization");
      if (validToken) setAmadeusAccessToken(validToken);
    };

    checkAndSetToken();
  }, []);

  return amadeusAccessToken;
};

export default useAmadeusToken;
