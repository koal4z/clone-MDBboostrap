import React, { useState } from 'react';
import { MDBListGroup, MDBBox, MDBContainer } from 'mdbreact';

import MenuItem from './menuitem';
import menuitemsData from '../data/menulistdata.json';

const MenuItems = () => {
  const [clickDown, setClickDown] = useState(false);

  const handlerDown = (e) => {
    const el = e.currentTarget;
    const parentEl = el.parentNode;
    const angleIcon = el.querySelector('.fa-angle-down');
    const boxDrop = parentEl.querySelector('.menu-side__menu--down-box');
    angleIcon.classList.toggle('rotate-icon-top');
    boxDrop.classList.toggle('active-drop');
    setClickDown(!clickDown);
  };

  return (
    <MDBListGroup className="menu-side__menu--list">
      {menuitemsData.menuList.map((data) => {
        return (
          <MDBContainer className="p-0" key={data.name}>
            <MenuItem
              icon={data.icon}
              name={data.name}
              isDown={data.isDropDown}
              clickDown={handlerDown}
              isClickDown={clickDown}
            />
            {data.isDropDown ? (
              <MDBBox key={data.name} className="menu-side__menu--down-box">
                <MDBBox className="pl-5 py-2 menu-side__menu--down-items">
                  item1
                </MDBBox>
                <MDBBox className="pl-5 py-2 menu-side__menu--down-items">
                  item1
                </MDBBox>
                <MDBBox className="pl-5 py-2 menu-side__menu--down-items">
                  item1
                </MDBBox>
                <MDBBox className="pl-5 py-2 menu-side__menu--down-items">
                  item1
                </MDBBox>
                <MDBBox className="pl-5 py-2 menu-side__menu--down-items">
                  item1
                </MDBBox>
                <MDBBox className="pl-5 py-2 menu-side__menu--down-items">
                  item1
                </MDBBox>
              </MDBBox>
            ) : null}
          </MDBContainer>
        );
      })}
    </MDBListGroup>
  );
};

export default MenuItems;
