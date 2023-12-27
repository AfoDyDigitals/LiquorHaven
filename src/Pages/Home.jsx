import React from "react";
import { Hero } from "../Components/Hero";
import { Ranges } from "../Components/Ranges";
import NavBar from "../Components/NavBar";
import { Trending } from "../Components/Trending";

export const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Ranges />
      <Trending />
    </>
  );
};
