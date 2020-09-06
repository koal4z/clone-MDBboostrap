import React from 'react';
import { MDBBox, MDBInput } from 'mdbreact';

import MenuItems from './menuitems';

const SideMenu = () => (
  <MDBBox className="menu-side__container h-100">
    <MDBBox tag="div" className="menu-side__logo--box">
      <a href="/#" className="menu-side__logo--link">
        <img
          className="menu-side__logo--image"
          src="https://mdbootstrap.com/img/Marketing/general/logo/big/mdb-react.png"
          alt="MDB logo"
        />
      </a>
    </MDBBox>
    <MDBBox tag="div" className="menu-side__search">
      <MDBInput hint="Search" className="menu-side__search--input" type="text" />
    </MDBBox>
    <MDBBox tag="div" className="menu-side__menus--box pt-5">
      <MenuItems />
    </MDBBox>
  </MDBBox>
);

export default SideMenu;
