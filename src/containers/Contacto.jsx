import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const Contacto = () => (
  <>
    <h1 className='text-center'>
      <i className='far fa-address-card' />
      Contacto
    </h1>
    <section className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card border-light mb-3'>
                <div className='card-body'>
                  <h5 className='card-title text-center'><FontAwesomeIcon icon={faMapMarkerAlt} size='5x' /></h5>
                  <h6 className='card-subtitle mb-2 text-muted'>Ubicación</h6>
                  <p className='card-text text-justify'>Plaza Mayor #124. Col. Plazas del Sol 3ª Sección. C.P. 76099, Querétaro, Qro. México.</p>
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <div className='card border-light mb-3'>
                <div className='card-body'>
                  <h5 className='card-title text-center'><FontAwesomeIcon icon={faPhoneAlt} size='5x' /></h5>
                  <h6 className='card-subtitle mb-2 text-muted'>LLamanos</h6>
                  <p className='card-text text-justify'>
                    <br />
                    +52 (442)302-78-78.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-6'>
              <div className='card border-light mb-3'>
                <div className='card-body'>
                  <h5 className='card-title text-center'><FontAwesomeIcon icon={faEnvelopeOpen} size='5x' /></h5>
                  <h6 className='card-subtitle mb-2 text-muted'>Envia un correo</h6>
                  <p className='card-text text-justify'>
                    <br />
                    dinar.proyectos@outlook.com
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-6'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='card'>
                <div className='card-body'>

                  <form id='frmEmail' action='#'>
                    <div className='form-group'>
                      Nombre:
                      <input type='text' className='form-control' id='nameCli' placeholder='Nombre' />
                    </div>
                    <div className='form-group'>
                      Email:
                      <input type='text' className='form-control' id='emailCli' placeholder='ejemplo@ejemplo.com' />
                    </div>
                    <div className='form-group'>
                      Motivo:
                      <input type='text' className='form-control' id='subjectCli' placeholder='Cotización' />
                    </div>
                    <div className='form-group'>
                      Mensaje:
                      <textarea id='messajeCli' className='form-control' aria-label='With textarea' placeholder='Hola buenas tardes ....' />
                    </div>
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                  </form>

                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
  </>
);

export default Contacto;
