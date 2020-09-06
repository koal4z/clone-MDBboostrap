import React from 'react';

import {
  MDBBox
  // MDBRow,
  // MDBCol,
  // MDBTypography,
  // MDBCardImage,
  // MDBIcon,
  // MDBBtn
} from 'mdbreact';
import Header from './header';
import AlertBar from './alertBar';
import Release from './release';
import FourCard from './fourCard';

const Home = () => (
  <MDBBox className="blue-gradient dark header__container z-depth-1 w-100">
    <Header />
    <MDBBox tag="main" className="container__background">
      <AlertBar />
      <MDBBox tag="section" className="container__page">
        <Release />
        <MDBBox className="px-3 mb-4">
          <FourCard />
        </MDBBox>
      </MDBBox>
    </MDBBox>
  </MDBBox>
);

export default Home;
