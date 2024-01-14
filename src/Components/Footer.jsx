// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import img from "../assets/LiquorHAVEN LOGO.png";
import facebook from "../assets/facebook-circle-fill.svg";
import instagram from "../assets/instagram-fill.svg";
import linkedin from "../assets/linkedin-box-fill.svg";
import twitter from "../assets/twitter-fill.svg";
import { Link } from "react-router-dom";


function Footer() {

  return (
    <div className="bg-[#2E2E2E] text-cyan-50 relative">

      <a href="#" className='scroll-smooth'>
        <button
          className="absolute top-0 scroll mt-[10px] md:mt-9 lg:mt-16 right-6 md:right-10 lg:right-12 w-[25px] h-[25px] md:w-[45px] md:h-[45px] lg:w-[50px] lg:h-[50px] bg-[#FDF0F0] rounded-full items-center flex justify-center"
        >
          <img
            src="./src/assets/arrow_forward_ios_FILL0_wght400_GRAD0_opsz24 (1) 1.svg"
            alt="BackToTop-button"
            className="w-[24px] h-[24px]"
          />
        </button>
      </a>


      <div className="flex justify-center items-center w-[100%] flex-col pt-[32px] lg:pt-[64px] md:px-[90px] px-[20px] text-center md:pt-[42px]">
        <div className="flex justify-center items-center w-[100%] flex-col text-center ">
          <h1 className=" lg:text-[2.4rem]  md:text-[1.85rem] text-[1.25rem]  font-bold font-rubik leading-[46.8px]">
            Get Exclusive Offers & Rewards
          </h1>
          <p className="lg:text-[20px] md:text-[1rem] text-[0.8rem] font-normal font-rubik leading-[24px] w-[18rem] md:w-[29.5625rem] lg:w-[53.0265rem]">
            Sign up for our members portal to receive some exclusive offer &
            rewards. It’s easy and free!
          </p>
          <form
            className="flex justify-center rounded-[5px] md:justify-between border bg-white border-sm border-[#6D6A6A] mt-[45px] w-[320px] mb-[30px] md:w-[607px] lg:w-[778px]"
            action=" "
          >
            <input
              type=" "
              className="bg-white focus:outline-none focus:none rounded-l-[5px] py-[15px] pl-[15px] w-[240px] text-[10px] font-normal md:w-[500px] md:text-[16px] lg:w-[680px] "
              placeholder="Your Email Address"
            />

            <button className="bg-[#E66B66] text-white rounded-r-[5px] text-[13px] font-medium md:text-[16px]">
              <Link to="/signin" className=" p-[12px]">
                Sign in
              </Link>
            </button>
          </form>
        </div>
        <div className="lg:flex lg:justify-center lg:items-center lg:gap-[5rem] md:mb-[7rem] gap-[3rem] w-[100%] mb-[100px] md:flex-row md:justify-center md:w-[100%] lg:w-[100%] flex flex-col-reverse">
          <div className="flex flex-col w-[314px] h-[176px] lg:gap-5 items-start gap-[0.9rem] md:w-[30%] lg:w-[400px]">
            <img
              src={img}
              alt="Image description"
              className="w-[226.031px] h-12 ml-[-16px] "
            />
            <p className="font-rubik lg:text-[1rem] text-[0.8125rem] font-normal leading-5 text-start w-[242px] md:w-[200px] ">
              3, Adel Avenue, NextGen Estate Lagos, Nigeria.
            </p>
            <p className=" font-rubik lg:text-[1rem] text-[0.8125rem] font-normal leading-5 ">
              +234 80197867
            </p>
            <p className="lg:text-[1rem] text-[0.8125rem] font-normal leading-5 ">
              Booking@spirithaven.com
            </p>
            <div className="flex items-start lg:gap-5 gap-[0.9rem] ">
              <img
                src={facebook}
                alt="facebook"
                className="hover:cursor-pointer"
              />
              <img
                src={instagram}
                alt="instagram"
                className="hover:cursor-pointer"
              />
              <img
                src={linkedin}
                alt="linkedin"
                className="hover:cursor-pointer"
              />
              <img
                src={twitter}
                alt="twitter"
                className="hover:cursor-pointer w-[25px] h-[25px] lg:w-[33px] lg:h-[33px]"
              />
            </div>

          </div>
          <div className="flex lg:gap-[5rem] md:mt-0 w-[100%] justify-between h-[8.9375rem]  lg:h-[10rem] md:flex md:w-[70%] lg:w-[700px]">
            <div className="lg:gap-[20px] gap-[8px] flex flex-col w-[22%] md:w-[20%] text-start items-start">
              <p className="font-rubik lg:text-[1.25rem] font-bold md:text-[1rem] text-[0.8125rem]  leading-6 ">
                About Us
              </p>
              <p className="lg:text-[1rem] lg:font-normal  font-rubik text-[0.8125rem] font-normal leading-5 ">
                Company Info
              </p>
              <p className="lg:text-[1rem] lg:font-normal font-rubik text-[0.8125rem] font-normal leading-5  ">
                Careers
              </p>
              <p className="lg:text-[1rem] lg:font-normal font-rubik text-[0.8125rem] font-normal leading-5  ">
                Reviews
              </p>
              <p className="lg:text-[1rem] lg:font-normal font-rubik text-[0.8125rem] font-normal leading-5  ">
                Return Policy
              </p>
            </div>

            <div className="lg:gap-[20px] gap-[8px] flex flex-col w-[33.3%] md:w-[30.3%] text-start lg:w-[220px]  items-start">
              <p className="font-rubik font-bold  lg:text-[20px] md:text-[1rem] text-[0.8125rem]  leading-6 ">
                Product Category
              </p>
              <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5  ">
                Beer
              </p>
              <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5  ">
                Wine
              </p>
              <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5 ">
                spirt
              </p>
              <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5">
                Cocktail
              </p>
            </div>

            <div className="lg:gap-[20px] gap-[8px] flex flex-col w-[33.3%] md:w-[25%] text-start items-start">
              <p className="font-rubik font-bold lg:text-[20px] md:text-[1rem] text-[0.8125rem]  leading-6 ">
                Quick Links
              </p>
              <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5 ">
                Become a Retailer
              </p>
              <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5 ">
                Terms of Service
              </p>
              <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5 ">
                Privay Policy
              </p>
              <p className="lg:text-[1rem] lg:font-normal text-[0.8125rem] font-normal leading-5 ">
                Terms of Service
              </p>
            </div>
          </div>
        </div>
        <hr className="bg-black border-sm border-black "></hr>
        <p className="text-center font-normal text-base py-[20px] lg:text-[1rem] lg:font-normal ">
          Copyright by SpiritHaven-Beta Group 2023
        </p>
      </div>
    </div>
  );
}

export default Footer;
