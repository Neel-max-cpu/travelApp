'use client';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { ImSpinner2 } from "react-icons/im";
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useHotelStore } from '@/store/useHotelStore';
import toast from 'react-hot-toast';
import axiosInstance from '@/utils/axiosInstance';
import { API_PATHS } from '@/utils/apiPaths';
import useAmadeusToken from '@/hooks/useAmadeusToken';

const HotelPage = () => {
    // data from zustand
    const hotelFromCityZustand = useHotelStore((state) => state.hotelResponse);

    const [visibleHotels, setVisibleHotels] = useState<any[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 5;
    const maxItem = 20;
    useEffect(() => {

        // Preprocess and store all flights
        /*
        const allHotels = hotelFromCity.flatMap((item) =>
            item.data.map((hotel) => ({
                ...hotel,              
            }))
        ).slice(0, maxItem);
        */

        if (!hotelFromCityZustand?.data) return;
        const allHotels = hotelFromCityZustand.data.slice(0, maxItem);

        setVisibleHotels(allHotels.slice(0, itemsPerPage));
        setCurrentIndex(itemsPerPage);
    }, [hotelFromCityZustand]);

    const fetchMoreData = () => {
        /*
        const allHotels = hotelFromCity.flatMap((item) =>
            item.data.map((hotel) => ({
                ...hotel,
            }))
        ).slice(0, maxItem);
        */

        if (!hotelFromCityZustand?.data) return;
        const allHotels = hotelFromCityZustand.data.slice(0, maxItem);


        setTimeout(() => {
            const nextHotels = allHotels.slice(currentIndex, currentIndex + 2);
            setVisibleHotels((prev) => [...prev, ...nextHotels]);
            setCurrentIndex((prev) => prev + nextHotels.length);
        }, 700);
    };

    const hasMore = currentIndex < maxItem;


    return (
        // <div className="bg-[#1B1212] min-h-screen pt-30">
        <div className="goldenHorizon min-h-screen pt-30">
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

    //verificaiton token
    const amadeusToken = useAmadeusToken();

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    /*
    const results = hotelImage[0]?.results || [];
    const image1 = results[0]?.urls?.full || "/HotelDefaulImages/1.jpg";
    const image2 = results[1]?.urls?.full || "/HotelDefaulImages/2.jpg";
    const image3 = results[2]?.urls?.full || "/HotelDefaulImages/3.jpg";
    */
    // call the image api with each name and get 3 full image  
    const [images, setImages] = useState<{
        image1: string;
        image2: string;
        image3: string;
    }>({
        image1: "",
        image2: "",
        image3: "",
    });

    const [imageLoading, setImageLoading] = useState(false);
    const [imageError, setImageError] = useState(false);


    const defaultImages = {
        image1: "/HotelDefaulImages/1.jpg",
        image2: "/HotelDefaulImages/2.jpeg",
        image3: "/HotelDefaulImages/3.jpg",
    }


    useEffect(() => {
        if (imageLoading) return;
        setImageLoading(true);
        const fetchHotelImages = async () => {
            let response;
            try {
                const params = {
                    query: data.name || "hotel",
                    per_page: 3,
                    client_id: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY || "notfound"
                }
                //unsplash no need of token
                response = await axiosInstance.get(API_PATHS.HOTELS.GETHOTELIMAGE(params));
                const results = response.data.results || [];
                const image1 = results[0]?.urls?.full;
                const image2 = results[1]?.urls?.full;
                const image3 = results[2]?.urls?.full;
                const newImages = { image1, image2, image3 };
                setImages(newImages);
            } catch (error: any) {
                setImageError(true);
                console.log("error fetching the hotel images: ", error.message || error);
            } finally {
                setImageLoading(true);
            }
        };
        fetchHotelImages();
    }, [data.name])


    //data from zustand
    const checkInDate = useHotelStore((state) => state.checkInDate);
    const checkOutDate = useHotelStore((state) => state.checkOutDate);
    const guestNumber = useHotelStore((state) => state.guestNumber);

    //api for hotel offers
    const showHotelOffer = async (e: any) => {
        if (loading) return;
        e.preventDefault();
        e.stopPropagation();
        setLoading(true);
        let response;
        try {
            const params = {
                hotelIds: [data.hotelId],
                adults: guestNumber ?? 1,
                checkInDate: checkInDate ? checkInDate.toISOString().split("T")[0] : "",
                checkOutDate: checkOutDate ? checkOutDate.toISOString().split("T")[0] : undefined
            }
            response = await axiosInstance.get(API_PATHS.HOTELS.GETHOTELOFFERS(params), {
                headers:{
                    Authorization: `Bearer ${amadeusToken}`,
                }
            })
            console.log("offers Hotel" , response);

            //save in zustand
             useHotelStore.getState().setHotelOffer([
                {
                    data: response?.data?.data ?? []
                }
             ]);

            // Decide what to save based on error or loading state
            const finalImages = {
                image1: !imageError && images.image1 ? images.image1 : defaultImages.image1,
                image2: !imageError && images.image2 ? images.image2 : defaultImages.image2,
                image3: !imageError && images.image3 ? images.image3 : defaultImages.image3,
            };
            localStorage.setItem('hotelImages', JSON.stringify(finalImages));
            toast.success("Redirecting please wait!");
            router.push('/hotel-results/hotel-offers')
            setLoading(false);
        } catch (error: any) {
            setLoading(false);
            toast.error("Something went wrong please try again sometime later!")
            console.log("error while searching hotel: ", error.message || error);
        }
    }

    return (
        <Card className="w-[80%]">
            <CardContent>
                <div className="grid grid-cols-1 space-y-3 justify-start items-start lg:grid-cols-3 space-x-2 ">
                    {/* part 1 images */}
                    <div className="w-full space-y-3 overflow-hidden">
                        <div className={`bg-gray-400 w-[160px] h-[90px] rounded-lg ${imageLoading ? 'animate-pulse' : ''}`}>
                            <img
                                src={!imageLoading && imageError ? defaultImages.image1 : images.image1}
                                onLoad={() => setImageLoading(false)}
                                onError={() => {
                                    setImageLoading(false);
                                    setImageError(true);
                                }}
                                className="w-full h-full object-cover rounded-lg shadow-lg border-2"
                                alt=""
                            />
                        </div>
                        <div className="flex space-x-2">
                            <div className={`bg-gray-400 rounded-lg w-[80px] h-[45px] ${imageLoading ? 'animate-pulse' : ''}`}>
                                <img
                                    src={!imageLoading && imageError ? defaultImages.image2 : images.image2}
                                    onLoad={() => setImageLoading(false)}
                                    onError={() => {
                                        setImageLoading(false);
                                        setImageError(true);
                                    }}
                                    className="w-full h-full object-cover rounded-lg shadow-lg border-2"
                                    alt=""
                                />
                            </div>
                            <div className={`bg-gray-400 rounded-lg w-[80px] h-[45px] ${imageLoading ? 'animate-pulse' : ''}`}>
                                <img
                                    src={!imageLoading && imageError ? defaultImages.image3 : images.image3}
                                    onLoad={() => setImageLoading(false)}
                                    onError={() => {
                                        setImageLoading(false);
                                        setImageError(true);
                                    }}
                                    className="w-full h-full object-cover rounded-lg shadow-lg border-2"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    {/* part 2 name and intro */}
                    <div className="w-full space-y-2">
                        <h1 className="text-black font-bold underline">
                            {data.name}
                        </h1>
                        <div className="grid grid-cols-3 space-x-3 text-xs">
                            <h1 className="font-medium text-blue-600">{data.address.lines}</h1>
                            <h1 className="font-medium">{data.distance.value} {data.distance.unit} distance from city center</h1>
                            <h1 className="font-medium">Pin: {data.address.postalCode}</h1>
                        </div>
                    </div>
                    {/* part3 - booknow */}
                    <div className="w-full flex flex-col space-y-2">
                        {/* <h1 className="font-bold text-lg text-center">hehe</h1> */}
                        <Button
                            disabled={loading}
                            onClick={showHotelOffer}
                            className="group relative overflow-hidden bg-green-600 hover:bg-gradient-to-r hover:from-green-600 hover:via-red-600 hover:to-yellow-400 hover:ring-2 hover:ring-blue-300 hover:ring-offset-2 hover:cursor-pointer transition-all ease-in-out duration-300 ">
                            <span className="absolute opacity-20 right-0 w-6 h-32 -mt-12 bg-white transition-all duration-1000 transform translate-x-12 rotate-12 group-hover:-translate-x-30 ease"></span>
                            <span>{loading ? "Showing Details..." : "Show Details"}</span>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}