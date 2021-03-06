import React from 'react';

import {
  MDBNavbar,
  MDBNavItem,
  MDBNavbarNav,
  MDBDropdownToggle,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBBox,
  MDBBtn,
  MDBIcon,
  MDBNavLink
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

const Navbar = (props) => {
  const { hide, setHide } = props;

  const handleSideBar = () => {
    setHide(!hide);
  };

  return (
    <Router>
      <MDBNavbar color="white" expand="md" className="h-100 nav__box">
        <MDBNavbarNav left className="nav__left">
          <MDBNavItem className="hamburger__nav show-xl">
            <MDBBox
              className="nav__btn--icon mx-xl-4 mr-md-3 mx-2 h-100"
              display="flex"
              justifyContent="center"
              alignItems="center"
              tag="span"
            >
              <MDBIcon
                className="hamburger__icon"
                icon="bars"
                onClick={handleSideBar}
              />
            </MDBBox>
          </MDBNavItem>
          <MDBNavItem active className="hide-sm">
            <MDBBtn color="info" className="nav__btn">
              <span className="hide-md ">Getting Started</span>
              <MDBBox className="nav__btn--icon ml-2" tag="span">
                <i className="fas fa-download"> </i>
              </MDBBox>
            </MDBBtn>
          </MDBNavItem>
          <MDBNavItem className="ml-2 hide-sm">
            <MDBBtn color="info" className="nav__btn">
              <span className="hide-md">Tutorial</span>
              <MDBBox className="nav__btn--icon ml-2" tag="span">
                <MDBIcon icon="graduation-cap" />
              </MDBBox>
            </MDBBtn>
          </MDBNavItem>
          <MDBNavItem className="ml-2 hide-sm">
            <MDBBtn color="info" className="nav__btn">
              <span className="hide-md">Pricing</span>
              <MDBBox className="nav__btn--icon ml-2" tag="span">
                <i className="fas fa-gem"> </i>
              </MDBBox>
            </MDBBtn>
          </MDBNavItem>
        </MDBNavbarNav>
        <MDBNavbarNav right className="nav__right">
          <MDBDropdown>
            <MDBDropdownToggle nav caret className="text-dark">
              <MDBIcon className="mr-2 text-dark" icon="bell" />
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem href="#!">
                <p className="text-uppercase">August 24, 2020</p>
                <p className="text-uppercase">
                  MDB 5 stable is out & ready for production
                </p>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBNavItem className="mx-2 hide-md">
            <MDBNavLink to="#">
              <MDBIcon className="text-dark" icon="envelope" />
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem className="hide-md">
            <MDBNavLink to="#">
              <MDBIcon className="mr-2 text-dark " icon="question-circle" />
              <MDBBox tag="span" className="text-dark">
                Support
              </MDBBox>
            </MDBNavLink>
          </MDBNavItem>
          <MDBDropdown className="mr-2 text-dark">
            <MDBDropdownToggle nav caret className="text-dark">
              Tools
            </MDBDropdownToggle>
            <MDBDropdownMenu right basic>
              <MDBDropdownItem href="#!">Support Forum</MDBDropdownItem>
              <MDBDropdownItem href="#!">Editor & Snippets</MDBDropdownItem>
              <MDBDropdownItem href="#!">Articles</MDBDropdownItem>
              <MDBDropdownItem href="#!">News</MDBDropdownItem>
              <MDBDropdownItem href="#!">MDB ClI</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
          <MDBDropdown className="mr-2">
            <MDBDropdownToggle nav caret className="text-dark">
              <img
                className="nav__user--image mr-2"
                src="https://secure.gravatar.com/avatar/de1bcd0e860b76dc97959fe02173d336?s=24&d=mm&r=g"
                alt=" user profile"
              />
            </MDBDropdownToggle>
            <MDBDropdownMenu right basic>
              <MDBDropdownItem href="#!">
                <p className="text-uppercase">wait for update</p>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavbarNav>
      </MDBNavbar>
    </Router>
  );
};

export default Navbar;
