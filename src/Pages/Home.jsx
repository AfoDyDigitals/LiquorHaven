// eslint-disable-next-line no-unused-vars
import React from "react";
import { Hero } from "../Components/Hero";
import { Ranges } from "../Components/Ranges";
import NavBar from "../Components/NavBar";
import { Trending } from "../Components/Trending";
import { WhyUs } from "../Components/WhyUs";
import { Section3 } from "../Components/Section3";
import Footer from "../Components/Footer";
import Testimonial from "../Components/Testimonial";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Ranges />
      <Trending />
      <WhyUs />
      <Section3 />
      <Testimonial />
      <Footer />
    </>
  );
};
