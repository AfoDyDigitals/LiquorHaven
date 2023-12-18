import React from 'react'

function Breadcrumb() {
  return (
    <div className='flex justify-center items-center h-[108px] bg-[#A22634] mt-[60px] text-white justify-evenly lg:'>
        <div className='flex gap-[10px] justify-center items-center '>
            <img src='../src/assets/call_FILL1_wght400_GRAD0_opsz24 1.svg' />
            <div className='text-[20px] font-semibold'>Hotline:</div>
            <div className='text-[20px] font-normal'>+234 80197867</div>
        </div>

        <div className='flex gap-[50px]'>
            <div>Home</div>
            <div className='flex gap-[5px] justify-center items-center'>
                <div>Shop</div>
                <img src='../src/assets/Dropdown white.svg' />
            </div>
            <div>About Us</div>
            <div>Contact Us</div>
        </div>

        <button className='flex justify-center items-center border border-[#E7E3E4] rounded-[8px] p-[20px] h-[46px] bg-transparent'>
            Sign in
        </button>
    </div>
  )
}

export default Breadcrumb