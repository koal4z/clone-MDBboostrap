import React from 'react';
import { MDBBox, MDBRow, MDBCol, MDBCardImage, MDBBtn } from 'mdbreact';

import setMargin from '../lib/setMargin3Col';
import resources from '../data/resource';

const Resource = () => (
  <MDBBox className="resource__box">
    <h1 className="resource__header mb-5">Most Porular Resource</h1>
    <MDBRow>
      {resources.slice(0, 3).map((n, i) => (
        <MDBCol className={`col-xl-4 col-12 ${i === 0 ? 'col-md-12' : 'col-md-6'}`}>
          <MDBBox display="flex" className="flex-column" alignItems="center">
            <MDBBox className={`${setMargin(i)} z-depth-2`}>
              <a href="/#">
                <MDBCardImage
                  className="news__image img-fluid "
                  src={n.img}
                  alt={`news-${i}`}
                />
              </a>
            </MDBBox>
            <h2 className="news__subheader my-5">{n.title}</h2>
            <MDBBtn className="news__btn btn-rounded mx-auto mb-5" color="cyan">
              Read More
            </MDBBtn>
          </MDBBox>
        </MDBCol>
      ))}
    </MDBRow>
    <MDBRow>
      {resources.slice(3, 6).map((n, i) => (
        <MDBCol className={`col-xl-4 col-12 ${i === 0 ? 'col-md-12' : 'col-md-6'}`}>
          <MDBBox display="flex" className="flex-column" alignItems="center">
            <MDBBox className={`${setMargin(i)} z-depth-2`}>
              <a href="/#">
                <MDBCardImage
                  className="news__image img-fluid "
                  src={n.img}
                  alt={`news-${i}`}
                />
              </a>
            </MDBBox>
            <h2 className="news__subheader my-5">{n.title}</h2>
            <MDBBtn className="news__btn btn-rounded mx-auto mb-5" color="cyan">
              Read More
            </MDBBtn>
          </MDBBox>
        </MDBCol>
      ))}
    </MDBRow>
    <MDBRow>
      {resources.slice(6, 9).map((n, i) => (
        <MDBCol className={`col-xl-4 col-12 ${i === 0 ? 'col-md-12' : 'col-md-6'}`}>
          <MDBBox display="flex" className="flex-column" alignItems="center">
            <MDBBox className={`${setMargin(i)} z-depth-2`}>
              <a href="/#">
                <MDBCardImage
                  className="news__image img-fluid "
                  src={n.img}
                  alt={`news-${i}`}
                />
              </a>
            </MDBBox>
            <h2 className="news__subheader my-5">{n.title}</h2>
            <MDBBtn className="news__btn btn-rounded mx-auto mb-5" color="cyan">
              Read More
            </MDBBtn>
          </MDBBox>
        </MDBCol>
      ))}
    </MDBRow>
    <MDBRow>
      {resources.slice(9).map((n, i) => (
        <MDBCol className={`col-xl-4 col-12 ${i === 0 ? 'col-md-12' : 'col-md-6'}`}>
          <MDBBox display="flex" className="flex-column" alignItems="center">
            <MDBBox className={`${setMargin(i)} z-depth-2`}>
              <a href="/#">
                <MDBCardImage
                  className="news__image img-fluid "
                  src={n.img}
                  alt={`news-${i}`}
                />
              </a>
            </MDBBox>
            <h2 className="news__subheader my-5">{n.title}</h2>
            <MDBBtn className="news__btn btn-rounded mx-auto mb-5" color="cyan">
              Read More
            </MDBBtn>
          </MDBBox>
        </MDBCol>
      ))}
    </MDBRow>
  </MDBBox>
);

export default Resource;
