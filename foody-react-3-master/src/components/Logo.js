import React from 'react';

const Logo = ({ imageUrl, alt, width = 60, height = 60 }) => (
  <a href="/" className="Logo">
    <img src={imageUrl} alt={alt} width={width} height={height} />
    <h1>Burger Food</h1>
  </a>
);
export default Logo;
