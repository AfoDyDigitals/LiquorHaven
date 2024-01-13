import React, { useState } from "react";
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
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };
  return (
    <div className="overflow-hidden">
      <NavBar handleCurrencyChange={handleCurrencyChange} />
      <Hero />
      <Ranges />
      <Trending selectedCurrency={selectedCurrency} />
      <WhyUs />
      <Section3 />
      <Section4 />
      <WhatsNew />
      <TestimonialNew />
      <Footer />
    </div>
  );
};
