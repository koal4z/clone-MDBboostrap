import React from 'react';

import {
  MDBBox,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBCardImage,
  MDBIcon,
  MDBBtn
} from 'mdbreact';

const Release = () => (
  <MDBBox
    tag="section"
    className="release__box block-example py-4 px-3 rounded  mb-4"
  >
    <MDBRow>
      <MDBCol className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12">
        <MDBTypography tag="h2" className="text-center h1 my-3">
          <strong>
            MDB 5 &nbsp;
            <u>stable</u>
            &nbsp;released
          </strong>
          <MDBCardImage
            src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/pro/_main/assets/mdb5-about-v2.jpg"
            className="img-fluid mt-4"
            alt="releaseImg"
          ></MDBCardImage>
        </MDBTypography>
      </MDBCol>
      <MDBCol className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12 py-4 release__box--right">
        <MDBBox className="pl-md-4 pl-sm-4" display="block">
          <MDBTypography className="p release__text">
            <span className="pl-3 pr-3 ">
              <MDBIcon className="icon__check" icon="check" />
            </span>
            <strong>
              <u>Stable=ready for production use</u>
            </strong>
          </MDBTypography>
          <MDBTypography className="p release__text">
            <span className="pl-3 pr-3 ">
              <MDBIcon className="icon__check" icon="check" />
            </span>
            Latest <strong>Bootstrap 5</strong>& Material Design 2.0
          </MDBTypography>
          <MDBTypography className="p release__text">
            <span className="pl-3 pr-3 ">
              <MDBIcon className="icon__check" icon="check" />
            </span>
            <strong>500+</strong> material UI components
          </MDBTypography>
          <MDBTypography className="p release__text">
            <span className="pl-3 pr-3 ">
              <MDBIcon className="icon__check" icon="check" />
            </span>
            Super simple, <strong>1 minute</strong> installation
          </MDBTypography>
          <MDBTypography className="p release__text">
            <span className="pl-3 pr-3 ">
              <MDBIcon className="icon__check" icon="check" />
            </span>
            Lots of <strong>video tutorials</strong>
          </MDBTypography>
          <MDBTypography className="p  release__text">
            <span className="pl-3 pr-3 ">
              <MDBIcon className="icon__check" icon="check" />
            </span>
            MIT license - <strong>free for personal & commercial use</strong>
          </MDBTypography>
          <MDBTypography className="p  release__text">
            <span className="pl-3 pr-3 ">
              <MDBIcon className="icon__check" icon="check" />
            </span>
            <strong>Plain JavaScript</strong> (but works also with jQuery)
          </MDBTypography>
          <MDBBtn color="purple" className="release__btn ">
            Getting Start
            <MDBIcon className="ml-3" icon="download" />
          </MDBBtn>
        </MDBBox>
      </MDBCol>
    </MDBRow>
  </MDBBox>
);

export default Release;
