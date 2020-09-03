import React from 'react';
import { MDBListGroup } from 'mdbreact';

import MenuItem from './menuitem';
import menuitemsData from '../data/menulistdata.json';

const MenuItems = () => {
  return (
    <MDBListGroup className="menu-side__menu--list">
      {menuitemsData.menuList.map((data) => {
        return (
          <MenuItem
            key={data.name}
            icon={data.icon}
            name={data.name}
            isDown={data.isDropDown}
          />
        );
      })}
    </MDBListGroup>
  );
};

export default MenuItems;
