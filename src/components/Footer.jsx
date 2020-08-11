import React from 'react';

import LogoFace from '../assets/static/facebook.png';
import LogoInstagram from '../assets/static/pngwing.com.png';

import '../assets/styles/components/Footer.scss';

const Footer = () => (
  <div>
    <div className='footer-copyright-section'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5'>
            <a href='https://www.facebook.com/pg/DINARQRO/services/?ref=page_internal' className='btn btn-outline-light btn-lg' role='button' aria-pressed='true' target='_blank' >
              <img className='icon-footer' src={LogoFace} alt='Logo facebook' />
            </a>
            <a href='https://www.instagram.com/dinarqro/' className='btn btn-outline-light btn-lg' role='button' aria-pressed='true' target='_blank' >
              <img className='icon-footer' src={LogoInstagram} alt='Logo facebook' />
            </a>
            <p>&copy; 2020 DINAR SA DE CV.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;