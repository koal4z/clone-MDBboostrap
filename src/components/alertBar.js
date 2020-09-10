import React from 'react';
import { MDBBox, MDBBtn } from 'mdbreact';

const AlertBar = () => {
  return (
    <MDBBox
      className="alert alert-primary w-100 mb-4 container__alert hide-lg"
    >
      <MDBBox className="pl-1 pr-3">
        <i className="far fa-gem mx-2"></i>
      </MDBBox>
      <MDBBox display="flex" alignItems="center">
        <p className="container__alert--text">
          Access PRO components, 400+ Design Blocks, 7+ template packs & more!
        </p>
      </MDBBox>
      <MDBBox flex="grow-1" display="flex" justifyContent="end">
        <MDBBtn color="danger" className="container__alert--button">
          See price
          <i className="far fa-gem mx-2"></i>
        </MDBBtn>
      </MDBBox>
    </MDBBox>
  );
};

export default AlertBar;
