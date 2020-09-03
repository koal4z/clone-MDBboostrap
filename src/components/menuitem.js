import React from 'react';
import { MDBListGroupItem, MDBBox } from 'mdbreact';

const MenuItem = (props) => {
  const { icon, name, isDown } = props;

  return (
    <MDBListGroupItem className="menu-side__menu--items">
      <MDBBox display="flex">
        <MDBBox className="menu-side__menu--icon">{icon}</MDBBox>
        <MDBBox className="menu-side__menu--name ml-3 mr-auto">{name}</MDBBox>
        {isDown ? (
          <MDBBox className="menu-side__menu--down mr-2">
            <i className="fas fa-angle-down"></i>
          </MDBBox>
        ) : null}
      </MDBBox>
    </MDBListGroupItem>
  );
};

export default MenuItem;
