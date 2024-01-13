import React from "react";
import NavBar from "../Components/NavBar";
import WhoWeAre from "../Components/WhoWeAre";
import MeetOurTeam from "../Components/MeetOurTeam";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import TestimonialNew from "../Components/TestimonialNew";
import { WhyUs } from "../Components/WhyUs";

function AboutUs() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <div className="font-rubik w-[100vw]">
        <div className="flex justify-center items-center bg-[#2E2E2E] py-[24px] h-[60px] md:h-[70px] lg:h-[80px]">
          <div className="text-[20px] text-whit font-semibold">
            <Link
              to="/"
              className="hover:font-semibold text-white hover:text-[#a03633]"
            >
              Home
            </Link>
          </div>
          <img src="../src/assets/navigate_next_copy.svg" />
          <div className="text-[#E66B66]">About Us</div>
        </div>
        <WhoWeAre />
        <WhyUs />
        <MeetOurTeam />
        <TestimonialNew />
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
