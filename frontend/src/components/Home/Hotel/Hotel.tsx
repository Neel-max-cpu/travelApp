import SectionHeading from '@/components/Helper/SectionHeading'
import { hotelsData } from '@/data/data'
import React from 'react'
import HotelCard from './HotelCard'

const Hotel = () => {
  return (
    <div className='pt-20 pb-20'>
        {/* section heading */}
        <SectionHeading 
            heading="Recomended Hotels"
            subheading="Curated comfort, Top-rated hotels chosen just for you. Handpicked stays for your next unforgettable journey."
        />
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-8 items-center mt-16">
            {/* hotelcard */}
            {hotelsData.map((data, i)=>{
                return (
                    <div className="" key={data.id} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={`${i*100}`}>
                        <HotelCard hotel={data}/>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Hotel