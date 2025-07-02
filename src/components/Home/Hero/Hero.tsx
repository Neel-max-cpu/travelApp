'use client';
import React, { useEffect, useRef, useState } from 'react'

const videoSources =[
    "/videos/hero2.mp4",
    "/videos/hero3.mp4",
    "/videos/hero4.mp4",
    "/videos/hero5.mp4",
]

const Hero = () => {
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
    

  return (
    <div className='relative w-full h-[120vh] sm:h-[100vh]'>
        {/* overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-40"></div>
        <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            src={videoSources[currentVideo]}
            autoPlay
            muted
            onEnded={handleVideoEnd}
            preload='metadata'
            playsInline
        />
    </div>
  )
}

export default Hero