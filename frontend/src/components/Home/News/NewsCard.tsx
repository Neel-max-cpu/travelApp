import Image from 'next/image';
import React from 'react'

type Props={
    image:string;
    date:string;
    title:string;
}

const NewsCard = ({image, date, title}:Props) => {
  return (
    <div className="">
        <div className="h-[300px] shadow-lg outline-4 outline-offset-4 outline-white rounded">
            <Image src={image} alt={title} width={300} height={300} className="w-full h-full object-cover rounded-lg" />
        </div>
        <h1 className="mt-6 text-lg text-gray-950 font-semibold hover:text-blue-950 transition-all duration-200 cursor-pointer">{title} <span className="text-sm font-medium text-red-500">(News Letter Special)</span></h1>
        <p className="text-sm text-gray-600 mt-3">{date}</p>
    </div>
  )
}

export default NewsCard