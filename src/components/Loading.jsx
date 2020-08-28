import React from 'react';
import '../assets/styles/components/Loading.scss';

const Loading = class extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      document.querySelector('.recuadro').classList.remove('ocultar');
    }, 300);
    setTimeout(() => {
      document.querySelector('.sobrante1').classList.add('ocultar');
      document.querySelector('.sobrante2').classList.add('ocultar');
      document.querySelector('.sobrante3').classList.add('ocultar');
    }, 3000);
    setTimeout(() => {
      document.getElementById('preAcronimo').classList.add('ocultar');
    }, 3500);
    setTimeout(() => {
      document.getElementById('acronimo').classList.remove('ocultar');
    }, 4000);
  }

  render() {
    return (
      <>
        {/*Preloader */}
        <div id='loader'>
          <div className='row justify-content-md-center'>
            {/* <img src='assets/img/3.png' className='img' alt='MEA Proloader'> */}
            <svg id='logoSvg' width='400' height='300'>
              <circle className='path' cx='200' cy='130' r='120' stroke='white' strokeWidth='4' fill='none' />
              {/* <polygon points='190,10 190,190 120,190' stroke='black' stroke-width=4 fill='none'/> */}
              <polygon className='path' points='190,30 190,190 120,190' stroke='white' strokeWidth='4' fill='none' />
              <line className='path' x1='200' x2='200' y1='30' y2='192' stroke='white' strokeWidth='4' />
              {/* el primer punto es x=230 y=190 lo cual lo posiciona a lado de la linea  y empieza desde abajo */}
              {/* el segundo punto es x=230 y=10  lo cual crea la punta del triangulo  */}
              {/* el tercer punto es x=280 y=190  lo cual lo da el punto final del triangulo  */}
              <polyline className='path' points='210,192 210,30 280,190' stroke='white' strokeWidth='4' fill='none' />
            </svg>
          </div>
          <div className='justify-content-md-center nameLogo recuadro ocultar'>
            <h1 id='acronimo' className='text-center recuadro ocultar'>DINAR</h1>
            <div id='preAcronimo' className='recuadro'>
              <p className='h1 text-center'>
                D
                <span className='sobrante1 recuadro'>
                  ISEÑO
                </span>
              </p>
              <p className='h1 text-center'>
                IN
                <span className='sobrante2 recuadro'>
                  GENIERIA
                </span>
              </p>
              <p className='h1 text-center'>
                AR
                <span className='sobrante3 recuadro'>
                  QUITECTURA
                </span>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Loading;
