// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ShoppingCartHero from "../Components/ShoppingCartHero";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../Components/cartItem/CartItem";
import TestimonialNew from "../Components/TestimonialNew";

// eslint-disable-next-line react/prop-types
const Cart = ({ location }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(Array.isArray(storedItems) ? storedItems : []);
  }, []);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  useEffect(() => {
    const scrollTarget = location?.state?.scrollTarget;
    if (scrollTarget) {
      const element = document.getElementById(scrollTarget);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleDeleteItem = (id, name) => {
    const updatedItems = cartItems.filter(
      (item) => item.id !== id || item.name !== name
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleIncrement = (id, name) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.name === name
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleDecrement = (id, name) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id && item.name === name && item.quantity >= 1
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleCheckout = () => {
    // Calculate total price in cents to avoid floating-point issues
    const totalCents = cartItems.reduce(
      (total, item) =>
        total +
        (item.price
          ? Math.round(parseFloat(item.price.replace("$", "")) * 100) *
            item.quantity
          : 0),
      0
    );

    // Convert the total back to dollars and cents format
    const totalPrice = (totalCents / 100).toFixed(2);

    // Update local storage with the updated cart items and total price
    const updatedCart = { cartItems, totalPrice };
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Redirect to the checkout page
    navigate("/checkout");
  };

  return (
    <div id="cartItems" className="cart-items overflow-hidden">
      <ShoppingCartHero />
      <div className="md:w-90% lg:w-80% lg:mx-auto lg:max-w-4xl bg-white font-rubik border border-gray-400 flex flex-col items-center justify-center mt-4 py-8 ">
        {Array.isArray(cartItems) &&
          cartItems.map((product, index) => (
            <div key={index}>
              <CartItem
                product={product}
                handleDeleteItem={(id, name) => handleDeleteItem(id, name)}
                handleIncrement={(id, name) => handleIncrement(id, name)}
                handleDecrement={(id, name) => handleDecrement(id, name)}
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
        <Link to="/checkout" onClick={handleCheckout}>
          <div className="w-full md:w-[260px] cursor-pointer max-w-[368px] bg-[#B85652]   text-red-50 hover:text-[#000] hover:bg-rose-200  rounded-lg p-4 justify-center items-center inline-flex">
            <p className="text-lg md:text-[20px]  font-medium">Checkout</p>
          </div>
        </Link>
      </div>
      <TestimonialNew />
      <Footer />
    </div>
  );
};

export default Cart;
