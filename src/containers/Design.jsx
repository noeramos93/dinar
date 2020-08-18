import React from 'react';

const Design = () => (
  <>
    <h1 className='text-center'>
      <i className='far fa-object-group' />
      Diseños
    </h1>
    <div className='row'>
      <div className='col-md-6'>
        <div className='card bg-dark text-white mb-3'>
          <img className='card-img' src='assets/img/diseno-01.jpg' alt='diseño' />
          <div className='card-img-overlay'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className='card-text'>Last updated 3 mins ago</p>
            <a href='#' className='btn btn-dark'>Go somewhere</a>
          </div>
        </div>
      </div>

      <div className='col-md-6'>
        <div className='card bg-dark text-white mb-3'>
          <img className='card-img' src='assets/img/diseno-02.jpg' alt='diseño' />
          <div className='card-img-overlay'>
            <h5 className='card-title'>Card title</h5>
            <p className='card-text'>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className='card-text'>Last updated 3 mins ago</p>
            <a href='#' className='btn btn-dark'>Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Design;
