import React from 'react';
import logo from '../burger.svg';
import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import Usermenu from './UserMenu';

const links = [
  { label: 'Menu', link: '#menu' },
  { label: 'About', link: '#about' },
  { label: 'Home', link: '#home' },
  { label: 'Contact', link: '#contact' },
  { label: 'Delivery', link: '#delivery' },
];

const Header = () => (
  <header className="Header shadow">
    <div className="logo">
      <Logo imageUrl={logo} />
    </div>

    <div className="navigation">
      <HeaderMenu links={links} />
    </div>
    <div className="usermenu">
      <Usermenu />
    </div>
  </header>
);
export default Header;
