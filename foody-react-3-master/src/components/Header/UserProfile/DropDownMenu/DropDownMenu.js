import React from 'react';
import DropDownMenuList from './DropDownMenuList';

const userMenuSettings = [
  { name: 'Account', link: '#account' },
  { name: 'Order History', link: '#order' },
  { name: 'Meal Planer', link: '#meal' },
];

const DropDownMenu = () => (
  <div className="DropDown">
    <DropDownMenuList items={userMenuSettings} />
    <button type="button">Log out</button>
  </div>
);

export default DropDownMenu;
