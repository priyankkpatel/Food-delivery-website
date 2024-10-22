import React, { useState } from 'react';
import Navbar from './components/navbar/navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Placeorders from './pages/PlaceOrders/Placeorders';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

const App = () => {
  const [Showlogin , setShowlogin ] = useState(false)
  return (
    <>
    { Showlogin ? <LoginPopup setShowlogin = {setShowlogin}/>:<></>}
    <div className='app'>
      <Navbar setShowlogin = {setShowlogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Placeorders/>} />
      </Routes>
    </div>
    <Footer/>
    </>
    
  );
}

export default App;
