// eslint-disable-next-line no-unused-vars
import React from "react";
import Breadcrumb from "./Breadcrumb";
import Header from "./Header";

function NavBar({ handleCurrencyChange }) {
  return (
    <div className="">
      <Header />
      <Breadcrumb handleCurrencyChange={handleCurrencyChange} />
    </div>
  );
}

export default NavBar;
