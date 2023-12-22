// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import 'swiper/css/swiper.min.css';
import Swiper from 'swiper';

const Section3 = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []); 
  return (
    <>
      <div className=" w-[100%] bg-rose-100 px-[30px]  md:py-[80px] px-[88px] lg:px-[100px] ">
        <div className="text-center">
          <div className="text-center mb-[7px] text-black font-bold text-xl pt-6 font-'Rubik' leading-normal">
            Why Liquor Haven?
          </div>
          <div className="justify-center items-center text-center text-black text-[13px] font-normal font-'Rubik' leading-none md:text-base">
            The best selection of Whisky, Vodka and beer
          </div>
        </div>

        <div className="grid grid-cols-1 mt-[25px] pb-[40px] gap-[32px] md:grid-cols-2 lg:flex flex-row lg:mt-[63px] gap-[60px] ">
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/local_shipping.png"
            />
            <div>
              <div className="mb-2  font-bold text-xl font-'Rubik' leading-none">
                Worldwide Delivery
              </div>
              <div className="text-[13px] font-normal w-[180px] leading-none text-black font-'Rubik' justify-center md:w-[203px] text-base">
                Fast shipping and free in store pick up
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/lock_FILL.png"
            />

            <div>
              <div className="mb-2 font-bold text-xl font-'Rubik' leading-none ">
                Safe Packaging
              </div>
              <div className="text-[13px] font-normal w-[180px] leading-none text-black font-'Rubik' justify-center md:w-[203px] text-base">
                100% Guarantee
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/storefront_FILL.png"
            />
            <div>
              <div className="mb-2 font-bold text-xl  font-'Rubik' leading-none ">
                Trusted Marketplace
              </div>
              <div className="text-[13px] font-normal w-[180px] leading-none text-black font-'Rubik' justify-center md:w-[203px] text-base">
                Purchased guaranteed and anti-fraud protection.
              </div>
            </div>
          </div>
          <div className="flex gap-[12px] justify-center items-center ">
            <img
              className="w-[24px] md:w-[32px]  lg:w-[60px]"
              src="src/assets/payments_FILL.png"
            />
            <div>
              <div className="mb-2 font-bold text-xl font-'Rubik' leading-none">
                Competitive Prices
              </div>
              <div className="text-[13px] font-normal w-[180px] leading-none text-black font-'Rubik' justify-center md:w-[203px] text-base">
                Unbeatable convenience, service and value at best price.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center items-center ">
        <div className="mt-16 mx-auto">
          <h1 className="text-center text-3xl font-bold leading-10 font-'Rubik' mb-4">
            Best Selling Drinks
          </h1>
          <div className="text-center text-l font-normal leading-none font-'Rubik'">
            The best selection of Whisky, Vodka and beer
          </div>
        </div>

        <div className="hidden md:flex flex-wrap justify-center mt-7 gap-20 mb-5">
          <div>
            <img className=" w-40 h-50" src={"src/assets/valent6.png"} />
            <h1 className=" mt-1 ml-6 leading-normal font-normal font-'Rubik'">
              Valentino Finest
            </h1>
            <div className="flex w-4 h-4 ml-8">
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL0.png "} />
            </div>
            <div className="font-'Rubik' ml-12 text-sm text-rose-900 font-semibold ">
              $150.00
            </div>
            <div className="flex ml-9 mt-2 gap-1">
              <img
                className="w-2 h-2 mt-1.5 "
                src={"src/assets/Ellipse 2.png"}
              />
              <h4 className="text-stone-500 font-normal leading-normal font-'Rubik' text-sm">
                In Stock
              </h4>
            </div>
            <div className="w-[113px] h-[46px] ml-4 p-3 mt-2 bg-red-400 rounded-lg border border-red-400 justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-base font-medium font-'Rubik' leading-tight">
                Add To Cart
              </div>
            </div>
          </div>

          <div>
            <img
              className=" w-40 h-50"
              src={"src/assets/Best Selling - 2.png"}
            />
            <h1 className=" mt-1 ml-6 leading-normal font-normal font-'Rubik'">
              Valentino Finest
            </h1>
            <div className="flex w-4 h-4 ml-8">
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL0.png "} />
            </div>
            <div className="font-'Rubik' ml-12 text-sm text-rose-900 font-semibold ">
              $150.00
            </div>
            <div className="flex ml-9 mt-2 gap-1">
              <img
                className="w-2 h-2 mt-1.5 "
                src={"src/assets/Ellipse 2.png"}
              />
              <h4 className="text-stone-500 font-normal leading-normal font-'Rubik' text-sm">
                In Stock
              </h4>
            </div>
            <div className="w-[113px] h-[46px] ml-4 mt-2 p-3 bg-red-400 rounded-lg border border-red-400 justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-base font-medium font-'Rubik' leading-tight">
                Add To Cart
              </div>
            </div>
          </div>

          <div>
            <img className=" w-40 h-50" src={"src/assets/valent8.png"} />
            <h1 className=" mt-1 ml-6 leading-normal font-normal font-'Rubik'">
              Valentino Finest
            </h1>
            <div className="flex w-4 h-4 ml-8">
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL0.png "} />
            </div>
            <div className="font-'Rubik' ml-12 text-sm text-rose-900 font-semibold ">
              $150.00
            </div>
            <div className="flex ml-9 mt-2 gap-1">
              <img
                className="w-2 h-2 mt-1.5 "
                src={"src/assets/Ellipse 2.png"}
              />
              <h4 className="text-stone-500 font-normal leading-normal font-'Rubik' text-sm">
                In Stock
              </h4>
            </div>
            <div className="w-[113px] h-[46px] ml-4 mt-2 p-3 bg-red-400 rounded-lg border border-red-400 justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-base font-medium font-'Rubik' leading-tight">
                Add To Cart
              </div>
            </div>
          </div>

          <div>
            <img className=" w-40 h-50 " src={"src/assets/valent9.png"} />
            <h1 className=" mt-1 ml-6 leading-normal font-normal font-'Rubik'">
              Valentino Finest
            </h1>
            <div className="flex w-4 h-4 ml-8">
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL0.png "} />
            </div>
            <div className="font-'Rubik' ml-12 text-sm text-rose-900 font-semibold ">
              $150.00
            </div>
            <div className="flex ml-9 mt-2 gap-1">
              <img
                className="w-2 h-2 mt-1.5 "
                src={"src/assets/Ellipse 2.png"}
              />
              <h4 className="text-stone-500 font-normal leading-normal font-'Rubik' text-sm">
                In Stock
              </h4>
            </div>
            <div className="w-[113px] h-[46px] ml-4 mt-2 p-3 bg-red-400 rounded-lg border border-red-400 justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-base font-medium font-'Rubik' leading-tight">
                Add To Cart
              </div>
            </div>
          </div>

          <div>
            <img className=" w-40 h-50 " src={"src/assets/valent10.png"} />
            <h1 className=" mt-1 ml-6 leading-normal font-normal font-'Rubik'">
              Valentino Finest
            </h1>
            <div className="flex w-4 h-4 ml-8">
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL0.png "} />
            </div>
            <div className="font-'Rubik' ml-12 text-sm text-rose-900 font-semibold ">
              $150.00
            </div>
            <div className="flex ml-9 mt-2 gap-1">
              <img
                className="w-2 h-2 mt-1.5 "
                src={"src/assets/Ellipse 2.png"}
              />
              <h4 className="text-stone-500 font-normal leading-normal font-'Rubik' text-sm">
                In Stock
              </h4>
            </div>
            <div className="w-[113px] h-[46px] ml-4 mt-2 p-3 bg-red-400 rounded-lg border border-red-400 justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-base font-medium font-'Rubik' leading-tight">
                Add To Cart
              </div>
            </div>
          </div>
          <div className="swiper-wrapper">
            <div className="swiper-slider">
            <div>
            <img className=" w-40 h-50" src={"src/assets/valent6.png"} />
            <h1 className=" mt-1 ml-6 leading-normal font-normal font-'Rubik'">
              Valentino Finest
            </h1>
            <div className="flex w-4 h-4 ml-8">
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL1.png "} />
              <img src={"src/assets/star_FILL0.png "} />
            </div>
            <div className="font-'Rubik' ml-12 text-sm text-rose-900 font-semibold ">
              $150.00
            </div>
            <div className="flex ml-9 mt-2 gap-1">
              <img
                className="w-2 h-2 mt-1.5 "
                src={"src/assets/Ellipse 2.png"}
              />
              <h4 className="text-stone-500 font-normal leading-normal font-'Rubik' text-sm">
                In Stock
              </h4>
            </div>
            <div className="w-[113px] h-[46px] ml-4 p-3 mt-2 bg-red-400 rounded-lg border border-red-400 justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-base font-medium font-'Rubik' leading-tight">
                Add To Cart
              </div>
            </div>
          </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;
