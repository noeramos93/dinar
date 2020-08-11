import React from 'react';
import Header from '../components/Header';
import Carrusel from '../components/Carrusel';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import '../assets/styles/App.scss';

const App = () => (
  <div className='container'>
    <Header />
    <Carrusel />
    <Menu />
    <Footer />
  </div>
);

export default App;
