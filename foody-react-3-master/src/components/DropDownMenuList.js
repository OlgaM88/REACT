import React from 'react';

const DropDownMenuList = ({ items }) => (
  <ul className="dd-menu__list">
    {items.map(({ name, link }) => (
      <li className="dd-menu__list-item" key={name}>
        <a className="dd-menu__link" href={link}>
          {name}
        </a>
      </li>
    ))}
  </ul>
);
export default DropDownMenuList;
