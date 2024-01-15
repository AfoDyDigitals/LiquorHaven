import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import {
  delivery_truck,
  heart_icon,
  local_shipping,
  maltell1,
  maltell2,
} from "../assets";
import { WhyUs } from "../Components/WhyUs";
import TrendingCard from "../Components/cards/TrendingCard";

import { products } from "../Components/constants";
import StateDropdown from "../Components/cards/StateDropdown";
import Footer from "../Components/Footer";
import { DescriptionReview } from "../Components/cards/DescriptionReview";
import Notification from "../Components/cards/Notification";

const Product = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const cardsRef = useRef(null);
  const [deliveryDate, setDeliveryDate] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Calculate delivery date logic
    const currentDate = new Date();
    let deliveryDate = new Date(currentDate);
    deliveryDate.setDate(deliveryDate.getDate() + 2);

    // Check if the delivery date falls on a weekend
    while (deliveryDate.getDay() === 0 || deliveryDate.getDay() === 6) {
      deliveryDate.setDate(deliveryDate.getDate() + 1); // Move to the next day
    }

    // Format delivery date as a string
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDeliveryDate = deliveryDate.toLocaleDateString(
      undefined,
      options
    );

    setDeliveryDate(formattedDeliveryDate);
  }, []);

  useEffect(() => {
    // Extract product details from location state
    console.log("Location State:", location.state);
    if (location.state) {
      const { imgURL, name, price, id } = location.state;
      const index = products.findIndex((product) => product.imgURL === imgURL);
      setActiveIndex(index);
      const initialQuantity = 1;
      setQuantity(initialQuantity);
      const initialTotalPrice =
        initialQuantity * parseFloat(price.replace("$", ""));
      setTotalPrice(initialTotalPrice);

      const productInCart = cartItems.find((item) => item.name === name);
      const imageFileName =
        productInCart &&
        products.find((product) => product.name === productInCart.name)
          ?.imageFileName;

      setSelectedProduct({
        id,
        imgURL,
        name,
        price,
        imageFileName: imageFileName || "", // Ensure imageFileName is set
      });
      localStorage.setItem("totalPrice", price.toString());
    }
  }, [location.state, cartItems, products]);

  useEffect(() => {
    // Recalculate total price whenever selectedProduct or quantity changes
    if (selectedProduct && typeof selectedProduct.price === "string") {
      setTotalPrice(
        quantity * parseFloat(selectedProduct.price.replace("$", ""))
      );
    }
  }, [selectedProduct, quantity]);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    setSelectedProduct(products[index]);

    // Navigate to the "/product" route
    navigate("/product", { state: products[index] });
  };

  // Add this useEffect to handle scrolling after navigation
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, [selectedProduct]); // Ensure the useEffect is triggered when selectedProduct changes

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) {
      return;
    }

    setQuantity(newQuantity);

    if (selectedProduct && typeof selectedProduct.price === "number") {
      setTotalPrice(newQuantity * selectedProduct.price);
    }
  };

  const handleAddToCart = () => {
    console.log("Selected Product Before Adding to Cart:", selectedProduct);

    // Retrieve cart items from local storage
    const storedItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Ensure that storedItems is always an array
    const updatedProducts = Array.isArray(storedItems) ? storedItems : [];

    const existingProductIndex = updatedProducts.findIndex(
      (product) => product.id === selectedProduct.id
    );

    if (existingProductIndex !== -1) {
      updatedProducts[existingProductIndex].quantity += quantity;
    } else {
      const newItem = {
        ...selectedProduct,
        quantity,
        imageFileName: selectedProduct.imageFileName || "", // Use the existing imageFileName or set to an empty string
        quantity,
        imgURL: selectedProduct.imgURL,
        id: selectedProduct.id || 0,
      };
      updatedProducts.push(newItem);
    }

    // Update local storage with the updated cart items
    localStorage.setItem("cart", JSON.stringify(updatedProducts));

    // Update local storage with the totalPrice based on cart items
    const updatedTotalPrice = updatedProducts.reduce(
      (acc, product) =>
        acc + product.quantity * parseFloat(product.price.replace("$", "")),
      0
    );
    localStorage.setItem("totalPrice", JSON.stringify(updatedTotalPrice));

    // Display a notification with item name and quantity added
    setShowNotification(true);
    setNotificationMessage(
      alert(
        `Added ${quantity} ${selectedProduct.name}${
          quantity > 1 ? "s" : ""
        } to cart`
      )
    );

    // Navigate to the Cart page with scrollTarget in state
    navigate("/cart", { state: { scrollTarget: "cartItems" } });
  };

  return (
    <section className="overflow-hidden ">
      <NavBar />
      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
        />
      )}
      <div className="bg-zinc-800 w-full h-16 flex justify-center items-center  font-rubik gap-4 md:gap-6">
        <Link
          to="/"
          className="sm:w-[36px] md:text-[13px] md:w-[36px]   text-white lg:text-xl font-normal hover:text-[#E66B66] leading-none max-md:mr-4"
        >
          Home
        </Link>
        <div className=" text-white">&gt;</div>
        <p className=" md:leading-none text-red-400 lg:text-xl font-bold lg:leading-normal">
          {selectedProduct?.name || "Product Name"}
        </p>
      </div>
      <div className="mx-auto w-[90%]">
        <div className="flex flex-col lg:flex-row lg:gap-8 justify-center items-center ">
          <div className="flex justify-center items-start gap-6 mt-14">
            <div className="flex flex-col  justify-center items-center">
              <div
                className="flex md:flex-1 justify-center items-center  hover:rounded-md hover:bg-gray-100"
                onClick={() => handleCardClick(activeIndex)}
              >
                <img
                  src={selectedProduct?.imgURL || maltell1}
                  width={458}
                  height={443}
                  alt="maltell image"
                />
              </div>
              <div className="flex items-center flex-row gap-2">
                <div className="py-2 flex items-center justify-center  hover:rounded-md hover:bg-gray-100 w-[114px]">
                  <img src={maltell2} width={100} height={150} alt="" />
                </div>
                <div className="p-2  hover:rounded-md hover:bg-gray-100">
                  <img src={maltell1} width={114} height={150} alt="" />
                </div>
                <div className="p-2  hover:rounded-md hover:bg-gray-100">
                  <img src={maltell1} width={114} height={150} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mt-6 mx-auto flex justify-between items-center gap-0 lg:gap-[156px]">
              <p className="text-[16px] font-rubik text-[#E66B66] font-[200]">
                Liquor <span className=" font-[400]">HAVEN</span>
              </p>
              <img src={heart_icon} alt="" />
            </div>
            <p className="mt-[16px] font-bold text-[20px] md:text-[31px] font-rubik leading-[120%]">
              {selectedProduct?.name || "Product Name"}
            </p>
            <p className="text-[20px] md:text-[25px] text-[#E66B66] font-[500] mt-[16px] leading-[120%]">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
            <p className="text-[16px] md:text-[20px] font-[500] mt-[16px] leading-[120%] text-black">
              Quantity
            </p>
            <div className="flex justify-start flex-row ml-2 mt-4">
              <button
                className="py-1.5 px-3 border-y-2 border-l-2 border-black text-[16px] lg:text-[25px] font-[500] leading-[120%] text-black"
                onClick={() => handleQuantityChange(quantity - 1)}
              >
                -
              </button>
              <button className="py-1.5 px-3 border-y-2 border-l-2 border-black text-[16px] lg:text-[25px] font-[500] cursor-auto leading-[120%] text-black">
                {quantity}
              </button>
              <button
                className="py-1.5 px-3 border-y-2 border-x-2 border-black text-[16px] lg:text-[25px] font-[500] leading-[120%] text-black"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </button>
            </div>
            <div className="flex gap-6 md:gap-10 mt-2 mb-16">
              <Link to="/cart">
                <button
                  className="w-full text-[20px] md:text-[31px] font-[500] mt-4 py-[20px] px-4 leading-[120%] text-[#E66B66] bg-white border-2 border-[#E66B66] rounded-md  hover:border-none"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </Link>
              <Link to="/checkout">
                <button className="w-full text-[20px] md:text-[31px] font-[500] mt-4 py-[22px] px-4 leading-[120%] text-black bg-[#E66B66] hover:bg-[#B85652] rounded-md">
                  Buy Now
                </button>
              </Link>
            </div>
            <p className="text-[20px] font-[600] leading-[120%] mt-[20px] font-rubik">
              Delivery and Returns
            </p>
            <p className="text-[16px] font-[400] leading-[120%] font-rubik mt-[12px]">
              Free delivery available for a lot of products and bulk purchases
            </p>
            <div className="w-full overflow-hidden">
              <StateDropdown onSelect={(state) => setSelectedState(state)} />
            </div>
            <div className="flex items-center">
              <img src={delivery_truck} alt="delivery" className="block" />
              <p className="text-[13px] font-[600] leading-[120%] font-rubik mx-2">
                Delivery fee #500
              </p>
            </div>
            <p className="text-[13px] font-[400] leading-[120%] font-rubik text-black mt-[20px]">
              Arriving at your address on {deliveryDate} when you order within
              the next 24 hours
            </p>

            <div className="flex items-center mt-5">
              <img
                src={local_shipping}
                alt="Loacal Shipping"
                className="block"
              />
              <p className="text-[13px] font-[600] leading-[120%] font-rubik mx-2">
                Return Policy
              </p>
            </div>
            <p className="mt-[20px] text-[13px] font-[400] leading-[120%] font-rubik">
              Free return within 7 days for All eligible items
            </p>
          </div>
        </div>

        <DescriptionReview selectedProduct={selectedProduct} />
        <h2 className="text-[20px] md:text-[39px] font-[400] opacity-90  md:opacity-100 mb-[7px] md:mt-[10px] leading-[120%] lg:leading-none font-inter ml-[2rem] md:ml-[4rem] lg:ml-[10rem] ">
          You may also Like
        </h2>
        <div className="flex justify-center items-center">
          <div
            className="hidden md:flex flex-wrap justify-center  items-center md:gap-12 lg:gap-[4rem] "
            ref={cardsRef}
          >
            {products.map((product, index) => (
              <TrendingCard
                key={index}
                imgURL={product.imgURL}
                name={product.name}
                price={product.price}
                onAddToCart={() => handleAddToCart(product)}
              />
            ))}
          </div>
        </div>
        <div className="relative">
          <div
            className="flex overflow-x-auto mt-4 px-5 mb-5 md:hidden lg:hidden w-[85%] mx-auto"
            ref={cardsRef}
          >
            <div className="flex flex-row items-center gap-[13px]">
              {products.map((product, index) => (
                <TrendingCard
                  key={index}
                  imgURL={product.imgURL}
                  name={product.name}
                  price={product.price}
                  onAddToCart={() => handleAddToCart(product)}
                  style={{ opacity: activeIndex === index ? 1 : 0.5 }}
                />
              ))}
            </div>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 ">
              {products.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full cursor-pointer ${
                    activeIndex === index ? "bg-[#A22634]" : "bg-[#E66B66]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <WhyUs />
      </div>
      <Footer />
    </section>
  );
};

export default Product;
