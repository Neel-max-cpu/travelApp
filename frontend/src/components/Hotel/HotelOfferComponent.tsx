'use client'
import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { hotelOffer, hotelOfferDetail } from '@/data/hotelData';
import moment from 'moment';
import { useRouter } from 'next/navigation';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { useBookingStore } from '@/store/useBookingStore';
import { changeToInr, changeToInrNumber } from '@/utils/helper';
import { useHotelStore } from '@/store/useHotelStore';

const HotelOfferComponent = () => {
    const router = useRouter();
    const hotelImages = JSON.parse(localStorage.getItem('hotelImages') || '{}');
    // const hotelData = hotelOffer[0].data[0];
    // const offers = hotelData.offers || [];
    const hotelData = useHotelStore((state)=>state.hotelOffer);
    const offers = hotelData.offers || [];

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOfferData = (offer: any) => {
        const dataToSend = {
            type: "hotel",
            name: hotelData.hotel.name,
            cityCode: hotelData.hotel.cityCode,
            checkInDate: hotelData.offers[0].checkInDate,
            checkOutDate: hotelData.offers[0].checkOutDate,
            price: changeToInrNumber(hotelData.offers[0].price.total),
            currency: hotelData.offers[0].price.currency,
        } as const;

        useBookingStore.getState().setBookingData(dataToSend); // set in store
        router.push("/payment");
    };

    // 1 $ = Rs 87.77

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
                                        <p className="text-sm font-bold">Brief Info:</p>
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
                                        <p className="text-xl text-gray-800 font-bold underline">Total: {changeToInr(offer.price.total)} INR</p>
                                        <p className="text-xs text-red-500 font-semibold mt-1">*{offer.policies?.cancellations?.[0]?.description?.text}</p>
                                    </div>
                                    {/* button */}
                                    <div className="flex flex-col space-y-3 justify-end items-end">
                                        {/* dialog call api to fetch the specific offer */}
                                        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                            <DialogTrigger asChild onClick={() => setIsDialogOpen(true)}>
                                                <Button className="cursor-pointer">See More Info</Button>
                                            </DialogTrigger>
                                            <DialogOverlay className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-sm" />
                                            <DialogContent className="sm:max-w-[60%] w-[60%] z-[10000]">
                                                <DialogHeader>
                                                    <DialogTitle>More Info:</DialogTitle>
                                                    <DialogDescription>
                                                        Offer in details
                                                    </DialogDescription>
                                                </DialogHeader>
                                                {/* map offers */}
                                                <div className="max-h-[60vh] overflow-y-auto pr-2">
                                                    {hotelOfferDetail.map((hotelItem, hotelIndex) => {
                                                        const hotel = hotelItem.data.hotel;
                                                        const offers = hotelItem.data.offers;

                                                        return (
                                                            <div key={hotel.hotelId || hotelIndex} className="mb-6">
                                                                {offers.map((offer, offerIndex) => (
                                                                    <div key={offer.id || offerIndex} className="border p-2 rounded-md shadow-sm bg-white mb-4 space-y-2">
                                                                        {/* type desc */}
                                                                        <div className="text-sm">
                                                                            <p className="underline font-bold">Brief:</p>
                                                                            <p className="text-gray-800 font-semibold">{offer.description.text}</p>
                                                                        </div>
                                                                        {/* room desc */}
                                                                        <div className="flex flex-col">
                                                                            <span className="text-sm font-bold underline">Room description:</span>
                                                                            <p className="font-semibold text-sm text-gray-800">{offer.room.typeEstimated.bedType} bed: {offer.room.typeEstimated.beds}</p>
                                                                            <p className="text-sm font-semibold text-gray-800">
                                                                                {offer.room.description.text}
                                                                            </p>
                                                                        </div>
                                                                        {/* guests */}
                                                                        <div className="text-sm flex space-x-2">
                                                                            <p className="font-bold underline">Guests:</p>
                                                                            <p className="font-semibold text-gray-800">{offer.guests.adults} Adults</p>
                                                                        </div>
                                                                        {/* date */}
                                                                        <div className="text-sm flex space-x-2">
                                                                            <p className="font-bold underline">Check-in:</p>
                                                                            <p className="text-gray-800">{moment(offer.checkInDate).format("DD-MM-YYYY")}</p>
                                                                        </div>
                                                                        {/* date */}
                                                                        <div className="text-sm flex space-x-2">
                                                                            <p className="font-bold underline">Check-out:</p>
                                                                            <p className="text-gray-800">{moment(offer.checkOutDate).format("DD-MM-YYYY")}</p>
                                                                        </div>
                                                                        {/* price */}
                                                                        <p className="font-bold text-sm text-blue-500 underline">Tax Breakdown :</p>
                                                                        <div className="text-sm grid grid-cols-2 gap-2">
                                                                            <div className="flex flex-col">
                                                                                <p className="font-semibold text-red-500">Base:</p>
                                                                                <p className="text-gray-600">
                                                                                    Rs. {changeToInr(offer.price.base)}
                                                                                </p>
                                                                            </div>
                                                                            {offer.price.taxes.map((tax, index) => (
                                                                                <div key={index} className="flex flex-col">
                                                                                    <p className="font-semibold text-red-500">{tax.code.replace(/_/g, ' ')}</p>
                                                                                    <p className="text-gray-600">
                                                                                        Rs. {changeToInr(tax.amount)}
                                                                                    </p>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                        <div className="text-xl font-bold flex space-x-2">
                                                                            <p className="">Total: </p>
                                                                            <p className="text-blue-500">Rs.{changeToInr(offer.price.total)}</p>
                                                                        </div>
                                                                        <p className="text-xs font-semibold text-red-600 mt-2">*{offer.policies.cancellations[0]?.description.text}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                        <Button variant="outline"
                                                            onClick={() => {
                                                                setIsDialogOpen(false);
                                                            }
                                                            }>
                                                            Close
                                                        </Button>
                                                    </DialogClose>
                                                </DialogFooter>
                                            </DialogContent>
                                        </Dialog>
                                        <Button
                                            onClick={() => handleOfferData(offer)}
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
        </div >
    )
}

export default HotelOfferComponent