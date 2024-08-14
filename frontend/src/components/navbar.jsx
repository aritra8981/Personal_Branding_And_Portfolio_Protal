import React from 'react';
import '../components/style/navbar.css';
import logo from './assests/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="icon">
        <Link to="/">
          <img src={logo} alt="Logo" />
          <h2 className="logo">AuraPortfolio</h2>
        </Link>
      </div>

      <div className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/design">Design</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="search">
        <input className="srch" type="search" placeholder="type to text" />
        <Link to="/"><button className="btn">search</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
