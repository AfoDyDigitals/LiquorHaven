import React from "react";
import { Hero } from "../Components/Hero";
import { Ranges } from "../Components/Ranges";
import NavBar from "../Components/NavBar";
import { Trending } from "../Components/Trending";
import Section3 from "../Components/Section3";
import Footer from "../Components/Footer";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Ranges />
      <Trending />
      <Section3 />
      <Footer />
    </>
  );
};
