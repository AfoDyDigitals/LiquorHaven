import React from 'react'
import TestimonialCard from './TestimonialCard'

function Testimonial() {
    const imageUrl='/testimonial-red-bg.jpg'
    const containerStyle= {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};
  return (
    <div className='hidden md:hidden lg:block w-full h-[762px] mt-[77px] font-rubik' style={containerStyle}>
        <div className='text-[39px] text-white font-bold text-center pt-[85px] md:pt-[72px] lg:pt-[127px] '>What our customers are saying</div>
        <div className='text-[20px] text-white font-normal text-center'>The best selection of Whisky, Vodka and beer</div>
        <div className='flex gap-[15px] mx-[39px]'>
            <TestimonialCard />
            <TestimonialCard />
            <TestimonialCard />
        </div>
    </div>
  )
}

export default Testimonial