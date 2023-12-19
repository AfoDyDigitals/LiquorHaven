import React from 'react';
import './Footer.css';
import img from '../assets/haven.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import twitter from '../assets/twitter.png'

function Footer() {
  return (
    <div>
        <div className='flex justify-center items-center flex-col mt-[60px] p-[90px]'>
            <h2 className='text-[39px] font-bold text-[#1E1E1E] font-rubik leading-[46.8px]'>Get Exclusive Offers & Rewards</h2>
            <p className='text-[20px] font-normal font-rubik leading-[24px]'>Sign up for our members portal to receive some exclusive offer & rewards.It’s easy and free!</p>
            <form action="">
            <input type="text" placeholder="Your Email Address" />
            <button className='footerButton'>Sign in</button>
            </form>
        </div>
        <div className='flex justify-center items-center gap-[90px]'>
            <div className='flex flex-col w-[314px] h-[176px] gap-5'>
            <img src={img}  alt="Image description" className='w-[226.031px] h-12' />
            <p className='font-rubik text-[16px] font-normal leading-5 w-[242px] text-[#1E1E1E]'>3, Adel Avenue, NextGen Estate Lagos, Nigeria.</p>
            <p className='w-[130px] font-rubik text-[16px] font-normal leading-5 text-[#1E1E1E] '>+234 80197867</p>
            <p>Booking@spirithaven.com</p>
            <div className='flex items-start gap-5 pt-7'>
                <img src={facebook} alt="image description"  />
                <img src={instagram} alt="image description" />
                <img src={linkedin} alt="image description" />
                <img src={twitter} alt="image description" />
            </div>
            </div>
            <div className='flex gap-[300px]'>
                <div className='gap-[20px] flex flex-col'>
                    <p className='font-rubik text-[20px] font-bold leading-6  text-[#1E1E1E]'>About Us</p>
                    <p  className=' font-rubik text-[16px] font-normal leading-5 text-[#1E1E1E] '>Careers</p>
                    <p>Careers</p>
                    <p>Careers</p>
                    <p>Careers</p>
                </div>

                <div className='gap-[20px] flex flex-col'>
                    <p className='font-rubik text-[20px] font-bold leading-6  text-[#1E1E1E]'>Product Category</p>
                    <p>Beer</p>
                    <p>Wine</p>
                    <p>spirt</p>
                    <p>Cocktail</p>
                </div>

                <div className='gap-[20px] flex flex-col'>
                    <p className='font-rubik text-[20px] font-bold leading-6  text-[#1E1E1E]'>Quick Links</p>
                    <p>Become a Retailer</p>
                    <p>Terms of Service</p>
                    <p>Privay Policy</p>
                    <p>Terms of Service</p>
                </div>
            </div>
        </div>
        <div className='lines'></div>
        

    </div>
  )
}

export default Footer