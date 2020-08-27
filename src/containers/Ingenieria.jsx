import React from 'react';
import ImgInge01 from '../assets/static/inge-01.jpg';
import ImgInge02 from '../assets/static/inge-02.jpg';

const Ingenieria = () => (
  <>
    <h1 className='text-center'>
      <i className='fas fa-drafting-compass' />
      Ingenieria
    </h1>
    <div className='row'>
      <div className='col-md-6'>
        <div className='card bg-dark text-white mb-3'>
          <img className='card-img' src={ImgInge01} alt='imagen ingenieria' />
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
          <img className='card-img' src={ImgInge02} alt='imagen ingenieria' />
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

export default Ingenieria;
