import React from 'react';

import { MDBBox, MDBBtn, MDBCol, MDBRow, MDBCardImage } from 'mdbreact';

import news from '../data/news';
import setMargin from '../lib/setMargin3Col';

const News = () => (
  <MDBBox className="news__box  border-bottom">
    <MDBBox
      className="news__header--box"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <h1 className="news__header--header h1 mr-2">News</h1>
      <MDBBtn className="news__btn btn-rounded" color="cyan">
        See all news
      </MDBBtn>
    </MDBBox>
    <MDBRow>
      {news.map((n, i) => (
        <MDBCol className="col-xl-4 col-12 pt-5 pt-xl-0">
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
            <p className="news__text">{n.detail}</p>
            <MDBBtn className="news__btn btn-rounded mx-auto" color="cyan">
              Read More
            </MDBBtn>
          </MDBBox>
        </MDBCol>
      ))}
    </MDBRow>
  </MDBBox>
);
export default News;
