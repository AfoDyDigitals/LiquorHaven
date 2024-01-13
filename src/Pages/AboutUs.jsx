import React from "react";
import NavBar from "../Components/NavBar";
import WhoWeAre from "../Components/WhoWeAre";
import WhyLiquorHaven from "../Components/WhyLiquorHaven";
import MeetOurTeam from "../Components/MeetOurTeam";
import Testimonial from "../Components/Testimonial";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function AboutUs() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <div className="font-rubik w-[100vw]">
        <div className="flex justify-center items-center bg-[#E66B66] py-[24px] h-[60px] md:h-[70px] lg:h-[80px]">
          <div className="text-[20px] text-whit font-semibold">
            <Link
              to="/"
              className="hover:font-semibold text-white hover:text-[#333]"
            >
              Home
            </Link>
          </div>
          <img src="../src/assets/navigate_next.svg" />
          <div className="">About Us</div>
        </div>
        <WhoWeAre />
        <WhyLiquorHaven />
        <MeetOurTeam />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
