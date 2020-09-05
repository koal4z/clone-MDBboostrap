import React from 'react';
import { MDBBox } from 'mdbreact';

const Header = () => {
  return (
    <MDBBox display="flex" justifyContent="center" className="header__box">
      <MDBBox className="text-center text-white py-4">
        <h1 className="header__box--title mt-2 mb-4">
          Material Design for Bootstrap
        </h1>
        <p className="header__box--text">
          The world's most popular framework for building responsive, mobile-first
          websites and apps
        </p>
      </MDBBox>
    </MDBBox>
  );
};

export default Header;
