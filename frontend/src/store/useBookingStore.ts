import { create } from "zustand";
import { persist } from "zustand/middleware";


type HotelBooking = {
  type: "hotel";
  name?: string;
  cityCode?: string;
  checkInDate?: string;
  checkOutDate?: string;
  price?: number;
  currency?: string;
};

type FlightBooking = {
  type: "flight";
  fromCity?: string;
  toCity?: string;
  departureDate?: string;
  arrivalDate?: string;
  price?: number;
  currency?: string;
  carrier?: string;
  carrierCode?:string;
  duration?:string;
  deptTerminal?:string;
  arrivalTerminal?:string;
};



type BookingData = HotelBooking | FlightBooking;

type BookingStore = {
  bookingData: BookingData | null;
  setBookingData: (data: BookingData) => void;
  clearBookingData: () => void;
};

export const useBookingStore = create<BookingStore>()(
  persist(
    (set) => ({
      bookingData: null,
      setBookingData: (data) => set({ bookingData: data }),
      clearBookingData: () => set({ bookingData: null }),
    }),
    {
      name: "booking-store", // localStorage key
    }
  )
);
