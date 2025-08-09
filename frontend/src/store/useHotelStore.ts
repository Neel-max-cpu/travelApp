import { create } from "zustand";
import { persist } from "zustand/middleware";

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

// ----------------------------------------------------------------

interface HotelOffers{
  type:string,
  hotel: {
    type: "string",
    hotelId:"string",
    chainCode: "string",
    dupeId:"string",
    name: "string",
    cityCode: "string",
    latitude: number,
    longitude: number
  },
  available: boolean,
  offers:[
    {
      id:"string",
      checkInDate:"string",
      checkOutDate:"string",
      rateCode: "string",
      room: {
        type: string,
        typeEstimated: {
          beds: number,
          bedType: string,
        },
        description: {
          text: "string",
          lang: "string",
        },
      },
      guests: {
        adults: number,
      },
      price: {
        currency: string,
        base: string,
        total: string,
        variations: {
          average: {
            base: string,
          },
          changes: [
            {
              startDate: string,
              endDate: string,
              base: string,
            },
          ],
        },
      },
      policies: {
        cancellations: [
          {
            description: {
              text: "string",
            },
            policyType: "string",
          },
        ],
        paymentType: "string",
        refundable: {
          cancellationRefund: "string",
        },
      },
      self: "string",
      roomInformation: {
        description: "string",
        type: "string",
        typeEstimated: {
          bedType: "string",
          beds: number,
        },
      },
    },
  ],
}

interface HotelOfferWrapper {
  data: HotelOffers[];
}

interface HotelStore {
  hotelResponse: HotelApiResponse | null;
  hotelOffer: HotelOfferWrapper [] | null;


  checkInDate: Date | null;
  checkOutDate: Date | null;

  guestNumber: number | null;
  
  setHotelResponse: (res: HotelApiResponse) => void;
  setHotelOffer: (res:HotelOfferWrapper[])=>void;

  setCheckInDate: (checkInDate: Date) => void;
  setCheckOutDate: (checkOutDate: Date) => void;

  setGuestNumber:(guestNumber:number)=>void;
  
  // clearHotelResponse: () => void;
  
}

export const useHotelStore = create<HotelStore>()(
  persist(
    (set) => ({
      hotelResponse: null,
      hotelOffer: null,

      checkInDate: null,
      checkOutDate: null,
      
      guestNumber: null,

      setHotelResponse: (res) => set({ hotelResponse: res }),
      setHotelOffer:(res)=>set({hotelOffer:res}),

      setCheckInDate: (checkInDate) => set({ checkInDate }),
      setCheckOutDate: (checkOutDate) => set({ checkOutDate }),

      setGuestNumber: (guestNumber) => set({ guestNumber }),

      clearHotelResponse: () => set({ hotelResponse: null }),
      clearHotelOffer: () => set({ hotelOffer: null }),
    }),
    {
      name: "hotel-store", // localStorage key
      // optional: if you want to serialize Dates properly
      partialize: (state) => ({
        hotelResponse: state.hotelResponse,
        hotelOffer: state.hotelOffer,
        checkInDate: state.checkInDate ? state.checkInDate.toISOString() : null,
        checkOutDate: state.checkOutDate ? state.checkOutDate.toISOString() : null,
        guestNumber: state.guestNumber,
      }),
      // optional: rehydrate Date objects if needed
      onRehydrateStorage: () => (state) => {
        if (state?.checkInDate) {
          state.checkInDate = new Date(state.checkInDate as any);
        }
        if (state?.checkOutDate) {
          state.checkOutDate = new Date(state.checkOutDate as any);
        }
      },
    }
  )
);