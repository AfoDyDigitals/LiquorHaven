import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div>
        <div className='flex justify-center items-center flex-col mt-[98px]'>
            <h2 className='text-[39px] font-bold text-[#1E1E1E] font-rubik leading-[46.8px]'>Get Exclusive Offers & Rewards</h2>
            <p className='text-[20px] font-normal font-rubik leading-[24px]'>Sign up for our members portal to receive some exclusive offer & rewards.It’s easy and free!</p>
            <form action="">
            <input type="text" placeholder="Your Email Address" />
            <button className='footerButton'>sign in</button>
            </form>
        </div>

    </div>
  )
}

export default Footer