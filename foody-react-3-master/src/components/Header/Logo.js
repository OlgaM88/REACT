import React from 'react';
import logo from '../../burger.svg';

const Logo = () => (
  <a href="/" className="Logo">
    <img src={logo} className="logo-img" alt="BurgerFood" />
    <h1>Burger Food</h1>
  </a>
);
export default Logo;
