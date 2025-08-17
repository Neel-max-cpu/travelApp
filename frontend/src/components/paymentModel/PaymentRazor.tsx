"use client";
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button';
import { useBookingStore } from '@/store/useBookingStore';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import axiosInstance from '@/utils/axiosInstance';
import { API_PATHS } from '@/utils/apiPaths';

const paymentRazor = () => {
    const router = useRouter();
    const razerPayLogo = "/Razorpay-Logo.jpg"
    const [hotelImages, setHotelImages] = useState<{image1?: string, image2?: string, image3?: string}>({});

    useEffect(() => {
        const storedImages = localStorage.getItem('hotelImages');
        if (storedImages) setHotelImages(JSON.parse(storedImages));
    }, []);

    // const hotelImages = JSON.parse(localStorage.getItem('hotelImages') || '{}');
    const bookingData = useBookingStore((state) => state.bookingData);
    console.log("BookingData: ", bookingData);

    useEffect(() => {
        if (typeof window !== 'undefined') {
        //   const storedImages = JSON.parse(localStorage.getItem('hotelImages') || '{}');
        //   setHotelImages(storedImages);
      
          console.log("hotelState:", localStorage.getItem("hotel-store"));
          console.log("hotelImage:", localStorage.getItem("hotelImages"));
          console.log("BookingData:", bookingData);
        }
      }, [bookingData]);
       
    if (!bookingData) return null;

    let flightImage;
    if (bookingData.type === "flight") {
        flightImage = `/Airline_Logos/Tail_Flipped/${bookingData.carrierCode}.png`
    }

    const [amount, setAmount] = useState(bookingData?.price || 100);

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const saveBooking = async () => {
        try {
            let response;
            //do the api
            if (bookingData.type === "flight") {
                const payLoad = {
                    origin: bookingData?.fromCity ?? null,
                    destination: bookingData?.toCity ?? null,
                    departureDate: bookingData?.departureDate ?? null,
                    departureTime: bookingData?.departureTime ?? null,
                    arrivalDate: bookingData?.arrivalDate ?? null,
                    arrivalTime: bookingData?.arrivalTime ?? null,
                    totalPrice: bookingData?.price ?? null,
                    aricraftCompany: bookingData?.aircraftCompany ?? null,
                    aircraftName: bookingData?.aircraftName ?? null,
                    carrierCodeForImage: bookingData?.carrierCode ?? null,
                    flightDuration: bookingData?.duration ?? null,
                    deptTerminal: bookingData?.deptTerminal ?? null,
                    arrivalTerminal: bookingData?.arrivalTerminal ?? null,
                    travellerClass: bookingData?.travellerClass ?? null,
                    numberOfPassangers: bookingData?.numberofTravellers ?? null,
                };

                response = await axiosInstance.post(API_PATHS.FLIGHT.FLIGHTBOOKING,payLoad);
                toast.success("Confirmation mail sent!");
            }
            else {
                //hotels                
                const hotelStore = JSON.parse(localStorage.getItem("hotel-store") || '{}');
                const payLoad ={
                    image1: hotelImages?.image1,
                    image2: hotelImages?.image2,
                    image3: hotelImages?.image3,
                    checkInDate: bookingData.checkInDate,
                    checkOutDate: bookingData.checkOutDate,
                    guestNumber: hotelStore?.state?.guestNumber,
                    hotelName: bookingData.name,
                    cityCode: bookingData.cityCode,
                    price: bookingData.price,
                }
                response = await axiosInstance.post(API_PATHS.HOTELS.HOTELBOOKING, payLoad);
                toast.success("Confirmation mail sent!");
            }
            toast.success("Redirecting please wait!");
            router.push("/bookings")
        } catch (error: any) {
            console.log(error);
            toast.error("Error in saving the data!");
        }
    }


    const handlePayment = async (val: string) => {
        if (!localStorage.getItem("token")) {
            toast.error("Login in first to make the payment!");
            return;
        }

        if (val === "payment") {


            const res = await loadRazorpayScript();
            if (!res) {
                alert('Razorpay SDK failed to load.');
                return;
            }

            const amountInPaisa = Math.round(amount * 100);

            const options = {
                key: process.env.NEXT_PUBLIC_RAZOR_KEY_ID!,
                amount: amountInPaisa,
                currency: "INR",
                name: "Your Booking App",
                description: "Hotel/Flight Booking",
                handler: function (response: any) {
                    console.log("Payment successful", response);
                    //save it in db
                    toast.success("Payment success!");
                    saveBooking();
                },
                prefill: {
                    name: "Neel",
                    email: "neel@example.com",
                    contact: "9999999999",
                },
                theme: {
                    color: "#3399cc",
                },
                method: {
                    netbanking: true,
                    card: true,
                    upi: true,
                    wallet: true,
                },
            };

            const rzp = new (window as any).Razorpay(options);
            rzp.open();
        }

        if (val === "skip") {
            toast.success("Skipped payment but we will let it slide 😉");
            saveBooking();
        }
    };

    return (
        // <div className="bg-[#1B1212] min-h-screen flex flex-col items-center justify-center p-30">
        <div className="goldenHorizon min-h-screen flex flex-col items-center justify-center p-30">
            <h1 className="text-2xl mb-2 font-semibold text-white">Confirm Payment</h1>
            <div className="flex items-center justify-center space-x-2 text-white mb-6">
                <p className="font-semibold italic">Powered By:</p>
                <img src={razerPayLogo} alt="" className="h-10 rounded-lg shadow-lg" />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-left w-[90%] max-w-md">
                {bookingData.type === 'hotel' ? (
                    <>
                        {/* images */}
                        <div className="space-y-3 flex flex-col justify-center mb-3">
                            <div className="bg-gray-300 w-[398px] h-[224px] rounded-lg shadow-md">
                                <img src={hotelImages.image1} alt="" className="w-full h-full object-cover rounded-lg shadow-md" />
                            </div>
                            <div className="flex space-x-3">
                                <div className="bg-gray-300 w-[235px] h-[132px] rounded-lg shadow-md">
                                    <img src={hotelImages.image2} alt="" className="w-full h-full object-cover rounded-lg shadow-md" />
                                </div>
                                <div className="bg-gray-300 w-[235px] h-[132px] rounded-lg shadow-md">
                                    <img src={hotelImages.image3} alt="" className="w-full h-full object-cover rounded-lg shadow-md" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <p><strong>Hotel:</strong> {bookingData?.name}</p>
                            <p><strong>City:</strong> {bookingData?.cityCode}</p>
                            <p><strong>Check-in:</strong> {bookingData?.checkInDate}</p>
                            <p><strong>Check-out:</strong> {bookingData?.checkOutDate}</p>
                            <div className="flex items-center">
                                <p className="mr-2"><strong>Amount:</strong></p>
                                <div className="flex items-center">
                                    <span className="">Rs.</span>
                                    <input
                                        type="number"
                                        value={amount}
                                        className="w-50 ml-2 border px-1 mr-2 py-1 rounded"
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                    />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Flight Info */}
                        <div>
                            <div className="flex space-x-3 items-end mb-3">
                                <img src={flightImage} alt="" className="w-20" />
                                <div className="flex flex-col space-y-2">
                                    <p>
                                        <strong>Carrier:</strong> {bookingData.carrier}
                                    </p>
                                    <p className="font-semibold text-sm text-gray-500">{bookingData.aircraftName}</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 w-full gap-2 items-center text-center mb-3">
                                <div className="flex flex-col space-y-2">
                                    <p className="justify-self-start">
                                        <strong>From:</strong> {bookingData.fromCity}
                                    </p>
                                    <p className="text-xs text-gray-500 font-medium">Terminal: {bookingData.deptTerminal}</p>
                                    <p className="text-xs text-blue-500 font-bold underline">Time: {bookingData.departureTime}</p>
                                </div>

                                <div className="flex flex-col items-center justify-center">
                                    <p className="text-xs font-semibold text-blue-500">{bookingData.duration}</p>
                                    <div className="relative bg-gradient-to-r from-yellow-400 via-white to-red-500 w-full h-1 rounded-lg mt-1"></div>
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <p className="justify-self-end">
                                        <strong>To:</strong> {bookingData.toCity}
                                    </p>
                                    <p className="text-xs text-gray-500 font-medium">Terminal: {bookingData.arrivalTerminal}</p>
                                    <p className="text-xs text-blue-500 font-bold underline">Time: {bookingData.arrivalTime}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <p>
                                    <strong>Departure:</strong> {bookingData.departureDate}
                                </p>
                                <p>
                                    <strong>Arrival:</strong> {bookingData.arrivalDate}
                                </p>
                                <p>
                                    <strong>Seat Type:</strong> {bookingData.travellerClass}
                                </p>
                                <div className="flex items-center">
                                    <p className="mr-2">
                                        <strong>Amount:</strong>
                                    </p>
                                    <div className="flex items-center">
                                        <span className="">Rs</span>
                                        <input
                                            type="number"
                                            value={amount}
                                            className="w-20 ml-2 border px-1 mr-2 py-1 rounded"
                                            onChange={(e) => setAmount(Number(e.target.value))}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <div className="flex flex-col space-y-2">
                    <Button
                        onClick={() => handlePayment("payment")}
                        className="group mt-6 w-full relative overflow-hidden  bg-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:via-blue-900 hover:to-white hover:ring-2 hover:ring-blue-300 hover:ring-offset-2 hover:cursor-pointer transition-all ease-in-out duration-300 "
                    >
                        <span className="absolute opacity-30 right-0 w-5 h-32 -mt-12 bg-white transition-all duration-1000 transform translate-x-12 rotate-12 group-hover:-translate-x-45 ease"></span>
                        <span>Pay Now</span>
                    </Button>
                    <Button
                        onClick={() => handlePayment("skip")}
                        className="group relative overflow-hidden  bg-green-600 hover:bg-gradient-to-r hover:from-green-600 hover:via-red-600 hover:to-yellow-400 hover:ring-2 hover:ring-blue-300 hover:ring-offset-2 hover:cursor-pointer transition-all ease-in-out duration-300 ">
                        <span className="absolute opacity-30 right-0 w-5 h-32 -mt-12 bg-white transition-all duration-1000 transform translate-x-12 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span>Skip payment 😉</span>
                    </Button>
                </div>
            </div>
        </div >
    );
};

export default paymentRazor