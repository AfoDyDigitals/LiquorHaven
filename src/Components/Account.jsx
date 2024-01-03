import React from 'react'
import img from '../assets/account icon.png'

function Account() {
  return (
    <div className='bg-[#F9F2F3] w-[100%] h-[93.75rem]'>
        <div className='flex flex-col gap-[15px] items-center'>
            <img src={img} alt="image description" className='w-[64px] h-[64px]'  />
            <h1 className='text-[39px] font-bold leading-[46.8px]'>Create your account</h1>
            <p className='text-20px font-bold leading-[24px]'>These information will help us complete your request</p>
        </div>

    </div>
  )
}

export default Account