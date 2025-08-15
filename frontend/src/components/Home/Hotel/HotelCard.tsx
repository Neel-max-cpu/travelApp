import Image from 'next/image';
import React from 'react'
import { FaHeart, FaStar } from 'react-icons/fa';

type Props={
    hotel:{

        id: number;
        image: string;
        name: string;
        location: string;
        rating: number;
        reviews: string;
        price: string;
    }
}

const HotelCard = ({hotel}:Props) => {
  return (
    <div className="">
        <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
            {/* Add to favourite button */}
            <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col hover:bg-red-600 hover:-translate-y-[3px] hover:text-white transition duration-300 ease-in-out showdow-xl shadow-white">
                <FaHeart className='w-3 h-3 ' />
            </div>
            {/* overlay */}
            <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
            {/* image */}
            <Image src={hotel.image} alt={hotel.name}  width={500} height={500} className="overflow-hidden h-full w-full transition-all duration-300 object-cover group-hover:scale-110 outline-4 shadow-lg "/>        
        </div>
        {/* content */}
        <div className="">
            <h1 className="mt-4 text-lg font-semibold text-blue-950 hover:text-black cursor-pointer transition-all duration-200">{hotel.name}</h1>
            <p className="text-sm text-gray-600 font-medium mt-3 mb-6">{hotel.location}</p>
            {/* ratings */}
            <div className="flex items-center space-x-2">
                <div className="space-x-1 flex items-center px-3 py-3 bg-blue-800 rounded-md font-bold text-white text-xs">
                    <FaStar className="w-3 h-3"/>
                    {hotel.rating}                                                      
                </div>
                <p className="text-sm text-gray-800">Exceptional</p>
                <p className="text-sm font-bold text-gray-800">{hotel.reviews} Reviews</p>
            </div>
            {/* price */}
            <p className="mt-3 text-gray-700 font-medium">
                Starting from <span className="text-blue-600 font-bold">Rs. {hotel.price}</span>
            </p>
        </div>
    </div>
  )
}

export default HotelCard