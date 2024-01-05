import React from 'react'
import  { useState } from 'react';
import img from '../assets/account icon.png'
import line from '../assets/line.png'
import path from '../assets/path .png'
import facebook from '../assets/facebook2.png'
import twitter from '../assets/twitter2.png'
import pass from '../assets/passline.png'

function Account() {
    const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className='bg-[#F9F2F3] w-[100%] h-[93.75rem]'>
        <div className='lg:w-[1000px] lg:h-[1127px] md:w-[500px] md:h-[800px] w-[300px] h-[800px] bg-white mx-auto  border border-solid border-[#FDF0F0] shadow-md '>
        <div className='flex flex-col lg:gap-[15px] gap-[9px] items-center'>
            <img src={img} alt="image description" className='lg:w-[64px] lg:h-[64px] w-[60px] h-[59px] mt-[30px]'  />
            <h1 className='lg:text-[39px] md:text-[32px] text-[24px] font-bold lg:leading-[46.8px] md:leading-[38px] leading-[28px]'>Create your account</h1>
            <p className='font-rubik lg:text-20px md:text-[14px] text-[10px] lg:font-bold font-normal lg:leading-[24px] leading-[12px]'>These information will help us complete your request</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='lg:w-[807px] lg:h-[99px] md:w-[398px] md:h-[65px] w-[258px]  flex flex-col justify-center lg:gap-[10px] lg:mt-[40px] mt-[20px] gap-[10px]'>
                <p className='font-rubik text-[#000] lg:text-[20px] md:text-[16px] text-[13px] md:font-medium font-bold lg:leading-6 leading-[15px] md:leading-[19px]'>First name</p>
                <input type="text" placeholder='Enter First name' className='placeholder:text-[#847B7D] placeholder:text-[13px] md:placeholder:text-[16px] px-4 rounded bg-[#F7F6F6] lg:h-[65px] h-[42px] md:h-[65px]'/>
            </div>
            <div className='lg:w-[807px] lg:h-[99px] md:w-[398px] md:h-[65px] w-[258px] lg:mt-[30px] md:mt-[30px] mt-[20px] flex flex-col justify-center gap-[10px]'>
                <p className='font-rubik text-[#000] lg:text-[20px] md:text-[16px] text-[13px] md:font-medium font-bold lg:leading-6 leading-[15px] md:leading-[19px]'>Last name</p>
                <input type="text" placeholder='Enter Last name' className='placeholder:text-[#847B7D] placeholder:text-[13px] md:placeholder:text-[16px] px-4 rounded bg-[#F7F6F6] lg:h-[65px] h-[42px] md:h-[65px]'/>
            </div>
            <div className='lg:w-[807px] lg:h-[99px] md:w-[398px] md:h-[65px] w-[258px]  lg:mt-[30px] mt-[20px]  flex flex-col justify-center gap-[10px]'>
                <p className='font-rubik text-[#000] lg:text-[20px] md:text-[16px] text-[13px] md:font-medium font-bold lg:leading-6 leading-[15px] md:leading-[19px]'>Email address</p>
                <input type="email" placeholder='Enter Email address' className='placeholder:text-[#847B7D] placeholder:text-[13px] md:placeholder:text-[16px] px-4 rounded bg-[#F7F6F6] h-[42px] md:h-[65px]'/>
            </div>
            <div className='lg:w-[807px] lg:h-[99px] md:w-[398px] md:h-[65px] w-[258px]  lg:mt-[30px] mt-[20px] flex flex-col justify-center gap-[10px]'>
                <p className='font-rubik text-[#000] lg:text-[20px] md:text-[16px] text-[13px] md:font-medium font-bold lg:leading-6 leading-[15px] md:leading-[19px]'>Phone number</p>
                <input type="tel" placeholder='Enter Phone number' className='placeholder:text-[#847B7D] placeholder:text-[13px] md:placeholder:text-[16px] px-4 rounded bg-[#F7F6F6] h-[42px] md:h-[65px]'/>
            </div>
            <div className='lg:w-[807px] lg:h-[99px] md:w-[398px] md:h-[65px] w-[258px]  lg:mt-[30px] mt-[20px] flex flex-col justify-center lg:gap-[10px] gap-[7px]'>
                <p className='font-rubik text-[#000] lg:text-[20px] md:text-[16px] text-[13px] md:font-medium font-bold lg:leading-6 leading-[15px] md:leading-[19px]'>Password</p>
                <div className='relative'>
                <input type={passwordVisible ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} id='password' placeholder='Enter password' className='placeholder:text-[#847B7D] placeholder:text-[13px] md:placeholder:text-[16px] px-4 rounded bg-[#F7F6F6] h-[42px] lg:h-[65px] w-full'/>
                <span className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm cursor-pointer md:text-[#847B7D] text-[#847B7D] md:text-[15px] md:font-normal' onClick={togglePasswordVisibility}>{passwordVisible ? 'Hide' : 'Show'}</span>
                </div>
                <img src={pass} alt="" />
            </div>
        </div>
        <div className='flex  mt-[20px] md:mt-[20px] lg:mt-[70px] justify-around items-center flex-col-reverse md:flex-row  '>
            <div className='flex gap-5 mt-[10px]  items-center'>
            <p className='lg:text-[16px] md:text-[14px] text-[11px] font-normal leading-[13px]'>Already have an account?</p>
            <button className='text-[#E66B66] lg:text-[20px] md:text-[16px] font-medium'>Sign in</button>
            </div>
            <div >
                <button className='lg:w-[140px]  lg:p-3 p-2 rounded-lg border border-solid border-[#E66B66] bg-[#E66B66] font-medium text-[#fff] leading-6 lg:text-[16px] text-[13px]'>Create Account</button>
            </div>
        </div>
        <div>
            <div className='flex lg:gap-[40px] gap-[10px] items-center justify-center lg:mt-[35px] mt-[10px]'>
                <img src={line} alt="image description" className='lg:w-[243px] lg:h-[13px] md:h-[13px] w-[63px] md:w-[100px]'/>
                <p className='text-[#7C7C7C] lg:text-[20px] md:text-[15px] text-[12px] font-normal leading-[14px]'>Or Sign Up with</p>
                <img src={line} alt="image description" className='lg:w-[243px] lg:h-[13px] md:h-[13px] w-[63px] md:w-[100px]'/>
            </div>
            <div className='flex lg:gap-[57px] gap-[20px] md:gap-[40px] items-center justify-center lg:mt-[21px] mt-[10px] md:mt-[15px]'>
                <img src={path} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
            </div>
            <div className='flex lg:gap-[15px] gap-[5px] items-center justify-center mt-[30px] lg:mt-[15px] md:mt-[40px] '>
                <p className='text-[12px] md:text-[14px] lg:text-[16px] md:font-medium font-normal leading-[14px]'>Want to make a quick order?</p>
                <button className='text-[#E66B66] text-[12px] lg:text-[16px] md:text-[14px] md:font-medium font-medium leading-[14px]'>Order as a Guest</button>
            </div>
        </div>
        </div>
        <div className=' flex justify-center items-center lg:gap-[250px] md:gap-[150px] gap-[40px] lg:mt-[20px] md:mt-[20px] mt-[20px]'>
            <p className='lg:text-[14px] md:text-[13px] text-[10px] font-normal'>All rights reserved © 2024 LiquorHaven</p>
            <p className='lg:text-[14px] md:text-[13px] text-[10px] font-normal '>Privacy | Terms</p>
        </div>

    </div>
  )
}

export default Account