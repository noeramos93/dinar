import React from 'react';
import ImgCarrusel1 from '../assets/static/banner-1.jpg';
import ImgCarrusel2 from '../assets/static/banner-2.jpg';
import ImgCarrusel3 from '../assets/static/banner-3.jpg';

const Carrusel = () => (
  <section className='col-md-12'>
    <div className='container-lg'>
      <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active' />
          <li data-target='#carouselExampleIndicators' data-slide-to='1' />
          <li data-target='#carouselExampleIndicators' data-slide-to='2' />
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img className='d-block' src={ImgCarrusel1} alt='First slide' />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Diseños</h5>
              <p>Mejores diseños.</p>
            </div>
          </div>
          <div className='carousel-item'>
            <img className='d-block' src={ImgCarrusel2} alt='Second slide' />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Ingenieria</h5>
              <p>Para tus hobras.</p>
            </div>
          </div>
          <div className='carousel-item'>
            <img className='d-block' src={ImgCarrusel3} alt='Third slide' />
            <div className='carousel-caption d-none d-md-block'>
              <h5>Construccion</h5>
              <p>¿Necesitas remodelar?.</p>
            </div>
          </div>
        </div>
        <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='sr-only'>Anterior</span>
        </a>
        <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='sr-only'>Siguiente</span>
        </a>
      </div>
    </div>
  </section>
);

export default Carrusel;
