import React from 'react';

const links = [
  { label: 'Menu', link: '#menu' },
  { label: 'About', link: '#about' },
  { label: 'Home', link: '#home' },
  { label: 'Contact', link: '#contact' },
  { label: 'Delivery', link: '#delivery' },
];

const HeaderMenu = () => (
  <ul className="HeaderMenu">
    {links.map(({ label, link }) => (
      <li className="menu__list-item" key={label}>
        <a className="menu__link" href={link}>
          {label}
        </a>
      </li>
    ))}
  </ul>
);
export default HeaderMenu;
