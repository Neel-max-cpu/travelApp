'use client'
import React, { useEffect, useState } from 'react'
import { ChartAreaGradient } from '../Chart/Chart'
import { Button } from '../ui/button'
import toast from 'react-hot-toast'
import axiosInstance from '@/utils/axiosInstance'
import { API_PATHS } from '@/utils/apiPaths'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ImSpinner2 } from 'react-icons/im'

const BookingDetails = () => {

  const [loading, setLoading] = useState(false);
  const [whichButton, setWhichButton] = useState("hotel");


  const [flightData, setFlightData] = useState<any>(null);
  const [visibleFlights, setVisibleFlights] = useState<any[]>([]);
  const [currentFlightIndex, setCurrentFlightIndex] = useState(0);

  const [hotelData, setHotelData] = useState<any>(null);
  const [visibleHotels, setVisibleHotels] = useState<any[]>([]);
  const [currentHotelIndex, setCurrentHotelIndex] = useState(0);

  const itemsPerPage = 7;

  useEffect(() => {
    const fetchBookedData = async () => {
      try {
        // if (loading) return;
        setLoading(true);
        const response = await axiosInstance.get(API_PATHS.COMMON.BOOKEDDATA);
        const hotels = response.data.HotelData ?? [];
        const flights = response.data.FlightData ?? [];
        console.log(hotels);
        console.log(flights);

        setHotelData(hotels);
        setFlightData(flights);

        setVisibleHotels(hotels.slice(0, itemsPerPage));
        setCurrentHotelIndex(itemsPerPage);

        setVisibleFlights(flights.slice(0, itemsPerPage));
        setCurrentFlightIndex(itemsPerPage);

        setLoading(false);
      } catch (error: any) {
        setLoading(false);
        toast.error("Something went wrong please try again!");
        console.log("error in fetching the data", error);
      } finally {
        setLoading(false);
      }

    }
    fetchBookedData();
  }, []);

  // Flights Infinite Scroll
  const fetchMoreFlights = () => {
    setTimeout(() => {
      const nextFlights = flightData.slice(
        currentFlightIndex,
        currentFlightIndex + itemsPerPage
      );
      setVisibleFlights((prev) => [...prev, ...nextFlights]);
      setCurrentFlightIndex((prev) => prev + nextFlights.length);
    }, 700);
  };

  // Hotels Infinite Scroll
  const fetchMoreHotels = () => {
    setTimeout(() => {
      const nextHotels = hotelData.slice(
        currentHotelIndex,
        currentHotelIndex + itemsPerPage
      );
      setVisibleHotels((prev) => [...prev, ...nextHotels]);
      setCurrentHotelIndex((prev) => prev + nextHotels.length);
    }, 700);
  };

  const hasMoreFlights = currentFlightIndex < flightData?.length;
  const hasMoreHotels = currentHotelIndex < hotelData?.length;


  return (
    <div className="bg-[#1B1212] min-h-screen flex flex-col p-30">
      <div className="">
        {/* heading */}
        <h1 className="text-white text-2xl font-bold p-3">My Bookings:</h1>
        <div className="flex p-3 space-x-3 gap-10">
          <div className="navButtonStyle">
            <div className="flex space-x-2 items-center">
              <span>Hotel Booking</span>
            </div>
          </div>
          <div className="navButtonStyle">
            <div className="flex space-x-2 items-center">
              <span>Flight Bookings</span>
            </div>
          </div>
        </div>
      </div>

      {/* chart */}
      <div className="mt-10">
        <ChartAreaGradient />
      </div>

      {/* map */}
      <div className="">
        {whichButton === "hotel" ? (
          <InfiniteScroll
            dataLength={visibleHotels.length}
            next={fetchMoreHotels}
            hasMore={hasMoreHotels}
            loader={
              <div className="w-full flex justify-center items-center py-4">
                <ImSpinner2 className="text-white text-2xl animate-spin" />
              </div>
            }
          >
            {visibleHotels.map((hotel, idx) => (
             //hotel cards
             <HotelCard
             key={`hotel-${hotel.id}-${idx}`}
             data={hotelData}
             />
           ))}
          </InfiniteScroll>
        ) : (
          <InfiniteScroll
            dataLength={visibleFlights.length}
            next={fetchMoreFlights}
            hasMore={hasMoreFlights}
            loader={
              <div className="w-full flex justify-center items-center py-4">
                <ImSpinner2 className="text-white text-2xl animate-spin" />
              </div>
            }
          >
            {visibleFlights.map((flight, idx) => (
              // flight card
              <FlightCard
                key={`flight-${flight.id}-${idx}`}
                data={flightData}
              />
            ))}
          </InfiniteScroll>
        )}
      </div>
    </div>
  )
}

export default BookingDetails


type FlightProps ={
  data:any;
}

export function FlightCard({data}:FlightProps){
  return(
    <div className="">Flight card</div>
  )
}

type HotelProps={
  data:any;
}
export function HotelCard({data}:HotelProps){
  return(
    <div className="">HotelCard</div>
  )
}