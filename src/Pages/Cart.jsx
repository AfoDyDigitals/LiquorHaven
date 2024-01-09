import React, { useState } from "react";
import ShoppingCartHero from "../Components/ShoppingCartHero";
import CartItem from "../Components/cartItem/CartItem";
import {
  valentino_finest6,
  valentino_finest7,
  valentino_finest8,
} from "../assets";
import Testimonial from "../Components/Testimonial";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Absolut Raspberry",
      price: 140.0,
      image: valentino_finest8,
      quantity: 0,
    },
    {
      id: 2,
      name: "Corona Extra",
      price: 19.99,
      image: valentino_finest7,
      quantity: 0,
    },
    {
      id: 3,
      name: "MXCN Cola",
      price: 29.99,
      image: valentino_finest6,
      quantity: 0,
    },
  ]);

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setProducts(updatedProducts);
  };

  const grandTotal = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div className="">
      <ShoppingCartHero />
      <div className="md:w-90% lg:w-80% lg:mx-auto lg:max-w-4xl bg-white font-rubik border border-gray-400 flex flex-col items-center justify-center mt-4 py-8">
        {products.map((product) => (
          <CartItem
            key={product.id}
            onDelete={handleDelete}
            onUpdateQuantity={handleUpdateQuantity}
            {...product}
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
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Cart;
