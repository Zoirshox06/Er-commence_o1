import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import { MdOutlineShoppingCart, MdFavoriteBorder } from "react-icons/md";

function Navbar() {
  return (
    <nav>
      <h1>Exclusive</h1>
      <div className="text">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      <div className="ch-nav">
        <input type="text" placeholder='What are you looking for?' />
        <MdFavoriteBorder size={24} />
        <MdOutlineShoppingCart size={24} />
      </div>
      <select className='language-select'>
        <option>English</option>
        <option>Russian</option>
        <option>Uzbek</option>
      </select>
    </nav>
  );
}

export default Navbar;
