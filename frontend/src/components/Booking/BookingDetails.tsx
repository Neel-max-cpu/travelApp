'use client'
import React, { useEffect, useState } from 'react'
import { ChartAreaGradient } from '../Chart/Chart'
import toast from 'react-hot-toast'
import axiosInstance from '@/utils/axiosInstance'
import { API_PATHS } from '@/utils/apiPaths'
import InfiniteScroll from 'react-infinite-scroll-component'
import { ImSpinner2 } from 'react-icons/im'
import { Card, CardContent } from '../ui/card'
import { commaSeparator, formatDateTime } from '@/utils/helper'

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
        if (loading) return;
        setLoading(true);
        const response = await axiosInstance.get(API_PATHS.COMMON.BOOKEDDATA);
        const hotels = response.data.HotelData ?? [];
        const flights = response.data.FlightData ?? [];
        // console.log("Testing console for hotels:", hotels);
        // console.log("Testing console for flights:", flights);

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


  const handleChangeDataButton = (val:string)=>{
    setWhichButton(val);
  }

  return (
    <div className="bg-[#1B1212] min-h-screen flex flex-col p-30">
      <div className="">
        {/* heading */}
        <h1 className="text-white text-2xl font-bold p-3">My Bookings:</h1>
        <div className="flex p-3 space-x-3 gap-10">
          <div className="navButtonStyle">
            <div className="flex space-x-2 items-center">
              <span onClick={()=>handleChangeDataButton("hotel")}>Hotel Booking</span>
            </div>
          </div>
          <div className="navButtonStyle">
            <div className="flex space-x-2 items-center">
              <span onClick={()=>handleChangeDataButton("flight")}>Flight Bookings</span>
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
            <div className="flex flex-col items-center justify-center gap-5 p-4 lg:p-20">
              {visibleHotels.map((hotel, idx) => (
                //hotel cards
                <HotelCard
                  key={`hotel-${hotel.id}-${idx}`}
                  data={hotel}
                />
              ))}
            </div>
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
            <div className="flex flex-col items-center justify-center gap-5 p-4 md:p-20">
              {visibleFlights.map((flight, idx) => (
                // flight card
                <FlightCard
                  key={`flight-${flight.id}-${idx}`}
                  data={flight}
                />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </div>
    </div>
  )
}

export default BookingDetails


type FlightProps = {
  data: any;
}

export function FlightCard({ data }: FlightProps) {
  const coverImgSquare = `/Airline_Logos/Square/${data.carrierCodeForImage}.png`;
  const coverImgRectangle = `/Airline_Logos/Rectangular/${data.carrierCodeForImage}.png`;
  const coverImgTail = `/Airline_Logos/Tail_Flipped/${data.carrierCodeForImage}.png`;
  return (
    <Card className="w-full">
      <CardContent>
        <div className="bg-white">
          {/* top image */}
          <div className="flex justify-center items-center mb-5">
            <img src={coverImgRectangle} className="w-[400px]" alt="" />
          </div>
          {/* name carrier */}
          <div className="flex space-x-5 mb-5">
            <img src={coverImgTail} className="w-[100px]" alt="" />
            <div className="flex flex-col space-y-2 justify-center ">
              <h1 className="font-bold">Carrier: <span className="font-normal">{data.aricraftCompany}</span></h1>
              <h1 className="text-gray-500 font-semibold">{data.aircraftName}</h1>
            </div>

          </div>
          {/* middle */}
          <div className="grid grid-cols-3 w-full gap-2 items-center text-center mb-5">
            <div className="flex flex-col space-y-2">
              <p className="justify-self-start">
                <strong>From:</strong> {data.origin}
              </p>
              <p className="text-xs text-gray-500 font-medium">Terminal: {data.deptTerminal}</p>
              <p className="text-xs text-blue-500 font-bold underline">Time: {data.departureTime}</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-xs font-semibold text-blue-500">{data.flightDuration}</p>
              <div className="relative bg-gradient-to-r from-yellow-400 via-white to-red-500 w-full h-1 rounded-lg mt-1"></div>
            </div>

            <div className="flex flex-col space-y-2">
              <p className="justify-self-end">
                <strong>To:</strong> {data.destination}
              </p>
              <p className="text-xs text-gray-500 font-medium">Terminal: {data.arrivalTerminal}</p>
              <p className="text-xs text-blue-500 font-bold underline">Time: {data.arrivalTime}</p>
            </div>
          </div>
          {/* details */}
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold">Departure Data: <span className="font-normal"> {data.departureDate}</span></h1>
            <h1 className="font-bold">Arrival Data: <span className="font-normal"> {data.arrivalDate}</span></h1>
            <h1 className="font-bold">Total Amount: Rs <span className="font-normal"> {data.totalPrice}</span></h1>
            {data.sendMailConfirmation === 'Y' ? (
              <div className="flex space-x-2">
                <h1 className="font-bold">Payment Mode: <span className="font-normal"> Online </span></h1>
                <h1 className="font-bold"><span className="font-normal text-blue-500"> Mail Confirmation sent!</span></h1>
              </div>
            ) : (
              <div className="flex">
                <h1 className="font-bold">Payment Mode: <span className="font-normal"> Not Complete!</span></h1>
                <h1 className="font-bold"><span className="font-normal"> Mail Confirmation not sent!</span></h1>
              </div>
            )}
            <h1 className="font-bold">Mail Confirmation Sent to: <span className="font-normal"> {data.userEmail}</span></h1>
            <h1 className="font-bold">Total Passengers: <span className="font-normal"> {data.numberOfPassangers} {data.numberOfPassangers === 1 ? "Adult" : "Adults"}</span></h1>
            <h1 className="font-bold">Travel Class: <span className="font-normal"> {data.travellerClass}</span></h1>
            <h1 className="font-bold">Booked On: <span className="font-normal"> {formatDateTime(data.createdOn)}</span></h1>
          </div>
          {/* final image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <img src={coverImgSquare} className="w-[100px]" alt="" />
            </div>
            <div className="absolute">
              <h1 className="tracking-widest font-bold">{data.aricraftCompany} Wishes you a safe journey and happy journey Ahead 🙏</h1>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

type HotelProps = {
  data: any;
}
export function HotelCard({ data }: HotelProps) {

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState({ image1: null, image2: null, image3: null });

  useEffect(() => {
    if (loading) return;
    setLoading(true);

    const setImagesAsync = () => {
      setImages({
        image1: data.image1,
        image2: data.image2,
        image3: data.image3,
      });
      setLoading(false); // ✅ Done after setting images
    };

    setImagesAsync();
  }, []);


  return (
    <Card className="w-full">
      <CardContent>
        {/* image */}
        <div className="relative">
          {/* images */}
          <div className="flex relative items-center justify-center space-x-2">
            {[images.image1, images.image2, images.image3].map((src, index) => (
              <div
                key={index}
                className={`relative bg-gray-300 w-[500px] h-[281px] rounded-lg shadow-md ${loading ? "animate-pulse" : ""}`}
              >
                <img
                  src={src ?? ""}
                  alt={`Property image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
          {/* text */}
          <span className="absolute z-10 bottom-2 left-[35%] text-white font-bold text-3xl tracking-widest">
            Property Photos
          </span>
        </div>
        {/* content */}
        <div className="flex flex-col mt-3 space-y-4">
          <h1 className="font-bold text-purple-500 tracking-widest">Hotel: <span className="underline font-bold text-black">{data.hotelName}</span></h1>

          <h1 className="text-2xl font-medium">Your booking:</h1>
          <div className="bg-gray-100 border p-3 rounded-md">
            <h1 className="font-bold">City: <span className="font-normal">{data.cityCode}</span></h1>
            <h1 className="font-bold">Check in date: <span className="font-normal">{data.checkInDate}</span></h1>
            <h1 className="font-bold">Check out date: <span className="font-normal">{data.checkOutDate}</span></h1>
            {data.sendMailConfirmation === 'Y' ? (
              <div className="flex space-x-2">
                <h1 className="font-bold">Payment Mode: <span className="font-normal"> Online </span></h1>
                <h1 className="font-bold"><span className="font-normal text-blue-500"> Mail Confirmation sent!</span></h1>
              </div>
            ) : (
              <div className="flex">
                <h1 className="font-bold">Payment Mode: <span className="font-normal"> Not Complete!</span></h1>
                <h1 className="font-bold"><span className="font-normal"> Mail Confirmation not sent!</span></h1>
              </div>
            )}
            <h1 className="font-bold">Mail Confirmation Sent to: <span className="font-normal"> {data.userEmail}</span></h1>
            <h1 className="font-bold">Total Guests: <span className="font-normal"> {data.guestNumber} {data.guestNumber === 1 ? "Adult" : "Adults"}</span></h1>
            <h1 className="font-bold">Total Amount: Rs <span className="font-normal"> {commaSeparator(data.price)}</span></h1>
            <h1 className="font-bold">Booked On: Rs <span className="font-normal"> {formatDateTime(data.createdOn)}</span></h1>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}