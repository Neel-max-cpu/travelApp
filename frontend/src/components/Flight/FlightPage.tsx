'use client';
import React, { useEffect, useState } from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { flightResponse20data, flightResponse5data } from '@/data/flightData';
import moment from 'moment';
import { formateMoney } from '@/utils/helper';
import { IATACodes } from '@/utils/iataCodes';
import axiosInstance from '@/utils/axiosInstance';
import { API_PATHS } from '@/utils/apiPaths';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ImSpinner2 } from "react-icons/im";

const FlightPage = () => {
  const [searchData, setSearchData] = useState<any>(null);
  const [visibleFlights, setVisibleFlights] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;
  useEffect(() => {
    const data = localStorage.getItem('flight_search_data');
    if (data) setSearchData(JSON.parse(data));

    // Preprocess and store all flights
    const allFlights = flightResponse20data.flatMap((item) =>
      item.data.map((flight) => ({
        flight,
        dictionaries: item.dictionaries,
      }))
    );

    setVisibleFlights(allFlights.slice(0, itemsPerPage));
    setCurrentIndex(itemsPerPage);
  }, []);

  const fetchMoreData = () => {
    const allFlights = flightResponse20data.flatMap((item) =>
      item.data.map((flight) => ({
        flight,
        dictionaries: item.dictionaries,
      }))
    );

    setTimeout(() => {
      const nextFlights = allFlights.slice(currentIndex, currentIndex + 2);
      setVisibleFlights((prev) => [...prev, ...nextFlights]);
      setCurrentIndex((prev) => prev + nextFlights.length);
    }, 700);
  };

  const hasMore = currentIndex < flightResponse20data.flatMap((item) => item.data).length;


  return (
    <div className='bg-[#1B1212] min-h-screen pt-30'>
      <InfiniteScroll
        dataLength={visibleFlights.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="w-full flex justify-center items-center py-4 my-5">
            <ImSpinner2 className="text-white text-2xl animate-spin" />
          </div>
        }
      >
        <div className="flex flex-col items-center justify-center gap-5 p-4 md:p-20">
          {visibleFlights.map((item, idx) => (
            <FlightCard
              key={`${item.flight.id}-${idx}`}
              data={item.flight}
              dictionaries={item.dictionaries}
              searchData={searchData}
            />
          ))}
        </div>
      </InfiniteScroll>

    </div>
  )
}

export default FlightPage;

type Segment = {
  departure: { iataCode: string; terminal?: string; at: string };
  arrival: { iataCode: string; terminal?: string; at: string };
  carrierCode: string;          // aircraft company
  number: string;
  aircraft: { code: string };     // plane name
  operating?: { carrierCode?: string };
  duration: string;
  numberOfStops: number;

  //extra for avoiding warning
  id?: string;
  blacklistedInEU?: boolean;
};

type Itinerary = {
  duration: string;
  //segment size determine direct flight or not
  segments: Segment[];
};

type FlightData = {
  //extra for safe keeping/avoiding warning
  type?: string;
  source?: string;
  instantTicketingRequired?: boolean;
  nonHomogeneous?: boolean;
  oneWay?: boolean;
  isUpsellOffer?: boolean;
  lastTicketingDate?: string;
  lastTicketingDateTime?: string;
  travelerPricings?: any[];

  //using the data 
  id: string;
  itineraries: Itinerary[];
  price: {
    total: string;
    currency: string;
  };
};


type Dictionaries = {
  locations: Record<
    string,
    {
      cityCode: string;
      countryCode: string;
    }
  >;
  aircraft: Record<string, string>;
  currencies: Record<string, string>;
  carriers: Record<string, string>;
};

type FlightCardProps = {
  data: FlightData;
  dictionaries: Dictionaries;
  searchData: {
    fromAirport: { label: string; value: string };
    toAirport: { label: string; value: string };
    formdate: string;
    defaultClass: { id: number; value: string; name: string };
    defaultTraveller: string;
  };

};

export function FlightCard({ data, dictionaries, searchData }: FlightCardProps) {

  //raw data ----
  const length = data.itineraries?.[0]?.segments?.length;

  const aircraftCode = data.itineraries?.[0]?.segments?.[0]?.aircraft?.code;
  const carrierCode = data.itineraries?.[0]?.segments?.[0]?.carrierCode;

  const departureTimeCode = data.itineraries?.[0]?.segments?.[0].departure.at;
  const departureCityCode = data.itineraries?.[0]?.segments?.[0].departure.iataCode;
  const departureCountryCode = dictionaries.locations[departureCityCode]?.countryCode;


  const arrivalTimeCode = data.itineraries?.[0]?.segments?.[length - 1].arrival.at;
  const arrivalCityCode = data.itineraries?.[0]?.segments?.[length - 1].arrival.iataCode;
  const arrivalCountryCode = dictionaries.locations[arrivalCityCode]?.countryCode;

  const durationCode = data.itineraries?.[0]?.duration;
  const duration = moment.duration(durationCode);
  const totalHours = Math.floor(duration.asHours());
  const totalMinutes = duration.minutes();

  const moneyCode = data.price.currency;
  const moneyTotal = data.price.total;
  const fommattedTotal = formateMoney(moneyTotal);


  //usable data ---
  const numberOfStops = length ? length - 1 : 0;

  const aircraftName = aircraftCode ? dictionaries.aircraft[aircraftCode] : 'Unknown';
  const aircraftCompany = carrierCode ? dictionaries.carriers[carrierCode] : 'Unknown';

  const formattedDuration = (totalMinutes === 0) ? `${totalHours}h` : `${totalHours}h ${totalMinutes}m`;

  const departureCity = searchData?.fromAirport?.label || departureCityCode;
  const departureTime = moment(departureTimeCode).format("HH:mm");
  const departureDay = moment(departureTimeCode).format("dddd, MMMM Do YYYY");
  const departureTerminal = data.itineraries?.[0]?.segments?.[0].departure.terminal || "N/A";

  const arrivalCity = searchData?.toAirport?.label || arrivalCityCode;
  const arrivalTime = moment(arrivalTimeCode).format("HH:mm");
  const arrivalDay = moment(arrivalTimeCode).format("dddd, MMM Do YYYY");
  const arrivalTerminal = data.itineraries?.[0]?.segments?.[0].arrival.terminal || "N/A";

  const price = `${moneyCode} ${fommattedTotal}`;

  //image
  const src = `/Airline_Logos/Square/${carrierCode}.png`;

  // console.log("departureCityCode:", departureCityCode);      
  // console.log("departureCountryCode:", departureCountryCode);  
  // console.log("IATACodes Sample:", IATACodes.slice(0, 5));     

  return (
    <Card className="w-full">
      <CardContent>
        <div className="grid grid-cols-1 space-y-3 justify-start items-start lg:grid-cols-5 space-x-6 ">
          {/* part1 - plane */}
          <div className="flex space-x-2">
            <img src={src} alt="" className="w-10 h-10" />
            <div className="">
              <h1 className="text-black font-semibold">{aircraftCompany}</h1>
              <h1 className="text-xs text-gray-500">{aircraftName}</h1>
            </div>
          </div>
          {/* part2- departure time and place */}
          <div className="">
            <h1 className="font-bold text-lg">{departureTime}</h1>
            <div className="flex space-x-3">
              <h1 className="text-sm font-medium">{departureCity}</h1>
              <p className="text-sm text-gray-400">Terminal: {departureTerminal}</p>
            </div>
            <h1 className="text-sm font-light">{departureDay}</h1>
          </div>
          {/* part3 - duration and stops */}
          <div className="flex flex-col items-center justify-center mt-5 space-y-3">
            <h1 className="text-sm">{formattedDuration}</h1>
            <div className="relative bg-gradient-to-r from-yellow-400 via-white to-red-500 w-full h-1 rounded-lg">
              {/* <div className="w-2 h-2 rounded-full absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 border border-red-500 bg-white"></div> */}

              {numberOfStops > 0 && (
                Array.from({ length: numberOfStops }, (_, index) => {
                  const spacing = 100 / (numberOfStops + 1);
                  const position = spacing * (index + 1);

                  return (
                    <div
                      key={index}
                      className="w-2 h-2 rounded-full absolute top-1/2 border border-red-500 bg-white"
                      style={{
                        left: `${position}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    />
                  );
                })
              )}
            </div>
            {numberOfStops ? (
              <h1 className="text-blue-500 font-medium text-sm">{numberOfStops} {numberOfStops > 1 ? "Stops" : "Stop"}</h1>
            ) : (
              <h1 className="text-blue-500 font-medium text-sm">Non Stop</h1>
            )
            }
          </div>
          {/* part4 - arrival time and place */}
          <div className="">
            <h1 className="font-bold text-lg">{arrivalTime}</h1>
            <div className="flex space-x-3">
              <h1 className="text-sm font-medium">{arrivalCity}</h1>
              <p className="text-sm text-gray-400">Terminal: {arrivalTerminal}</p>
            </div>
            <h1 className="text-sm font-light">{arrivalDay}</h1>
          </div>
          {/* part5 - price and booknow */}
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold text-lg text-center">{price}</h1>
            <Button className="group relative overflow-hidden bg-green-600 hover:bg-gradient-to-r hover:from-green-600 hover:via-red-600 hover:to-yellow-400 hover:ring-2 hover:ring-blue-300 hover:ring-offset-2 hover:cursor-pointer transition-all ease-in-out duration-300 ">
              <span className="absolute opacity-20 right-0 w-6 h-32 -mt-12 bg-white transition-all duration-1000 transform translate-x-12 rotate-12 group-hover:-translate-x-30 ease"></span>
              <span>Book Now</span>
            </Button>
          </div>
        </div>
      </CardContent>
      {/* <CardFooter className="flex justify-end">
        <Button type="button" className="">Book Now</Button>
      </CardFooter> */}
    </Card>
  )
}