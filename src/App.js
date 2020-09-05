import React, { useEffect } from 'react';
import { MDBRow, MDBCol, MDBBox } from 'mdbreact';

import './assets/scss/style.scss';
import SideMenu from './components/sidemenu';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  const handlerScroll = () => {
    let yOffset = window.scrollY;
    const navbarEl = document.querySelector('.navcontainer');
    if (yOffset > 65) {
      navbarEl.classList.add('decrease_nav');
    } else {
      navbarEl.classList.remove('decrease_nav');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
  }, []);

  return (
    <MDBBox className="page h-auto" fluid="true">
      <MDBRow>
        <div className="menuside__width z-depth-1-half position-fixed">
          <MDBBox tag="div" className="h-100 menuside__box">
            <SideMenu />
          </MDBBox>
        </div>
        <MDBCol className="container-right">
          <MDBRow className="navcontainer .z-depth-3">
            <MDBCol size="12">
              <MDBBox tag="div" className="h-100">
                <Navbar />
              </MDBBox>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="12">
              <MDBBox tag="div" className="contentcontainer">
                <Home />
              </MDBBox>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBBox>
  );
}

export default App;
