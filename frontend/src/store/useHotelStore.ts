import { create } from "zustand";

interface Hotel {
  chainCode: string;
  iataCode: string;
  dupeId: number;
  name: string;
  hotelId: string;
  geoCode: {
    latitude: number;
    longitude: number;
  };
  address: {
    countryCode: string;
    postalCode: string;
    stateCode: string;
    cityName: string;
    lines: [string];
  };
  distance: {
    value: number;
    unit: string;
  };
  lastUpdate: string;
}

interface HotelApiResponse {
  data: Hotel[]; 
}

interface HotelStore {
  hotelResponse: HotelApiResponse | null;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  
  setHotelResponse: (res: HotelApiResponse) => void;

  setCheckInDate: (checkInDate: Date) => void;
  setCheckOutDate: (checkOutDate: Date) => void;
  
  clearHotelResponse: () => void;
}

export const useHotelStore = create<HotelStore>((set) => ({
  hotelResponse: null,
  checkInDate: null,
  checkOutDate: null,

  setHotelResponse: (res) => set({ hotelResponse: res }),

  setCheckInDate: (checkInDate) => set({ checkInDate: checkInDate }),
  setCheckOutDate: (checkOutDate) => set({ checkOutDate: checkOutDate }),
  
  clearHotelResponse: () => set({ hotelResponse: null }),  
}));
