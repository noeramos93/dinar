import React from 'react';

import LogoDinar from '../assets/static/03.png';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <nav className='navbar navbar-expand-lg navbar-negro bg-negro'>
    <img className='logo' src={LogoDinar} alt='Logo dinar' />
  </nav>
);

export default Header;
