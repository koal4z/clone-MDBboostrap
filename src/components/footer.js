import React from 'react';
import { MDBBox, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

import footerDatas from '../data/footers';

const Footer = () => {
  const setIcon = (iconAr, index) => {
    if (iconAr) {
      if (index === 1) {
        return <MDBIcon className="mr-3" fab icon={iconAr[index]} />;
      }
      return <MDBIcon className="mr-3" icon={iconAr[index]} />;
    }
    return '';
  };

  return (
    <MDBBox className="footer__box">
      <MDBRow className="footer__box--inner">
        {footerDatas.map((data, idx) => (
          <MDBCol className="col-12 col-md-3">
            <MDBBox className={`footer__col--box-${idx}`}>
              <h4 className="footer__header">
                {data.title}
                <span className="footer__header--span">&nbsp;</span>
              </h4>
              <ul className="footer__linkbox">
                {data.links.map((link, i) => (
                  <li className="footer__linkbox--items">
                    <a className="footer__linkbox--links" href="/#">
                      {setIcon(data.icon, i)}
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </MDBBox>
          </MDBCol>
        ))}
      </MDBRow>
    </MDBBox>
  );
};

export default Footer;
