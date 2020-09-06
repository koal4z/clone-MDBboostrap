import React from 'react';

import { MDBBox } from 'mdbreact';

import Header from './header';
import AlertBar from './alertBar';
import Release from './release';
import FourCard from './fourCard';
import Sponser from './sponser';
import News from './news';
import Resource from './resource';
import Contact from './contact';
import Footer from './footer';
import Copyright from './copyright';

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
        <MDBBox className="px-3 mb-4">
          <Sponser />
        </MDBBox>
        <MDBBox className="px-3 mb-4">
          <News />
        </MDBBox>
        <MDBBox className="pt-5 px-3 mb-4">
          <Resource />
        </MDBBox>
      </MDBBox>
    </MDBBox>
    <Contact />
    <Footer />
    <Copyright />
  </MDBBox>
);

export default Home;
