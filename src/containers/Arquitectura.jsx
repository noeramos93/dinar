import React from 'react';
import ImgArq01 from '../assets/static/arq-01.jpg';
import ImgArq02 from '../assets/static/arq-02.jpg';

const Arquitectura = () => (
  <>
    <h1 className='text-center'>
      <i className='fas fa-city' />
      Arquitectura
    </h1>
    <div className='row'>
      <div className='col-md-6'>
        <div className='card bg-dark text-white mb-3'>
          <img className='card-img' src={ImgArq01} alt='Imagen arquitectura' />
          <div className='card-img-overlay'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className='card-text'>Last updated 3 mins ago</p>
            <a href='foo' className='btn btn-dark'>Go somewhere</a>
          </div>
        </div>
      </div>

      <div className='col-md-6'>
        <div className='card bg-dark text-white mb-3'>
          <img className='card-img' src={ImgArq02} alt='Imagen arquitectura' />
          <div className='card-img-overlay'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className='card-text'>Last updated 3 mins ago</p>
            <a href='foo' className='btn btn-dark'>Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Arquitectura;
