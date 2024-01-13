// eslint-disable-next-line no-unused-vars
import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import Section3 from "./Components/Section3";
import Account from './Components/Account';


function App() {
  return (
    <>

    <Home />
    <Section3 />
    <Footer />
    <Account />
    </>
  )
};
    

    
  


import Product from "./Pages/Product";
import { SignIn } from "./Pages/SignIn";
import AboutUs from "./Pages/AboutUs";
import ResetPasswordCode from "./Pages/ResetPasswordCode";
import ResetPasswordMail from "./Pages/ResetPasswordMail";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgotpassword" element={<ResetPasswordMail />} />
        <Route path="/forgotpassword/code" element={<ResetPasswordCode />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );

}

export default App;
