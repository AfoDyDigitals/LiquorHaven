// eslint-disable-next-line no-unused-vars
import React from "react";
import img from "../assets/LiquorHAVEN LOGO.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#F7D1D0]">

        <div className='flex justify-center items-center w-[100%] flex-col mt-[60px] lg:p-[90px] md:px-[90px] px-[20px] text-center md:mt-[4rem]'>
            <h1 className=' lg:text-[2.4rem]  md:text-[1.85rem] text-[1.25rem]  font-bold text-[#1E1E1E] font-rubik leading-[46.8px]'>Get Exclusive Offers & Rewards</h1>
            <p className='lg:text-[20px] md:text-[1rem] text-[0.8rem] font-normal font-rubik leading-[24px] w-[18rem] md:w-[29.5625rem] lg:w-[53.0265rem]'>Sign up for our members portal to receive some exclusive offer & rewards.It’s easy and free!</p>
            <form action="">
            <input type="text" placeholder="Your Email Address" className='email' />
            <button className='footerButton'>Sign in</button>
            </form>

      <div className="flex justify-center items-center w-[100%] flex-col lg:p-[90px] md:px-[90px] px-[20px] text-center ">
        <h1 className=" lg:text-[2.4rem]  md:text-[1.85rem] text-[1.25rem]  font-bold text-[#1E1E1E] font-rubik leading-[46.8px]">
          Get Exclusive Offers & Rewards
        </h1>
        <p className="lg:text-[20px] md:text-[1rem] text-[0.8rem] font-normal font-rubik leading-[24px] w-[18rem] md:w-[29.5625rem] lg:w-[53.0265rem]">
          Sign up for our members portal to receive some exclusive offer &
          rewards. It’s easy and free!
        </p>
        <form
          className="flex justify-center rounded-[5px] justify-between border bg-white border-sm border-[#6D6A6A] mt-[45px] w-[320px] mb-[30px] md:w-[607px] lg:w-[778px]"
          action=" "
        >
          <input
            type=" "
            className="bg-white focus:outline-none focus:none rounded-l-[5px] py-[15px] pl-[15px] w-[240px] text-[10px] font-normal md:w-[500px] text-[16px] lg:w-[680px] "
            placeholder="Your Email Address"
          />

          <button className="bg-[#E66B66] text-white rounded-r-[5px] text-[13px] font-medium md:text-[16px]">
            <Link to="/signin" className=" p-[12px]">
              Sign in
            </Link>
          </button>
        </form>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center lg:gap-[5rem] md:mb-[7rem] gap-[3rem] w-[100%] mb-[100px] px-[6%] md:flex-row md:justify-center md:w-[100%] lg:w-[100%] flex flex-col-reverse">
        <div className="flex flex-col w-[314px] h-[176px] lg:gap-5  gap-[0.9rem] md:w-[30%] lg:w-[400px]">
          <img
            src={img}
            alt="Image description"
            className="w-[226.031px] h-12 ml-[-16px] "
          />
          <p className="font-rubik lg:text-[1rem] text-[0.8125rem] font-normal leading-5 w-[242px] md:w-[200px] text-[#1E1E1E]">
            3, Adel Avenue, NextGen Estate Lagos, Nigeria.
          </p>
          <p className=" font-rubik lg:text-[1rem] text-[0.8125rem] font-normal leading-5 text-[#1E1E1E] ">
            +234 80197867
          </p>
          <p className="lg:text-[1rem] text-[0.8125rem] font-normal leading-5 text-[#1E1E1E]">
            Booking@spirithaven.com
          </p>
          <div className="flex items-start lg:gap-5 gap-[0.9rem] ">
            <img
              src={facebook}
              alt="image description"
              className="hover:cursor-pointer"
            />
            <img
              src={instagram}
              alt="image description"
              className="hover:cursor-pointer"
            />
            <img
              src={linkedin}
              alt="image description"
              className="hover:cursor-pointer"
            />
            <img
              src={twitter}
              alt="image description"
              className="hover:cursor-pointer"
            />
          </div>

        </div>
        <div className="flex lg:gap-[5rem] md:mt-0   w-[100%] justify-between h-[8.9375rem]  md:justify-between lg:h-[10rem] md:flex md:w-[70%] lg:w-[700px]">
          <div className="lg:gap-[20px] gap-[8px] flex flex-col w-[22%] md:w-[23%]">
            <p className="font-rubik lg:text-[1.25rem] font-bold md:text-[1rem] text-[0.8125rem]  leading-6  text-[#1E1E1E]">
              About Us
            </p>
            <p className="lg:text-[1rem] lg:font-normal  font-rubik text-[0.8125rem] font-normal leading-5 text-[#1E1E1E] ">
              Company Info
            </p>
            <p className="lg:text-[1rem] lg:font-normal font-rubik text-[0.8125rem] font-normal leading-5 text-[#1E1E1E] ">
              Careers
            </p>
            <p className="lg:text-[1rem] lg:font-normal font-rubik text-[0.8125rem] font-normal leading-5 text-[#1E1E1E] ">
              Reviews
            </p>
            <p className="lg:text-[1rem] lg:font-normal font-rubik text-[0.8125rem] font-normal leading-5 text-[#1E1E1E] ">
              Return Policy
            </p>
          </div>

          <div className="lg:gap-[20px] gap-[8px] flex flex-col w-[33.3%] md:w-[33.3%] lg:w-[220px]">
            <p className="font-rubik font-bold  lg:text-[20px] md:text-[1rem] text-[0.8125rem]  leading-6  text-[#1E1E1E]">
              Product Category
            </p>
            <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5 text-[#1E1E1E] ">
              Beer
            </p>
            <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5 text-[#1E1E1E] ">
              Wine
            </p>
            <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5 text-[#1E1E1E] ">
              spirt
            </p>
            <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5 text-[#1E1E1E] ">
              Cocktail
            </p>
          </div>

          <div className="lg:gap-[20px] gap-[8px] flex flex-col w-[33.3%] md:w-[28%]">
            <p className="font-rubik font-bold lg:text-[20px] md:text-[1rem] text-[0.8125rem]  leading-6  text-[#1E1E1E] ">
              Quick Links
            </p>
            <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5 text-[#1E1E1E] ">
              Become a Retailer
            </p>
            <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5 text-[#1E1E1E] ">
              Terms of Service
            </p>
            <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5 text-[#1E1E1E] ">
              Privay Policy
            </p>
            <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5 text-[#1E1E1E] ">
              Terms of Service
            </p>
          </div>
        </div>
      </div>
      <hr className="bg-black border-sm border-black "></hr>
      <p className="text-center text-[#1E1E1E] font-normal text-base py-[20px] lg:text-[1rem] lg:font-normal ">
        Copyright by SpiritHaven-Beta Group 2023
      </p>
    </div>
    </div>
  );
}

export default Footer;
