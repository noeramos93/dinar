import React from 'react';
import ImgProy01 from '../assets/static/proyect-01.jpg';
import ImgProy02 from '../assets/static/proyect-02.jpg';
import ImgProy03 from '../assets/static/proyect-03.jpg';

const Proyectos = () => (
  <>
    <h1 className='text-center'>
      <i className='far fa-folder-open' />
      Proyectos
    </h1>
    <div className='row'>
      <div className='col-md-6'>
        <div className='card bg-dark text-white mb-3'>
          <img className='card-img' src={ImgProy01} alt='img proyecto 01' />
          <div className='card-img-overlay'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className='card-text'>Last updated 3 mins ago</p>
            <a href='#section' className='btn btn-dark'>Go somewhere</a>
          </div>
        </div>
      </div>

      <div className='col-md-6'>
        <div className='card bg-dark text-white mb-3'>
          <img className='card-img' src={ImgProy02} alt='img proyecto 02' />
          <div className='card-img-overlay'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className='card-text'>Last updated 3 mins ago</p>
            <a href='#section' className='btn btn-dark'>Go somewhere</a>
          </div>
        </div>
      </div>
    </div>

    <div className='row'>
      <div className='col-md-6'>
        <div className='card bg-dark text-white mb-3'>
          <img className='card-img' src={ImgProy03} alt='img proyecto 03' />
          <div className='card-img-overlay'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className='card-text'>Last updated 3 mins ago</p>
            <a href='#section' className='btn btn-dark'>Go somewhere</a>
          </div>
        </div>
      </div>

      <div className='col-md-6'>
        <div className='card bg-dark text-white mb-3'>
          <img className='card-img' src={ImgProy01} alt='img proyecto 04' />
          <div className='card-img-overlay'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className='card-text'>Last updated 3 mins ago</p>
            <a href='#section' className='btn btn-dark'>Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Proyectos;
