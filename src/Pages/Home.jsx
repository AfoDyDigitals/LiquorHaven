// eslint-disable-next-line no-unused-vars
import React from "react";
import { Hero } from "../Components/Hero";
import { Ranges } from "../Components/Ranges";
import NavBar from "../Components/NavBar";
import { Trending } from "../Components/Trending";
import { WhyUs } from "../Components/WhyUs";
import { Section3 } from "../Components/Section3";
import Footer from "../Components/Footer";
import { WhatsNew } from "../Components/WhatsNew";
import Section4 from "../Components/Section4";
import TestimonialNew from "../Components/TestimonialNew";

export const Home = () => {
  return (
    <div className="overflow-hidden">
      <NavBar />
      <Hero />
      <Ranges />
      <Trending />
      <WhyUs />
      <Section3 />
      <Section4 />
      <WhatsNew />
      <TestimonialNew />
      <Footer />
    </div>
  );
};
