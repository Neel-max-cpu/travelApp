'use client'
import React from 'react'
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { hotelOffer } from '@/data/hotelData';
import moment from 'moment';

const HotelOfferComponent = () => {
    const hotelImages = JSON.parse(localStorage.getItem('hotelImages') || '{}');
    const hotelData = hotelOffer[0].data[0];
    const offers = hotelData.offers || [];

    return (
        <div className="bg-[#1B1212] min-h-screen p-30">
            <div className="bg-white p-3 rounded-lg flex flex-col">
                {/* images */}
                <div className="flex space-x-3">
                    <div className="relative bg-gray-300 w-[500px] h-[281px] rounded-lg shadow-md">
                        <img src={hotelImages.image1} alt="" className="w-full h-full object-cover rounded-lg shadow-md" />
                        <span className="absolute bottom-2 left-5 text-white font-bold text-xl tracking-widest">Property Photos</span>
                    </div>
                    <div className="flex flex-col space-y-3">
                        <div className="bg-gray-300 w-[235px] h-[132px] rounded-lg shadow-md">
                            <img src={hotelImages.image2} alt="" className="w-full h-full object-cover rounded-lg shadow-md" />
                        </div>
                        <div className="bg-gray-300 w-[235px] h-[132px] rounded-lg shadow-md">
                            <img src={hotelImages.image3} alt="" className="w-full h-full object-cover rounded-lg shadow-md" />
                        </div>
                    </div>
                </div>
                {/* baisc info */}
                <div className="">
                    <div className="flex my-2 p-2 space-x-3">
                        <span className="text-blue-500 text-lg font-semibold ">Hotel:</span>
                        <h2 className="text-lg font-semibold underline"> {hotelData.hotel.name}</h2>
                    </div>
                    <h1 className="text-xl font-semibold my-2 p-3">Available Offers:</h1>
                    {!hotelData.available ? (
                        <h1 className="text-red-500">No offers available right now. Sorry 😔</h1>
                    ) : (
                        offers.map((offer) => (
                            <div key={offer.id} className="p-4 border rounded-md mb-4 bg-gray-100">
                                <div className="grid grid-cols-2">
                                    <div className="">
                                        <p className="text-sm font-bold">Important Info:</p>
                                        {offer.room.description?.text.split('\n').map((line, index) => (
                                            <p key={index} className="text-sm text-gray-700 mb-1">{line}</p>
                                        ))}
                                        <p className="text-sm text-gray-600">
                                            <span className="font-bold text-black">Check-in:</span> {moment(offer.checkInDate).format("DD-MM-YYYY")}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-bold text-black">Check-out:</span> {moment(offer.checkOutDate).format("DD-MM-YYYY")}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            <span className="font-bold text-black">Guests:</span> {offer.guests.adults} Adult{offer.guests.adults > 1 ? 's' : ''}
                                        </p>
                                        <p className="text-sm text-gray-800 font-semibold">Total: ${offer.price.total} {offer.price.currency}</p>
                                        <p className="text-sm text-blue-500 mt-1">{offer.policies?.cancellations?.[0]?.description?.text}</p>
                                    </div>
                                    {/* button */}
                                    <div className="flex flex-col space-y-3 justify-end items-end">
                                        <Button className="cursor-pointer">See More Info</Button>
                                        <Button                                            
                                            className="group relative overflow-hidden  bg-green-600 hover:bg-gradient-to-r hover:from-green-600 hover:via-red-600 hover:to-yellow-400 hover:ring-2 hover:ring-blue-300 hover:ring-offset-2 hover:cursor-pointer transition-all ease-in-out duration-300 ">
                                            <span className="absolute opacity-30 right-0 w-5 h-32 -mt-12 bg-white transition-all duration-1000 transform translate-x-12 rotate-12 group-hover:-translate-x-15 ease"></span>
                                            <span>Book Now</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}

                </div>
            </div>

        </div>
    )
}

export default HotelOfferComponent