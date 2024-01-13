// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ShoppingCartHero from "../Components/ShoppingCartHero";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import CartItem from "../Components/cartItem/CartItem";

// eslint-disable-next-line react/prop-types
const Cart = ({ location }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedItems);
  }, []);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    const scrollTarget = location?.state?.scrollTarget;
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleDeleteItem = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleIncrement = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleDecrement = (id) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  return (
    <div id="cartItems" className="cart-items overflow-hidden">
      <ShoppingCartHero />
      <div className="md:w-90% lg:w-80% lg:mx-auto lg:max-w-4xl bg-white font-rubik border border-gray-400 flex flex-col items-center justify-center mt-4 py-8 ">
        {cartItems.map((product, index) => (
          <div key={index}>
            <CartItem
              product={product}
              handleDeleteItem={handleDeleteItem}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
            <div className="bg-gray-300 w-[80%] h-[2px] max-w-[700px] mx-auto"></div>
          </div>
        ))}
        <div className="xsm:w-[84%] md:w-[70%] md:max-w-[300px] bg-rose-200 rounded-lg mt-8 p-4 md-[p-8] border-none  max-w-[412px] border ">
          <div className="flex items-center justify-between leading-[120%] text-[16px] font-normal">
            <div>SubTotal </div>
            <div>
              $
              {cartItems
                .reduce(
                  (total, item) =>
                    total +
                    (item.price
                      ? parseFloat(item.price.replace("$", "")) * item.quantity
                      : 0),
                  0
                )
                .toFixed(2)}
            </div>
          </div>
        </div>
        <div className="w-[90%] md:w-full text-black text-[16px] leading-[120%] md:text-[20px] font-medium mx-4 my-4 text-center">
          Shipping and taxes calculated at checkout
        </div>
        <Link to="/checkout">
          <div className="w-full md:w-[260px] cursor-pointer max-w-[368px] bg-[#B85652]   text-red-50 hover:text-[#000] hover:bg-rose-200  rounded-lg p-4 justify-center items-center inline-flex">
            <p className="text-lg md:text-[20px]  font-medium">Checkout</p>
          </div>
        </Link>
      </div>
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Cart;
