import { create } from "zustand";
import { persist } from "zustand/middleware";

type BookingData = {
  type: "hotel" | "flight";
  name: string;
  cityCode: string;
  checkInDate: string;
  checkOutDate: string;
  price: number;
  currency: string;  
};

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
