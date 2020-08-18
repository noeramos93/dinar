import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className='App'>
    <Header />
    {children}
    <Menu />
    <Footer />
  </div>
);

export default Layout;
