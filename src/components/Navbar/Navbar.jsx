import React, { useState, useContext } from 'react';
import logo from "../../../dist/assets/crypto_images-toldrKlx-toldrKlx-toldrKlx.png";

import { CoinContext } from '../../context/CoinContext';
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-transparent p-4 outline rounded-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'} className="flex flex-wrap items-center">
          
          <img src={logo} alt="logo" className="h-8" />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to={'/'} className="text-white hover:text-blue-300">Home</Link>
          <Link to={'/features'} className="text-white hover:text-blue-300">Features</Link>
          <Link to={'/purchase'} className="text-white hover:text-blue-300">Purchase</Link>
        </div>
        <div className="flex items-center space-x-4">
          <select onChange={currencyHandler} className="bg-transparent text-white p-1 rounded-md outline outline-offset-2 outline-1">
            <option className='text-black' value="usd">USD</option>
            <option className='text-black' value="eur">EUR</option>
            <option className='text-black' value="inr">INR</option>
          </select>
          {/*<button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded flex items-center focus:outline-none">
            Sign Up <img src={sign} alt="sign" className="ml-2 h-4 w-4" />
          </button>
          */}
        </div>
        <div className="md:hidden flex items-center ">
          <button onClick={toggleMenu} className="text-black bg-blue-100 focus:outline-none">
            <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
          <Link to={'/'} className="text-white">Home</Link>
          <Link to={'/features'} className="text-white">Features</Link>
          <Link to={'/purchase'} className="text-white">Purchase</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
