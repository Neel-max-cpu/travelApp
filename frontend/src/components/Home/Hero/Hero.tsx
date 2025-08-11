'use client';
import SearchBoxFlight from '@/components/Helper/SearchBoxFlight';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { classData } from '@/data/flightData';
import { API_PATHS } from '@/utils/apiPaths';
import axiosInstance from '@/utils/axiosInstance';
import moment from 'moment';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import SearchBoxHotel from '@/components/Helper/SearchBoxHotel';
import { useHotelStore } from '@/store/useHotelStore';
import toast from 'react-hot-toast';
import { useFlightStore } from '@/store/useFlightStore';
import useAmadeusToken from '@/hooks/useAmadeusToken';

const videoSources = [
    "/videos/hero2.mp4",
    "/videos/hero3.mp4",
    "/videos/hero4.mp4",
    "/videos/hero5.mp4",
]

const hotelImg = "/hotel.png";
const flightImg = "/airplane.png";

const Hero = () => {
    //verificaiton token
    const amadeusToken = useAmadeusToken();

    const router = useRouter();

    const [currentSelected, setCurrentSelected] = useState<'hotel' | 'flight'>('hotel');

    // flight data
    const [fromAirport, setFromAirport] = useState<{ label: string; value: string } | null>(null);
    const [toAirport, setToAirport] = useState<{ label: string; value: string } | null>(null);
    const [defaultTraveller, setDefaultTraveller] = useState("1");
    const [defaultClass, setDefaultClass] = useState(classData[0]);
    const [formdate, setFormDate] = useState<Date | undefined>();


    //hotel data
    const [hotelLocation, setHotelLocation] = useState<{ label: string, value: string } | null>(null);
    const [checkInDate, setCheckInDate] = useState<Date | undefined>();
    const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();
    const [cityCenterDistance, setCityCenterDistance] = useState("5");
    const [aminities, setAminities] = useState<string[]>([]);
    const [hotelStars, setHotelStars] = useState("");
    const [guestNumber, setGuestNumber] = useState(1);
    

    //search 
    const [loading, setLoading] = useState(false);


    const handleSearch = async (e: any) => {
        if (loading) return;
        e.preventDefault();
        e.stopPropagation();
        setLoading(true);
        if (currentSelected === 'hotel') {
            let response;
            try {

                //validations                
                if(!hotelLocation){
                    toast.error("please fill the req * field! Location of your stay");
                    setLoading(false);
                    return;
                }
                if(!checkInDate){
                    toast.error("Please fill the check In Date!");
                    setLoading(false);
                    return;
                }
                if(!guestNumber){
                    toast.error("Please fill in number of guests!");
                    setLoading(false);
                    return;
                }

                // save the check in/out date for further api calls
                const params = {
                    cityCode: hotelLocation?.value,
                    radius: cityCenterDistance,
                    amenities: aminities,
                    ratings: hotelStars ? [hotelStars] : [],
                };
                console.log("params: ", params);
                response = await axiosInstance.get(
                    API_PATHS.HOTELS.GETHOTELSINCITY(params), {
                    headers: {
                        Authorization: `Bearer ${amadeusToken}`,
                    },

                });
                console.log("response ", response);

                //save it in zustand
                useHotelStore.getState().setHotelResponse(response.data);
                if (checkInDate) {
                    useHotelStore.getState().setCheckInDate(checkInDate);
                }
                if (checkOutDate) {
                    useHotelStore.getState().setCheckOutDate(checkOutDate);
                }
                useHotelStore.getState().setGuestNumber(guestNumber);

                toast.success("Redirecting please wait!");
                router.push("/hotel-results");
                setLoading(false);

            } catch (error: any) {
                setLoading(false);
                toast.error("Something went wrong please try again sometime later!")
                console.log("error while searching hotel: ", error.message || error);
            }
        }
        else {
            let response;
            try {
                //validation
                if(!fromAirport){
                    toast.error("Please select Departure Airport!");
                    setLoading(false);
                    return;
                }

                if(!toAirport){
                    toast.error("Please select arrival Airport!");
                    setLoading(false);
                    return;
                }             
                
                if(!formdate){
                    toast.error("Please select Departure Date!");
                    setLoading(false);
                    return;                    
                }

                const travellerLenght = parseInt(defaultTraveller, 10);
                const travellers = Array.from({ length: travellerLenght }, (_, i) => ({
                    id: (i + 1).toString(),
                    travelerType: "ADULT"
                }));

                const payLoad = {
                    "currencyCode": "INR",
                    "originDestinations": [
                        {
                            "id": "1",
                            "originLocationCode": fromAirport?.value,
                            "destinationLocationCode": toAirport?.value,
                            "departureDateTimeRange": {
                                "date": moment(formdate).format("YYYY-MM-DD")
                            }
                        }
                    ],
                    "travelers": travellers,
                    "sources": [
                        "GDS"
                    ],
                    "searchCriteria": {
                        "maxFlightOffers": 20,
                        "flightFilters": {
                            "cabinRestrictions": [
                                {
                                    "cabin": defaultClass.value,
                                    "coverage": "MOST_SEGMENTS",
                                    "originDestinationIds": [
                                        "1"
                                    ]
                                }
                            ]
                        }
                    }
                }                
                response = await axiosInstance.post(API_PATHS.FLIGHT.FLIGHTSEARCH,payLoad,{
                    headers:{
                        Authorization: `Bearer ${amadeusToken}`,
                    }
                });
                console.log("response ", response);

                //save it in zustand
                useFlightStore.getState().setFlightResponse({
                    meta: { count: response.data.meta.count },
                    data: response.data.data,
                    dictionaries: response.data.dictionaries
                });

                const res ={
                    fromAirport,
                    toAirport,
                    formdate,
                    defaultClass,
                    defaultTraveller
                }
                useFlightStore.getState().setFlightSearchData(res);
                

                // Redirect to results page
                /*
                localStorage.setItem("flight_search_data", JSON.stringify({
                    fromAirport,
                    toAirport,
                    formdate,
                    defaultClass,
                    defaultTraveller
                }));
                */
                toast.success("Redirecting please wait!");
                router.push("/flight-results");   
                setLoading(false);          

            } catch (error) {
                console.error("Flight search error:", error);
            }
        }

    }

    return (
        <div className='relative w-full h-[120vh] sm:h-[100vh]'>
            {/* overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-40"></div>
            <video src="/videos/hero_main.mp4" autoPlay muted loop preload='metadata' className='w-full h-full object-cover'></video>
            {/* <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoSources[currentVideo]}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            preload='metadata'
            playsInline
        /> */}
            {/* date to book */}
            <div className="absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div className="flex items-center justify-center flex-col w-full h-full">
                    <div className="" data-aos="fade-up">
                        <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase">Travel beyond boundaries</h1>
                        <p className="uppercase md:text-base text-center text-lg text-white font-normal [word-spacing:5px]">Book smart, Travel easy, Your all-in-one trip planner.</p>
                        <p className="uppercase md:text-base text-center text-lg text-white font-normal [word-spacing:5px]">get the best prices on 20,000+ Hotels & Flights worldwide</p>
                    </div>

                    {/* toggle for flight/hotel */}
                    <div className="mt-10 grid grid-cols-2 bg-white rounded-xl">
                        {/* left side hotels */}
                        <div className="toggleOption" onClick={() => setCurrentSelected('hotel')}>
                            <div className={`flex space-x-3 space-y-2 ${currentSelected === 'hotel' ? 'border-b-4 border-blue-500' : ''}`}>
                                <img src={hotelImg} alt="hotel" className="w-6 h-6" />
                                <h1>hotels</h1>
                            </div>
                        </div>
                        {/* right side flights */}
                        <div className="toggleOption" onClick={() => setCurrentSelected('flight')}>
                            <div className={`flex space-x-3 space-y-2 ${currentSelected === 'flight' ? 'border-b-4 border-blue-500' : ''}`}>
                                <img src={flightImg} alt="flight" className="w-6 h-6" />
                                <h1>flights</h1>
                            </div>
                        </div>
                    </div>
                    {/* search box */}
                    {currentSelected === 'hotel' ?
                        <SearchBoxHotel
                            hotelLocation={hotelLocation}
                            setHotelLocation={setHotelLocation}
                            checkInDate={checkInDate}
                            setCheckInDate={setCheckInDate}
                            checkOutDate={checkOutDate}
                            setCheckOutDate={setCheckOutDate}
                            cityCenterDistance={cityCenterDistance}
                            setCityCenterDistance={setCityCenterDistance}
                            aminities={aminities}
                            setAminities={setAminities}
                            hotelStars={hotelStars}
                            setHotelStars={setHotelStars}
                            guestNumber={guestNumber}
                            setGuestNumber={setGuestNumber}
                        />
                        :
                        <SearchBoxFlight
                            fromAirport={fromAirport}
                            setFromAirport={setFromAirport}
                            toAirport={toAirport}
                            setToAirport={setToAirport}
                            defaultTraveller={defaultTraveller}
                            setDefaultTraveller={setDefaultTraveller}
                            defaultClass={defaultClass}
                            setDefaultClass={setDefaultClass}
                            formdate={formdate}
                            setFormDate={setFormDate}
                        />
                    }
                    <Button type="button" onClick={handleSearch}
                        disabled={loading}
                        className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2
                hover:ring-red-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-20 rotate-12 group-hover:-translate-x-30 ease"></span>
                        <span className="relative font-bold">{loading ? "Searching..." : "Search"}</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero