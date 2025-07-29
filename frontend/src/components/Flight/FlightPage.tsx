'use client';
import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { flightResponse5data } from '@/data/flightData';
import moment from 'moment';
import { formateMoney } from '@/utils/helper';
import { IATACodes } from '@/utils/iataCodes';

const FlightPage = () => {
  return (
    <div className='bg-[#1B1212] min-h-screen pt-30'>
      <div className="flex flex-col items-center justify-center gap-5 p-4 md:p-20">
        {flightResponse5data.flatMap((item) =>
          item.data.map((flight) => (
            <FlightCard key={flight.id} data={flight} dictionaries={item.dictionaries} />
          ))
        )}
      </div>

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
  operating?: { carrierCode: string };
  duration: string;
  numberOfStops: number;
};

type Itinerary = {
  duration: string;
  //segment size determine direct flight or not
  segments: Segment[];
};

type FlightData = {
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
};

export function FlightCard({ data, dictionaries }: FlightCardProps) {
  
  //raw data ----
  const length = data.itineraries?.[0]?.segments?.length;

  const aircraftCode = data.itineraries?.[0]?.segments?.[0]?.aircraft?.code;
  const carrierCode = data.itineraries?.[0]?.segments?.[0]?.carrierCode;
    
  const departureTimeCode = data.itineraries?.[0]?.segments?.[0].departure.at;
  const departureCityCode  = data.itineraries?.[0]?.segments?.[0].departure.iataCode;
  const departureCountryCode = dictionaries.locations[departureCityCode]?.countryCode;
  
  
  const arrivalTimeCode = data.itineraries?.[0]?.segments?.[length-1].arrival.at;
  const arrivalCityCode = data.itineraries?.[0]?.segments?.[length-1].arrival.iataCode;
  const arrivalCountryCode = dictionaries.locations[arrivalCityCode]?.countryCode;
  
  const durationCode = data.itineraries?.[0]?.duration;
  const duration = moment.duration(durationCode);
  const totalHours = Math.floor(duration.asHours());
  const totalMinutes = duration.minutes();  
  
  const moneyCode = data.price.currency;
  const moneyTotal = data.price.total;
  const fommattedTotal = formateMoney(moneyTotal);

  const matchDepartureCity = IATACodes.find(
    (entry) => entry.code === departureCityCode && entry.country === departureCountryCode
  );

  const matchArrivalCity = IATACodes.find(
    (entry) => entry.code === arrivalCityCode && entry.country === arrivalCountryCode
  );
  
  //usable data ---
  const numberOfStops = length ? length - 1 : 0;
  
  const aircraftName = aircraftCode ? dictionaries.aircraft[aircraftCode] : 'Unknown';
  const aircraftCompany = carrierCode ? dictionaries.carriers[carrierCode] : 'Unknown';
  
  const formattedDuration = (totalMinutes===0)? `${totalHours}h` : `${totalHours}h ${totalMinutes}m`;

  const departureCity = matchDepartureCity ? matchDepartureCity.city : "Unknown";
  const departureTime = moment(departureTimeCode).format("HH:mm");
  const departureDay = moment(departureTimeCode).format("dddd, MMMM Do YYYY");  
  const departureTerminal = data.itineraries?.[0]?.segments?.[0].departure.terminal;
  
  const arrivalCity = matchArrivalCity? matchArrivalCity.city : "Unknown";
  const arrivalTime = moment(arrivalTimeCode).format("HH:mm");
  const arrivalDay = moment(arrivalTimeCode).format("dddd, MMM Do YYYY");  
  const arrivalTerminal = data.itineraries?.[0]?.segments?.[0].arrival.terminal;
  
  const price = `${moneyCode} ${fommattedTotal}`;
  
  //image
  const src = `/Airline_Logos/Square/${carrierCode}.png`;
  
  console.log("departureCityCode:", departureCityCode);      
  console.log("departureCountryCode:", departureCountryCode);  
  console.log("IATACodes Sample:", IATACodes.slice(0, 5));     

  return (
    <Card className="w-full">
      <CardContent>
        <div className="grid grid-cols-5 space-x-6 items-center justify-center">
          {/* part1 - plane */}
          <div className="flex space-x-2">
            <img src={src} alt="" className="w-10 h-10"/>
            <div className="">
              <h1 className="text-black font-semibold">{aircraftCompany}</h1>
              <h1 className="text-xs text-gray-500">{aircraftName}</h1>              
            </div>
          </div>
          {/* part2- departure time and place */}
          <div className="">
            <h1 className="font-bold text-lg">{departureTime}</h1>
            <h1 className="text-sm font-medium">{departureCity}</h1>            
            <h1 className="text-sm font-light">{departureDay}</h1>
          </div>
          {/* part3 - duration and stops */}
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-sm">{formattedDuration}</h1>
            {numberOfStops? (
                <h1 className="text-blue-500 font-medium text-sm">{numberOfStops} {numberOfStops>1? "Stops":"Stop"}</h1>
              ) :('')
            }
          </div>
          {/* part4 - arrival time and place */}
          <div className="">
            <h1 className="font-bold text-lg">{arrivalTime}</h1>
            <h1 className="text-sm font-medium">{arrivalCity}</h1>
            <h1 className="text-sm font-light">{arrivalDay}</h1>
          </div>
          {/* part5 - price and booknow */}
          <div className="">
            <h1 className="font-bold text-lg">{price}</h1>            
          </div>
        </div>
      </CardContent>
      {/* <CardFooter className="flex justify-end">
        <Button type="button" className="">Book Now</Button>
      </CardFooter> */}
    </Card>
  )
}