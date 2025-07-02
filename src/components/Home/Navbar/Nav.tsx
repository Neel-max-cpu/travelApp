'use client';
import { navlinks } from '../../../constants/constants';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2';
import { TbAirBalloon } from "react-icons/tb";

type Props={
  openNav:()=>void
}

const Nav = ({openNav}:Props) => {
  const [navBg, setNavBg] = useState(false);
  
  useEffect(() => {
    const handler = ()=>{
      // if scroll is >= 90px
      if(window.scrollY>=90) setNavBg(true);
      if(window.scrollY<90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return ()=>{
      window.removeEventListener("scroll", handler);
    }
  }, [])
  

  return (
    <div className={`${navBg? "bg-blue-950 shadow-md":"bg-transparent"} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
            <TbAirBalloon className='w-6 h-6 text-white'/>
          </div>
          <h1 className='text-xl md:text-2xl text-white uppercase font-bold'>Trip</h1>
        </div>
        {/* navlinks */}
        <div className="hidden md:flex items-center space-x-10">
          {navlinks.map((item)=>{
            return (
              <Link href={item.url} key={item.id}>               
                <p className="relative text-white text-base font-medium w-fit block 
                  after:block after:content-[''] 
                  after:absolute after:h-[3px] after:bg-yellow-300 after:w-full                   
                  after:scale-x-0 hover:after:scale-x-100 
                  after:origin-right hover:after:origin-left 
                  after:transition-transform after:duration-300">
                  {item.lable}
                </p>
              </Link>
            )
          })}
        </div>
        
        {/* button */}
        <div className="flex items-center space-x-4">         
          <button className="relative bg-white md:px-12 md:py-2.5 px-8 py-2 text-base hover:bg-gray-100 hover:font-medium transition-all duration-200 rounded-lg hover:cursor-pointer hover:-translate-y-[2px]">
            Book Now
          </button>
          {/* burger menu */}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white md:hidden"/>
        </div>


      </div>
    </div>
  )
}

export default Nav