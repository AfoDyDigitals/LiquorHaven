import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom/index.js";
import { Home } from "./Pages/Home";
import Product from "./Pages/Product";
import { SignIn } from "./Pages/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
