import React from "react";
import { Hero } from "../Components/Hero";
import { Ranges } from "../Components/Ranges";
import NavBar from "../Components/NavBar";
import { Trending } from "../Components/Trending";
import { WhyUs } from "../Components/WhyUs";
import { Section3 } from "../Components/Section3";
import Footer from "../Components/Footer";
import Testimonial from "../Components/Testimonial";
import { WhatsNew } from "../Components/WhatsNew";
import Section4 from "../Components/Section4";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Hero />
      <Ranges />
      <Trending />
      <WhyUs />
      <Section3 />
      <Testimonial />
      <Section4 />
      <WhatsNew />
      <Footer />
    </div>
  );
};
