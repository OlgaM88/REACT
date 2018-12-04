import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({ products }) => (
  <ul className="menu__list">
    {products.map(product => (
      <li key={product.id} className="menu__list-item">
        <MenuItem
          imageUrl={product.image}
          name={product.name}
          price={product.price}
        />
      </li>
    ))}
  </ul>
);
export default MenuList;
