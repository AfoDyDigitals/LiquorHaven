import React, { useEffect, useState } from "react";
import ShopDropdown from "./ShopDropdown";
import CurrencyConverter from "./CurrencyConverter";
import { Link } from "react-router-dom";
import Caller from "./cards/Caller";
import img from "../assets/arrow forward black.svg";
import img2 from "../assets/arrow forward white.svg";
import ProductPrototype from "./draft/ProductPrototype";
import TrendingCard from "./cards/TrendingCard";

function Breadcrumb({ handleCurrencyChange }) {
  const [isShopDropdownVisible, setIsShopDropdownVisible] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const [searchValue, setSearchValue] = useState("");
  const [products, setProduct] = useState([]);

  function toggleShopDropdown() {
    setIsShopDropdownVisible(!isShopDropdownVisible);
  }

  const [isCurrencyConverterVisible, setIsCurrencyConverterVisible] =
    useState(false);
  function toggleCurrencyConverter() {
    setIsCurrencyConverterVisible(!isCurrencyConverterVisible);
  }

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
    <div className="font-rubik w-[100vw] overflow-none">
      {/* searchbar sm*/}
      <div className="flex justify-center items-center">
        <div className=" flex justify-between items-center  border-solid border border-[#9E9496] w-[92%] h-[35px] rounded-[4px] mt-[16px] md:hidden lg:hidden ">
          <input
            className="font-normal focus:outline-none focus:none  w-[343px] h-[16px] text-[13px] p-[15px] border-none"
            placeholder="Search over 3,000 quality drinks..."
            onChange={search}
            onClick={() => console.log(products)}
            value={searchValue}
          />
          <button className="flex justify-center items-center bg-[#A22634] w-[60px] h-[35px] rounded-l">
            <img
              className=" "
              src="../search_FILL0_wght400_GRAD0_opsz24 (1) 1.svg"
            />
          </button>
        </div>
      </div>

      {/* breadcrumb */}
      <div className=" flex justify-evenly items-center bg-[#A22634] text-white  h-[60px] mt-[20px] md:h-[60px] md:mt-[40px] md:justify-between md:pl-8 md:pr-12 lg:h-[108px] lg:mt-[60px] lg:justify-between">
        <div className="flex gap-[2px] sm:gap-[10px] justify-center items-center sm:md:ml-[32px]">
          <img
            className="w-[16px] md:w-[24px] lg:w-[32px]"
            src="../call_FILL1_wght400_GRAD0_opsz24 1.svg"
          />
          <div className="text-[13px] font-semibold md:text-[16px] lg:text-[20px]">
            <p className="hidden sm:block"> Hotline:</p>
          </div>
          <Caller />
        </div>

        <div className="hidden md:hidden lg:flex gap-[50px]">
          <Link className="font-bold" to="/">
            Home
          </Link>
          <div
            className="relative flex gap-[5px] justify-center items-center"
            onMouseEnter={toggleShopDropdown}
            onMouseLeave={toggleShopDropdown}
          >
            <div>Shop</div>
            <img
              src="../Dropdown white.svg"
              className={` ${isShopDropdownVisible ? "visible" : "visible"}`}
            />
            {isShopDropdownVisible && <ShopDropdown />}
          </div>
          <Link className="hover:font-bold" to="/about">
            About Us
          </Link>
          <p className="hover:font-bold cursor-pointer">Contact Us</p>
        </div>

        {/* currency & icons sm md */}
        <div className="flex justify-center items-center gap-1 sm:gap-[10px] h-[32px] md:gap-[15px] lg:hidden">
          <div className="flex relative justify-center items-center gap-[3px] sm:gap-[5px] ml-[40px] mr-[10px]  md: mr-[10px]">
            <div className="text-[10px] font-normal md:text-[13px]">
              {selectedCurrency}
            </div>
            {isCurrencyConverterVisible && (
              <img
                onClick={toggleCurrencyConverter}
                className="w-[6px] h-[10px]"
                src="../Dropdown white.svg"
              />
            )}
            {!isCurrencyConverterVisible && (
              <img
                onClick={toggleCurrencyConverter}
                className="w-[6px] h-[10px]"
                src="../Dropdown white.svg"
              />
            )}
            {isCurrencyConverterVisible && (
              <CurrencyConverter
                toggleCurrencyConverter={toggleCurrencyConverter}
                handleCurrencyChange={handleCurrencyChange}
              />
            )}
          </div>

          <div className="flex w-[26px] md:w-[30px]">
            <img
              className="w-[16px] h-[16px] md:w-[18px] h-[18px]"
              src="../favorite_FILL0_white.svg"
            />
            <div className="flex text-black justify-center items-center text-[8px] font-normal bg-[#E66B66]  h-[10px] w-[4px] p-1.5 rounded-full lg:text-[10px] h-[12.5px] w-[4px]">
              1
            </div>
          </div>

          <div className="flex w-[26px] md:w-[30px]">
            <Link to="/cart">
              <img
                className="w-[16px] h-[16px] md:w-[18px] h-[18px]"
                src="../shopping_cart_white.svg"
              />
            </Link>
            <div className="flex text-black justify-center items-center text-[8px] font-normal bg-[#E66B66]  h-[10px] w-[4px] p-1.5 rounded-full lg:text-[10px] h-[12.5px] w-[4px]">
              1
            </div>
          </div>
        </div>

        <div className="flex  md:gap-[12px] lg:gap-[35px]">
          <Link to="/signin">
            <button className="hidden md:flex justify-center items-center  w-[66px] h-[32px] border border-[#E7E3E4] rounded-[5px] bg-transparent  lg:rounded-[8px] w-[95px] h-[46px] ">
              <div
                className="relative font-rubik md:text-[13px] p-[10px] lg:text-[16px] p-[20px]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Sign in
                {isHovered && (
                  <span
                    className="mr-[10px]"
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "-6px",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <img src={img2} alt="Navigate Next" className="w-4 h-4" />
                  </span>
                )}
              </div>
            </button>
          </Link>

          <Link to="/signup">
            <button className="hidden md:flex justify-center items-center bg-white text-black  w-[66px] h-[32px]  rounded-[5px]  lg:rounded-[8px] w-[95px] h-[46px] ">
              <div
                className="relative font-rubik md:text-[13px] p-[10px] lg:text-[16px] p-[20px]"
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
              >
                Register
                {isHovered1 && (
                  <span
                    className="mr-[10px]"
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "-6px",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <img src={img} alt="Navigate Next" className="w-4 h-4" />
                  </span>
                )}
              </div>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col  md:hidden">
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

export default Breadcrumb;
