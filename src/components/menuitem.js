import React, { useState } from 'react';
import { MDBListGroupItem, MDBBox, MDBWaves } from 'mdbreact';

const MenuItem = (props) => {
  const { icon, name, isDown, clickDown } = props;
  const [cursorPos, setCursorPos] = useState({});

  const handleClick = (e) => {
    e.stopPropagation();
    // Waves - Get Cursor Position
    const cursorNewCurrentPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now() // time indicates particular clicks
    };

    setCursorPos(cursorNewCurrentPos);
  };
  return (
    <MDBListGroupItem
      className="menu-side__menu--items"
      onClick={(e) => clickDown(e)}
      onMouseUp={handleClick}
      onTouchStart={handleClick}
    >
      <MDBBox display="flex" className="menu-side__menu--items-box">
        <MDBBox className="menu-side__menu--icon">
          <i className={icon}> </i>
        </MDBBox>
        <MDBBox className="menu-side__menu--name ml-3 mr-auto">{name}</MDBBox>
        {isDown ? (
          <MDBBox className="menu-side__menu--icon-down mr-2">
            <i className="fas fa-angle-down "> </i>
          </MDBBox>
        ) : null}
      </MDBBox>
      <MDBWaves cursorPos={cursorPos} dark />
    </MDBListGroupItem>
  );
};

export default MenuItem;
