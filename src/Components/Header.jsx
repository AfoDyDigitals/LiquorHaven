// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import CurrencyConverter from "./CurrencyConverter";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import ProductPrototype from "./draft/ProductPrototype";
import TrendingCard from "./cards/TrendingCard";

function Header() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [products, setProduct] = useState([]);

  function toggleSidebar() {
    setIsSidebarVisible(!isSidebarVisible);
  }
  const [isCurrencyConverterVisible, setIsCurrencyConverterVisible] =
    useState(false);
  function toggleCurrencyConverter() {
    setIsCurrencyConverterVisible(!isCurrencyConverterVisible);
  }
  function search(e) {
    setSearchValue(e.target.value);
  }
  useEffect(() => {
      searchFunction();
  }, [searchValue]);
  function searchFunction() {
    if (searchValue.length > 0) {
      setProduct((prev) => {
        let curr = [...prev];
        const value = searchValue.toLowerCase();
        if (value.length === 0) {
          return [];
        } else {
          const matches = [];
          for (let i = 0; i < ProductPrototype.length; i++) {
            const current = ProductPrototype[i];
            const currentName = current.name.toLowerCase();
            if (currentName.includes(value)) {
              matches.push(current);
            }
          }
          return matches;
        }
      });
    } else {
      setProduct([]);
    }
  }

  return (
    <div className="w-[100vw] overflow-none">
      <div className="font-rubik relative z-20 flex justify-center items-center mt-[25px]  mx-[16px] md:flex  mx-[32px] lg:flex gap-[0px] mx-[20px]  justify-between">
        <Link to="/">
          <img
            className="w-[70px] h-[24px] md:w-[146px] mr-[10px] lg:w-[260px] h-[50px]"
            src="../LiquorHAVEN LOGO_.svg"
            alt="LiquorHaven Logo"
          />
        </Link>

        {/* searchbar */}
        <div className="hidden md:flex  justify-center items-center w-[381px] h-[46px] rounded-[4px] border border-[#9E9496] lg:w-[600px] h-[62px]">
          <input
            className="text-[13px] font-normal  md:focus:outline-none focus:none w-[343px] lg:w-[600px]   p-[15px] rounded-[4px] border-none"
            placeholder="Search over 3,000 quality drinks..."
            onChange={search}
            onClick={() => console.log(products)}
            value={searchValue}
          />

          <button className="flex justify-center items-center bg-[#A22634]  rounded-l md:w-[74px] h-[46px] lg:w-[125px] h-[62px] ">
            <img
              className=" "
              src="../search_FILL0_wght400_GRAD0_opsz24 (1) 1.svg"
            />
          </button>
        </div>
        {isSidebarVisible && (
          <img
            onClick={toggleSidebar}
            className=" lg:hidden"
            src="../src/assets/menuBar.svg"
          />
        )}

        {!isSidebarVisible && (
          <img
            onClick={toggleSidebar}
            className=" lg:hidden"
            src="../menuBar.svg"
          />
        )}

        {/* currency and icons */}
        <div className="sm:hidden md:hidden lg:flex gap-[20px]  h-[32px] justify-end">
          <div className="flex justify-center items-center gap-[2px] ">
            <div className="text-[16px] font-normal">USD</div>
            {isCurrencyConverterVisible && (
              <img
                onClick={toggleCurrencyConverter}
                className="w-[8px] h-[14px]"
                src="../Dropdown.svg"
              />
            )}
            {!isCurrencyConverterVisible && (
              <img
                onClick={toggleCurrencyConverter}
                className="w-[8px] h-[14px]"
                src="../Dropdown.svg"
              />
            )}
          </div>

          <div className="flex">
            <img
              className="w-[32px] h-[32px]"
              src="../favorite_FILL0_wght400_GRAD0_opsz24 1.svg"
            />
            <div className="flex justify-center items-center text-[10px] font-normal bg-[#E66B66]  h-[12.5px] w-[5px] p-2 rounded-full">
              1
            </div>
          </div>

          <div className="flex">
            <Link to="/cart">
              <img
                className="w-[32px] h-[32px] cursor-pointer"
                src="../shopping_cart_FILL0_wght400_GRAD0_opsz24 1.svg"
              />
            </Link>
            <div className="flex justify-center items-center text-[10px] font-normal bg-[#E66B66]  h-[12.5px] w-[5px] p-2 rounded-full">
              1
            </div>
          </div>
        </div>
      </div>
      {isSidebarVisible && <SideBar toggleSidebar={toggleSidebar} />}
      {isCurrencyConverterVisible && (
        <CurrencyConverter toggleCurrencyConverter={toggleCurrencyConverter} />
      )}
      <div className="flex gap-2">
        {products.map((item, index) => {
          return (
            <TrendingCard
              key={index}
              imgURL={item.imageURL}
              name={item.name}
              price={item.price}
              onAddToCart={() => console.log(item)}
              style={{ opacity: 1 }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Header;
