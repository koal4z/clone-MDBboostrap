import React from 'react';
import { MDBListGroupItem, MDBBox } from 'mdbreact';

const MenuItem = (props) => {
  const { icon, name, isDown, clickDown } = props;

  return (
    <MDBListGroupItem
      className="menu-side__menu--items"
      onClick={(e) => clickDown(e)}
    >
      <MDBBox display="flex" className="menu-side__menu--items-box">
        <MDBBox className="menu-side__menu--icon">
          <i className={icon}></i>
        </MDBBox>
        <MDBBox className="menu-side__menu--name ml-3 mr-auto">{name}</MDBBox>
        {isDown ? (
          <MDBBox className="menu-side__menu--icon-down mr-2">
            <i className="fas fa-angle-down "></i>
          </MDBBox>
        ) : null}
      </MDBBox>
    </MDBListGroupItem>
  );
};

export default MenuItem;
