import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading heading="Travel News for you" subheading='write something' />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div className="" data-aos="fade-left" data-aos-anchor-placement="top-center">
          {/* use map save in data.json */}
          <NewsCard
            image="/images/n1.jpg"
            title = "Top 10 places to visit in Australia"
            date="15 November 2025"
          />
        </div>
        <div className="" data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="100">
          <NewsCard
            image="/images/n2.jpg"
            title = "Top 10 places to visit in Tokyo"
            date="15 November 2025"
            />
        </div>
        <div className="" data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
          <NewsCard
            image="/images/n3.jpg"
            title = "Top 10 places to visit in USA"
            date="15 November 2025"
          />
        </div>
        <div className="" data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="300">
          <NewsCard
            image="/images/n4.jpg"
            title = "Top 10 places to visit in Europe"
            date="15 November 2025"
          />     
        </div>
      </div>
    </div>
  )
}

export default News