// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ShoppingCartHero from "../Components/ShoppingCartHero";
import CartItem from "../Components/cartItem/CartItem";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { products } from "../Components/constants";
import TestimonialNew from "../Components/TestimonialNew";

// eslint-disable-next-line react/prop-types
const Cart = ({ location }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedItems);
  }, []);
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
    // Update cart items after deleting an item
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    // Update cart items after updating quantity
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cart", JSON.stringify(updatedItems));
  };

  const grandTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // eslint-disable-next-line no-unused-vars
  const handleAddToCart = (productId) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.id === productId);

    if (existingProduct) {
      // If the product is already in the cart, update its quantity
      const updatedItems = cartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedItems);
      localStorage.setItem("cart", JSON.stringify(updatedItems));
    } else {
      // If the product is not in the cart, add it
      const productToAdd = products.find((product) => product.id === productId);

      if (productToAdd) {
        const updatedItems = [...cartItems, { ...productToAdd, quantity: 1 }];
        setCartItems(updatedItems);
        localStorage.setItem("cart", JSON.stringify(updatedItems));
      }
    }
  };

  return (
    <div id="cartItems" className="cart-items">
      <ShoppingCartHero />
      <div className="md:w-90% lg:w-80% lg:mx-auto lg:max-w-4xl bg-white font-rubik border border-gray-400 flex flex-col items-center justify-center mt-4 py-8 ">
        {cartItems.map((product, index) => (
          <CartItem
            key={`${product.id}- ${index}`}
            id={product.id}
            name={product.name}
            price={parseFloat(product.price.replace("$", ""))}
            image={product.imgURL}
            quantity={product.quantity}
            onDelete={handleDeleteItem}
            onUpdateQuantity={handleUpdateQuantity}
          />
        ))}
        <div className="xsm:w-[84%] md:w-[70%] md:max-w-[300px] bg-rose-200 rounded-lg mt-4 p-4 md-[p-8] border-none  max-w-[412px]">
          <div className="flex items-center justify-between leading-[120%] text-[16px] font-normal">
            <div>SubTotal </div>
            <div>${grandTotal.toFixed(2)}</div>
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
      <TestimonialNew />
      <Footer />
    </div>
  );
};

export default Cart;
