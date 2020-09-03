import React from 'react';
import { MDBRow, MDBCol, MDBBox } from 'mdbreact';

import './assets/scss/style.scss';
import SideMenu from './components/sidemenu';

function App() {
  return (
    <MDBBox className="page" fluid="true">
      <MDBRow className="h-100">
        <div className="menuside__width z-depth-1-half position-fixed">
          <MDBBox tag="div" className="h-100 menuside__box">
            <SideMenu />
          </MDBBox>
        </div>
        <MDBCol className="container-right">
          <MDBRow className="navcontainer">
            <MDBCol size="12">
              <MDBBox tag="div" bgColor="warning" className="h-100">
                nav
              </MDBBox>
            </MDBCol>
          </MDBRow>
          <MDBRow className="h-100">
            <MDBCol size="12">
              <MDBBox tag="div" bgColor="success" className="h-100">
                content
              </MDBBox>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBBox>
  );
}

export default App;
