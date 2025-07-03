'use client';
import SearchBox from '@/components/Helper/SearchBox';
import React, { useEffect, useRef, useState } from 'react'

const videoSources =[
    "/videos/hero2.mp4",
    "/videos/hero3.mp4",
    "/videos/hero4.mp4",
    "/videos/hero5.mp4",
]

const Hero = () => {
    /*
    const [currentVideo, setCurrentVideo] = useState(0);    
    
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoEnd = ()=>{        
        setCurrentVideo((prev)=> (prev+1) % videoSources.length);
    };

    useEffect(() => {
        if(videoRef.current){
            videoRef.current.load();
            videoRef.current.play();
        }
    }, [currentVideo]);
    */
    

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
                <div className="">
                    <h1 className="text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem] text-white font-bold uppercase">lets enjoy the nature</h1>
                    <p className="uppercase md:text-base text-center text-lg text-white font-normal [word-spacing:5px]">get the best prices on 20,000+ properties worldwide</p>
                </div>
                {/* search box */}
                <SearchBox/>
            </div>
        </div>
    </div>
  )
}

export default Hero