import React from 'react';

import {
  MDBBox,
  MDBRow,
  MDBCol,
  MDBTypography,
  MDBCardImage,
  MDBBtn
} from 'mdbreact';

import datas from '../data/version';

const FourCard = () => {
  return (
    <MDBRow className="mb-4">
      {datas.map((data, i) => {
        return (
          <MDBCol key={i} className={`col-6 ${i % 2 === 0 ? 'pr-3' : 'pl-3'} mb-4`}>
            <MDBBox className="z-depth-1 mb-4">
              <MDBCardImage
                src={data.image}
                alt={data.header.split(' ')[1]}
                className="img-fluid"
              ></MDBCardImage>
            </MDBBox>
            <MDBBox>
              <MDBTypography tag="h2" className="card__typo--head mb-2">
                <strong>{data.header}</strong>{' '}
                {i === 0 ? '(default Bootstrap version)' : ''}
              </MDBTypography>
              <MDBTypography tag="p" className="card__typo--detail">
                Version:{' '}
                <a href="/#" className="card__typo--link">
                  <u>{data.version}</u>
                </a>{' '}
                | Last Update:{' '}
                <a href="/#" className="card__typo--link">
                  <u>{data.lastUpdate}</u>
                </a>
              </MDBTypography>
              <MDBBox display="flex" justifyContent="start" className="card__btnBox">
                <MDBBtn color={data.color} className="card__btnBox--btn">
                  Getting Start
                  <i className="fas fa-download ml-2"></i>
                </MDBBtn>
                <MDBBtn color={data.color} className="card__btnBox--btn">
                  Tutorial
                </MDBBtn>
                <MDBBtn color={data.color} className="card__btnBox--btn">
                  Docs
                </MDBBtn>
                <MDBBtn color={data.color} className="card__btnBox--btn">
                  Pro
                  <i className="far fa-gem ml-2"></i>
                </MDBBtn>
              </MDBBox>
            </MDBBox>
          </MDBCol>
        );
      })}
    </MDBRow>
  );
};

export default FourCard;
