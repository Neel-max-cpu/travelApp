import React from 'react'
import { FaStar } from 'react-icons/fa'
import { FaRegStarHalfStroke } from 'react-icons/fa6'
import ReviewSlider from './ReviewSlider'

const Reviews = () => {
  return (
    <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]">
        <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="">
                <h1 className="text-2xl font-semibold text-white">What our Customer are Saying us?</h1>
                <p className="mt-6 text-gray-200">wirte the reviews</p>
                <div className="mt-6 flex items-center space-x-6">
                    <div className="">
                        <p className="font-bold text-2xl text-white">4.88</p>
                        <p className="text-white mb-2">Overall Rating</p>
                        <div className="flex items-center">
                            <FaStar className="text-white" />
                            <FaStar className="text-white" />
                            <FaStar className="text-white" />
                            <FaStar className="text-white" />
                            <FaRegStarHalfStroke  className="text-white" />
                        </div>
                    </div>
                </div>
            </div>
            {/* slider */}
            <div className="overflow-hidden">
                <ReviewSlider/>
            </div>
        </div>
    </div>
  )
}

export default Reviews