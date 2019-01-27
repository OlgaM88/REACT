import React from 'react';

import Logo from './Logo';
import HeaderMenu from './HeaderMenu';
import Usermenu from './UserProfile/UserMenu';

const Header = () => (
  <header className="Header shadow">
    <div className="logo">
      <Logo />
    </div>

    <div className="navigation">
      <HeaderMenu />
    </div>
    <div className="usermenu">
      <Usermenu />
    </div>
  </header>
);
export default Header;
