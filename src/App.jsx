import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import Product from "./Pages/Product";
import { SignIn } from "./Pages/SignIn";
import AboutUs from "./Pages/AboutUs";
import ResetPasswordCode from "./Pages/ResetPasswordCode";
import ResetPasswordMail from "./Pages/ResetPasswordMail";
import Checkout from "./Pages/Checkout";
import Cart from "./Pages/Cart";
import Section4 from "./Components/Section4";

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
      <Section4 />
    </Router>
  );
}

export default App;
