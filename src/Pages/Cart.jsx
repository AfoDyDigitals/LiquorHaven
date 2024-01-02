// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import CartItem from '../Components/CartItem';
import ShoppingCartHero from '../Components/ShoppingCartHero';

const Cart = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Absolute Raspberry', price: 140.00, image: 'cart product.png', quantity: 0 },
    { id: 2, name: 'Corona Extra', price: 19.99, image: 'corona extra.png', quantity: 0 },
    { id: 3, name: 'MXCN Cola', price: 29.99, image: 'mxcn cola.png', quantity: 0 },
  ]);

  const handleDelete = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
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
    <div>
      <ShoppingCartHero /> 
      <div className='w-[1500px] h-[2167px] bg-white font-rubik border mx-[114px] border-gray-400 items-center justify-center mt-[49px] py-[121px]'>
        {products.map((product) => (
          <CartItem
            key={product.id}
            onDelete={handleDelete}
            onUpdateQuantity={handleUpdateQuantity}
            {...product}
          />
        ))}
        <div className="w-[606px] h-[102px] bg-rose-200 rounded-[5px] mt-[65.03px] border border-stone-500 mx-[453px] ">
          <div className='flex text-[39px] font-normal leading-[46.80px] gap-[224px] text-center items-center justify-center my-[28px]'>
            <div>SubTotal </div>
            <div>${grandTotal.toFixed(2)}</div>
          </div>
        </div>
      
      <div className="w-[636px] h-[38px] text-black text-[31px] font-medium leading-[37.20px] mx-[438px] text-center my-[36px] ">
        Shipping and taxes calculated at checkout
      </div>
      <div className="w-[368px] h-[95px] py-[29px] mx-[572px] bg-red-500 rounded-lg justify-center items-center gap-2.5 inline-flex">
        <div className="text-red-50 text-[31px] font-medium  leading-[37.20px] ">Checkout</div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
