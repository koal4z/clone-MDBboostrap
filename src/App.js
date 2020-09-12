import React, { useState, useEffect } from 'react';
import { MDBRow, MDBCol, MDBBox } from 'mdbreact';

import './assets/scss/style.scss';
import SideMenu from './components/sidemenu';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  const [hide, setHide] = useState(false);
  const handlerScroll = () => {
    const yOffset = window.scrollY;
    const navbarEl = document.querySelector('.navcontainer');
    if (yOffset > 65) {
      navbarEl.classList.add('decrease_nav');
    } else {
      navbarEl.classList.remove('decrease_nav');
    }
  };

  const handlerLeftSideBar = () => {
    setHide(!hide);
  };

  useEffect(() => {
    window.addEventListener('scroll', handlerScroll);
  }, []);

  return (
    <MDBBox className="page h-auto" fluid="true">
      <MDBRow>
        <div
          className={`menuside__width z-depth-1-half position-fixed ${
            hide ? '' : 'slideleft'
          }`}
        >
          <MDBBox tag="div" className="h-100 menuside__box ">
            <SideMenu />
          </MDBBox>
        </div>
        <MDBBox
          className={` ${hide ? 'fadein menuside__width--area' : ''}`}
          onClick={handlerLeftSideBar}
        >
          {' '}
        </MDBBox>
        <MDBCol className="container-right clearPadMar">
          <MDBRow className="navcontainer z-depth-3">
            <MDBCol size="12" className="clearPadMar">
              <MDBBox tag="div" className="h-100">
                <Navbar hide={hide} setHide={setHide} />
              </MDBBox>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="12" className="clearPadMar">
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
