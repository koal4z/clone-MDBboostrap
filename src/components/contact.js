import React from 'react';
import { MDBBox, MDBIcon } from 'mdbreact';

const Contact = () => (
  <MDBBox
    className="contact__box "
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <MDBBox className="contact__button--box hide-md">
      <a href="/#" className="contact__btn--items">
        Join our newsletter
        <MDBIcon className="ml-3" icon="envelope" />
      </a>

      <a href="/#" className="contact__btn--items">
        Become Affiliate
        <MDBIcon className="ml-3" icon="money-bill-alt" />
      </a>
      <a href="/#" className="contact__btn--items">
        Contact us
        <MDBIcon className="ml-3" icon="envelope" />
      </a>
    </MDBBox>
    <MDBBox className="contact__icon--box">
      <a className="contact__icon--links" href="/#">
        <MDBIcon className="contact__icon--items" fab icon="github" />
      </a>
      <a className="contact__icon--links" href="/#">
        <MDBIcon className="contact__icon--items" fab icon="youtube" />
      </a>
      <a className="contact__icon--links" href="/#">
        <MDBIcon className="contact__icon--items" fab icon="facebook-f" />
      </a>
      <a className="contact__icon--links" href="/#">
        <MDBIcon className="contact__icon--items" fab icon="twitter" />
      </a>
    </MDBBox>
  </MDBBox>
);

export default Contact;
