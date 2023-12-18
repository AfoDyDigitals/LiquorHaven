function Section3()  {
  return (
    <>
      <div className=" md:w-[1370px] h-[310px] bg-rose-100 md:p-0">
        <div className=" mt-4 md:mt-14  md:text-left">
          <div className="text-black font-bold text-3xl pt-6 md:pt-10 font-'Rubik' leading-10 ">
            <h1 className="text-center">Why Liquor Haven?</h1>
          </div>
          <div className="text-black text-l md:text-left font-normal font-'Rubik' leading-normal" >
            <h3 className="text-center">The best selection of Whisky, Vodka and beer</h3>
          </div>
        </div> 
        <div className="flex mt-16 px-20">
        <div className="flex ">
            <div className=" mr-4 ml-10">
               <img src={'src/assets/local_shipping.png'} />
            </div> 
            <div> 
               <h2 className="mb-1 -mt-2 font-semibold text-1xl font-['Rubik'] leading-7 ">World-Wide Delivery</h2>
               <h3 className="text-l font-normal leading-normal text-black font-['Rubik']">Fast shipping and free in-<br/>store pick up</h3>
            </div>
        </div>
        <div className="flex ">
            <div className="ml-10 mr-4">
               <img src={'src/assets/lock_FILL.png'} />
            </div> 
            <div> 
               <h2 className="mb-1 -mt-2 font-semibold text-1xl font-['Rubik'] leading-7 ">Safe Packaging</h2>
               <h3 className="text-l font-normal leading-normal text-black font-['Rubik']">100% Guarantee</h3>
            </div>
        </div>
        <div className="flex ">
            <div className="ml-20 mr-4">
               <img src={'src/assets/storefront_FILL.png'} />
            </div> 
            <div> 
               <h2 className="mb-1 -mt-5 font-semibold text-1xl font-['Rubik'] leading-7 ">Trusted Marketplace</h2>
               <h3 className="text-l font-normal leading-normal text-black font-['Rubik']">Purchased guaranteed<br/>and anti-fraud protection</h3>
            </div>
        </div>
        <div className="flex">
            <div className="ml-20 mr-4">
               <img src={'src/assets/payments_FILL.png'} />
            </div> 
            <div> 
               <h2 className="mb-1 -mt-5 font-bold text-black text-1xl font-['Rubik'] leading-7 ">Competitive Prices</h2>
               <h3 className="text-l font-normal leading-normal text-black font-['Rubik']">Unbeatable convenience,<br/>service and value at best<br/> price</h3>
            </div>
        </div>
        </div>
      </div>

      <div>
         <div className="mt-10">
            <h1 className="text-center text-4xl font-bold leading-10 font-['Rubik'] ">Best Selling Drinks</h1>
            <h3 className="text-center text-xl font-normal leading-normal font-['Rubik'] ">The best selection of Whisky, Vodka and beer</h3>
         </div>
         <div className=" px-28 ">
            <img className=" w-30 h-40 mt-5" src={'src/assets/valent6.png'} />
            <h1 className=" mt-1 leading-normal font-normal font-['Rubik']">Valentino Finest</h1>
            <div className="flex w-4 h-4 ml-2">
               <img src={'src/assets/star_FILL1.png '} />
               <img src={'src/assets/star_FILL1.png '} />
               <img src={'src/assets/star_FILL1.png '} />
               <img src={'src/assets/star_FILL1.png '} />
               <img src={'src/assets/star_FILL0.png '} />
            </div>
            <h3 className="font-['Rubik'] ml-5 text-sm text-rose-900 font-semibold ">$150.00</h3>
            <div className="flex">
               <img className="w-3 h-3  mt-1" src={'src/assets/Ellipse 2.png'} />
               <h4 className="text-stone-500 font-normal leading-normal font-['Rubik']">In Stock</h4>

            </div>
         </div>
      </div>
    </>
  );
}

export default Section3;
