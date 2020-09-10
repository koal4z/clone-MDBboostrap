import React from 'react';
import { MDBBox } from 'mdbreact';

import sponsers from '../data/sponsers';

const Sponser = () => (
  <MDBBox className="border-top border-bottom sponser__box">
    <MDBBox display="inline-flex">
      <img
        className="ml-sm-5 ml-xl-0"
        style={{ height: '15px', marginTop: '3px' }}
        src="https://mdbootstrap.com/wp-content/uploads/2018/06/logo-mdb-jquery-small.png"
        alt="logo"
      />
      <p className="sponser__text">
        - trusted&nbsp;
        <strong>by 2,000,000+</strong>
        &nbsp;developers and designers
      </p>
    </MDBBox>
    <MDBBox className="mt-4 sponser__box--image">
      {sponsers.map((sponser) => (
        <MDBBox className="sponser__box--imageBox">
          <img
            className="sponser__image"
            src={sponser.src}
            alt={`${sponser.alt} logo`}
          />
        </MDBBox>
      ))}
    </MDBBox>
  </MDBBox>
);

export default Sponser;
