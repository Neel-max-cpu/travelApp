// stores/useFlightStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FlightSearchData {
  fromAirport: any;
  toAirport: any;
  formdate: any;
  defaultClass: any;
  defaultTraveller: any;
}

interface FlightResponse {
  meta: { count: number };
  data: any[];
  dictionaries: any;
}

interface FlightStoreState {
  flightSearchData: FlightSearchData | null;
  flightResponse: FlightResponse[] | null;

  setFlightSearchData: (res: FlightSearchData) => void;
  setFlightResponse: (response: FlightResponse) => void;
  clearFlightResponse: () => void;
}

export const useFlightStore = create<FlightStoreState>()(
  persist(
    (set) => ({
      flightSearchData: null,
      flightResponse: null,

      setFlightSearchData: (res) => set({ flightSearchData: res }),

      setFlightResponse: (response) =>
        set({
          flightResponse: [
            {
              meta: { count: response.meta.count },
              data: response.data,
              dictionaries: response.dictionaries || {},
            },
          ],
        }),

      clearFlightResponse: () => set({ flightResponse: null }),
    }),
    {
      name: "flight-response-store",
      partialize: (state) => ({
        flightSearchData: state.flightSearchData,
        flightResponse: state.flightResponse,
      }),

      onRehydrateStorage: () => (state) => {
        console.log("Flight store rehydrated:", state);
        if (state?.flightSearchData?.formdate) {
          // Example: if you want to rehydrate formdate as Date object
          // state.flightSearchData.formdate = new Date(state.flightSearchData.formdate);
        }
      },
    }
  )
);
