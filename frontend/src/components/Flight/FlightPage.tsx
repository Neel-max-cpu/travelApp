'use client';
import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { flightResponse5data } from '@/data/flightData';

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
  const numberOfStops = data.itineraries?.[0]?.segments?.length
    ? data.itineraries[0].segments.length - 1
    : 0;
    
  const aircraftCode = data.itineraries?.[0]?.segments?.[0]?.aircraft?.code;
  const aircraftName = aircraftCode ? dictionaries.aircraft[aircraftCode] : 'Unknown';

  const carrierCode = data.itineraries?.[0]?.segments?.[0]?.carrierCode;
  const aircraftCompany = carrierCode ? dictionaries.carriers[carrierCode] : 'Unknown';

  


  return (
    <Card className="w-full">
      <CardContent>
        <div className="flex">

        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="button" className="">Book Now</Button>
      </CardFooter>
    </Card>
  )
}