import Footer from './Components/Footer'
import { useState } from "react";
import { Home } from "./Pages/Home";
import Section3 from "./Components/Section3";
import AboutUs from "./pages/AboutUs";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <>

    <Home />
    <Section3 />
    <AboutUs />
    <Testimonial />
    <Footer />
    </>
  )    
}

export default App;
