import React from 'react'

function CurrencyConverter() {
  return (
    <div className='hidden bg-amber-500 flex flex-col justify-start items-center w-[150px]  pl-[10px] pr-[23px] py-[10px] gap-[5px]  md:w-[200px] gap-[15px] ml-[18px] mr-[50px] lg:w-[200px] gap-[25px] pl-[16px] mr-[87px]'>
        <div className='flex justify-center items-center gap-[20px]'>
            <img className='w-[32px] m-[10px]' src="../src/assets/canada-flag-circular-17758 1.png" />
            <div className='text-[16px] font-normal'>CAD</div>
        </div>
        <div className='flex justify-center items-center gap-[20px]'>
            <img className='w-[32px] m-[10px]' src="../src/assets/united-kingdom-flag-icon 1.png" />
            <div className='text-[16px] font-normal'>GBP</div>
        </div>
        <div className='flex justify-center items-center gap-[20px]'>
            <img className='w-[32px] m-[10px]' src="../src/assets/japan-flag-icon 1.png" />
            <div className='text-[16px] font-normal'>JPY</div>
        </div>
        <div className='flex justify-center items-center gap-[20px]'>
            <img className='w-[32px] m-[10px]' src="../src/assets/united-states-flag-icon 1.png" />
            <div className='text-[16px] font-normal'>USD</div>
        </div>
        <div className='flex justify-center items-center gap-[20px]'>
            <img className='w-[32px] m-[10px]' src="../src/assets/australia-flag-icon 1.png" />
            <div className='text-[16px] font-normal'>AUD</div>
        </div>
        
    </div>
  )
}

export default CurrencyConverter