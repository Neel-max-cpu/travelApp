'use client';
import React, { useEffect, useState } from 'react'
import { ChartAreaGradient } from '../Chart/Chart'
import { API_PATHS } from '@/utils/apiPaths';
import axiosInstance from '@/utils/axiosInstance';
import toast from 'react-hot-toast';

const DashboardDetails = () => {

    const [loading, setLoading] = useState(false);
    const [hotelCount, setHotelCount] = useState(0);
    const [flightCount, setFlightCount] = useState(0);
            
    useEffect(() => {
        const fetchTotalData = async () => {
          try {
            if (loading) return;
            setLoading(true);
            const response = await axiosInstance.get(API_PATHS.COMMON.COUNTDATA);
            const hotels = response.data.HotelCount ?? 0;
            const flights = response.data.FlightCount ?? 0;
            // console.log("Testing console for hotels:", hotels);
            // console.log("Testing console for flights:", flights);
    
            setHotelCount(response.data.HotelCount ?? 0);
            setFlightCount(response.data.FlightCount ?? 0);     
    
            setLoading(false);
          } catch (error: any) {
            setLoading(false);
            toast.error("Something went wrong please try again!");
            console.log("error in fetching the data", error);
          } finally {
            setLoading(false);
          }
        }
        fetchTotalData();
      }, []);
  return (
    <div className="darkSphereGrid min-h-screen flex flex-col p-30">
        {/* chart */}
        <div className="flex space-x-5">
            <div className="flex flex-col p-2 text-slate-900 bg-gray-200 rounded-lg shadow-lg">
                <h1 className="">Total Hotels Booked LifeTime :</h1>
                <h1 className="text-center font-bold text-3xl">{hotelCount}</h1>
            </div>
            <div className="flex flex-col p-2 text-slate-900 bg-gray-200 rounded-lg shadow-lg">
                <h1 className="">Total Flights Booked Life Time</h1>
                <h1 className="text-center font-bold text-3xl">{flightCount}</h1>
            </div>
        </div>
      <div className="mt-10">
        <ChartAreaGradient />
      </div>
    </div>
  )
}

export default DashboardDetails