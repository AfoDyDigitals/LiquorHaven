// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar';
import Section3 from './Components/Section3';
import ShoppingCartHero from './Components/ShoppingCartHero';
import Cart from './Pages/Cart';

import './App.css';

function App() {
  
  return (

   <>
   <NavBar /> 
   <Section3 />
   <ShoppingCartHero /> 
   <Cart />
   </>
  )
}

export default App;
