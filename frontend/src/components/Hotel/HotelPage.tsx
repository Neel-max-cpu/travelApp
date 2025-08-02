'use client';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { ImSpinner2 } from "react-icons/im";
import { hotelFromCity, hotelImage } from '@/data/hotelData';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';

const HotelPage = () => {

    const [visibleHotels, setVisibleHotels] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;
    const maxItem = 20;
    useEffect(() => {

        // Preprocess and store all flights
        const allHotels = hotelFromCity.flatMap((item) =>
            item.data.map((hotel) => ({
                ...hotel,              
            }))
        ).slice(0, maxItem);

        setVisibleHotels(allHotels.slice(0, itemsPerPage));
        setCurrentIndex(itemsPerPage);
    }, []);

    const fetchMoreData = () => {
        const allHotels = hotelFromCity.flatMap((item) =>
            item.data.map((hotel) => ({
                ...hotel,
            }))
        ).slice(0, maxItem);

        setTimeout(() => {
            const nextHotels = allHotels.slice(currentIndex, currentIndex + 2);
            setVisibleHotels((prev) => [...prev, ...nextHotels]);
            setCurrentIndex((prev) => prev + nextHotels.length);
        }, 700);
    };

    const hasMore = currentIndex < maxItem;


    return (
        <div className="bg-[#1B1212] min-h-screen pt-30">
            <InfiniteScroll
                dataLength={visibleHotels.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={
                    <div className="w-full flex justify-center items-center py-4 my-5">
                        <ImSpinner2 className="text-white text-2xl animate-spin" />
                    </div>
                }
            >
                <div className="flex flex-col items-center justify-center gap-5 p-4 md:p-20">
                    {visibleHotels.map((item, idx) => (
                        <HotelMapCard
                            key={`${item.hotelId}-${idx}`}
                            data={item}
                        />
                    ))}
                </div>

            </InfiniteScroll>
        </div>
    )
}

export default HotelPage

type HotelData = {
    chainCode: string;
    iataCode: string;
    dupeId: number;
    name: string;
    hotelId: string;
    geoCode: {
        latitude: number;
        longitude: number;
    };
    address: {
        countryCode: string;
        postalCode: string;
        stateCode: string;
        cityName: string;
        lines: string[];
    };
    distance: {
        value: number;
        unit: string;
    };
    lastUpdate: string;
}

type HotelDataProps = {
    data: HotelData;
};

export function HotelMapCard({ data }: HotelDataProps) {

    // call the image api with each name and get 3 full image    
    const results = hotelImage[0]?.results || [];
    const image1 = results[0]?.urls?.full || "/HotelDefaulImages/1.jpg";
    const image2 = results[1]?.urls?.full || "/HotelDefaulImages/2.jpg";
    const image3 = results[2]?.urls?.full || "/HotelDefaulImages/3.jpg";    
    
    return (
        <Card className="w-full">
            <CardContent>

                <div className="grid grid-cols-1 space-y-3 justify-start items-start lg:grid-cols-4 space-x-6 ">
                    {/* part 1 images */}
                    <div className="w-full space-y-3">
                        <img src={image1} className="w-52 rounded-lg" alt="" />
                        <div className="flex space-x-3">
                            <img src={image2} className="w-20 rounded-lg" alt="" />
                            <img src={image3} className="w-20 rounded-lg" alt="" />
                        </div>
                    </div>
                    {/* part 2 name and intro */}
                    <div className="w-full">
                        {data.name}
                    </div>
                    {/* part 3 is rating and all */}
                    {/* part4 - price and booknow */}
                    <div className="flex flex-col space-y-2">
                        <h1 className="font-bold text-lg text-center">hehe</h1>
                        <Button className="group relative overflow-hidden bg-green-600 hover:bg-gradient-to-r hover:from-green-600 hover:via-red-600 hover:to-yellow-400 hover:ring-2 hover:ring-blue-300 hover:ring-offset-2 hover:cursor-pointer transition-all ease-in-out duration-300 ">
                            <span className="absolute opacity-20 right-0 w-6 h-32 -mt-12 bg-white transition-all duration-1000 transform translate-x-12 rotate-12 group-hover:-translate-x-30 ease"></span>
                            <span>Book Now</span>
                        </Button>
                    </div>
                </div>
            </CardContent>
            {/* <CardFooter className="flex justify-end">
        <Button type="button" className="">Book Now</Button>
      </CardFooter> */}
        </Card>
    )
}