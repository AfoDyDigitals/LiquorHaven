import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import Product from "./Pages/Product";
import { SignIn } from "./Pages/SignIn";
import AboutUs from "./Pages/AboutUs";
import ResetPasswordMail from "./Pages/ResetPasswordMail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
        <ResetPasswordMail />
    </Router>
  );
}

export default App;
