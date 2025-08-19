import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import { MdOutlineShoppingCart, MdFavoriteBorder } from "react-icons/md";

function Navbar({ likeCounter }) {
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

        <div className="favorite">
          <MdFavoriteBorder size={24} />
          <span className="like-count">{likeCounter}</span>
        </div>

        <MdOutlineShoppingCart size={24} />
      </div>
    </nav>
  );
}

export default Navbar;
