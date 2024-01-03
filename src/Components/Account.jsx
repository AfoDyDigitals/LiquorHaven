import React from 'react'
import img from '../assets/account icon.png'
import line from '../assets/line.png'
import path from '../assets/path .png'
import facebook from '../assets/facebook2.png'
import twitter from '../assets/twitter2.png'

function Account() {
  return (
    <div className='bg-[#F9F2F3] w-[100%] h-[93.75rem]'>
        <div className='w-[1000px] h-[1127px] bg-white mx-auto border border-solid border-[#FDF0F0] shadow-md'>
        <div className='flex flex-col gap-[15px] items-center'>
            <img src={img} alt="image description" className='w-[64px] h-[64px]'  />
            <h1 className='text-[39px] font-bold leading-[46.8px]'>Create your account</h1>
            <p className='text-20px font-bold leading-[24px]'>These information will help us complete your request</p>
        </div>
        <div>
            <div className='w-[807px] h-[99px] flex flex-col justify-center gap-[10px]'>
                <p className='font-rubik text-[#000] text-[20px] font-medium leading-6'>First name</p>
                <input type="text" placeholder='Enter First name' className='placeholder:text-[#847B7D] placeholder:text-[16px] placeholder:pl-[21px] rounded bg-[#F7F6F6] h-[65px]'/>
            </div>
            <div className='w-[807px] h-[99px] flex flex-col justify-center gap-[10px]'>
                <p className='font-rubik text-[#000] text-[20px] font-medium leading-6'>Last name</p>
                <input type="text" placeholder='Enter Last name' className='placeholder:text-[#847B7D] placeholder:text-[16px] placeholder:pl-[21px] rounded bg-[#F7F6F6] h-[65px]'/>
            </div>
            <div className='w-[807px] h-[99px] flex flex-col justify-center gap-[10px]'>
                <p className='font-rubik text-[#000] text-[20px] font-medium leading-6'>Email address</p>
                <input type="text" placeholder='Enter Email address' className='placeholder:text-[#847B7D] placeholder:text-[16px] placeholder:pl-[21px] rounded bg-[#F7F6F6] h-[65px]'/>
            </div>
            <div className='w-[807px] h-[99px] flex flex-col justify-center gap-[10px]'>
                <p className='font-rubik text-[#000] text-[20px] font-medium leading-6'>Phone number</p>
                <input type="text" placeholder='Enter Phone number' className='placeholder:text-[#847B7D] placeholder:text-[16px] placeholder:pl-[21px] rounded bg-[#F7F6F6] h-[65px]'/>
            </div>
            <div className='w-[807px] h-[99px] flex flex-col justify-center gap-[10px]'>
                <p className='font-rubik text-[#000] text-[20px] font-medium leading-6'>Password</p>
                <input type="text" placeholder='Enter password' className='placeholder:text-[#847B7D] placeholder:text-[16px] placeholder:pl-[21px] rounded bg-[#F7F6F6] h-[65px]'/>
            </div>
        </div>
        <div className='flex gap-5'>
            <p className='text-[16px] font-normal'>Already have an account?</p>
            <button className='text-[#E66B66] text-[20px] font-medium'>Sign in</button>
            <div>
                <button className='w-[140px] p-3 rounded-lg border border-solid border-[#E66B66] bg-[#E66B66] font-medium text-[#fff] leading-6 text-[16px]'>Create Account</button>
            </div>
        </div>
        <div>
            <div className='flex gap-[40px]'>
                <img src={line} alt="image description"  />
                <p className='text-[#7C7C7C] text-[20px] font-normal'>Or Sign Up with</p>
                <img src={line} alt="image description" />
            </div>
            <div>
                <img src={path} alt="" />
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
            </div>
            <div>
                <p>Want to make a quick order?</p>
                <button>Order as a Guest</button>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Account