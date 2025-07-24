'use client';
import SearchBox from '@/components/Helper/SearchBox';
import SearchBoxFlight from '@/components/Helper/SearchBoxFlight';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const videoSources = [
    "/videos/hero2.mp4",
    "/videos/hero3.mp4",
    "/videos/hero4.mp4",
    "/videos/hero5.mp4",
]

const hotelImg = "/hotel.png";
const flightImg = "/airplane.png";

const Hero = () => {    

    const [currentSelected, setCurrentSelected] = useState<'hotel' | 'flight'>('hotel');
    

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
                                <img src={hotelImg} alt="hotel" className="w-6 h-6"/>
                                <h1>hotels</h1>
                            </div>
                        </div>
                        {/* right side flights */}
                        <div className="toggleOption" onClick={() => setCurrentSelected('flight')}>
                            <div className={`flex space-x-3 space-y-2 ${currentSelected === 'flight' ? 'border-b-4 border-blue-500' : ''}`}>
                                <img src={flightImg} alt="flight" className="w-6 h-6"/>
                                <h1>flights</h1>
                            </div>
                        </div>
                    </div>                                      
                    {/* search box */}  
                    {currentSelected==='hotel'?
                        <SearchBox />
                        : 
                        <SearchBoxFlight />
                    }
                    <Link href="#" className="rounded px-14 md:px-28 -mt-4 py-2.5 overflow-hidden group bg-rose-600 relative hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2
                hover:ring-red-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="relative font-bold">Search</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero