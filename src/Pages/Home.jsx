import React from "react";
import { Hero } from "../Components/Hero";
import { Ranges } from "../Components/Ranges";
import { Trending } from "../Components/Trending";

export const Home = () => {
  return (
    <>
      <Hero />
      <Ranges />
      <Trending />
    </>
  );
};
