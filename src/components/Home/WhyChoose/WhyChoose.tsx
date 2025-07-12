import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import WhyChooseCard from './WhyChooseCard'

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24 ">
        {/* section */}
        <SectionHeading heading="Why Choose Us" subheading="hehe"/>
        <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
            {/* why choose card */}
            <div className="">
                <WhyChooseCard image="/images/c1.svg" title="Best Price Gurantee"/>
            </div>
            <div className="">
                <WhyChooseCard image="/images/c2.svg" title="Easy & Quick Booking"/>
            </div>
            <div className="">
                <WhyChooseCard image="/images/c3.svg" title="Customer Care 24x7"/>
            </div>
        </div>
    </div>
  )
}

export default WhyChoose