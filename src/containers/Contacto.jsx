import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const Contacto = class extends React.Component {

  constructor(props) {
    super(props);
    this.state = { form: { nameCli: '', emailCli: '', subjectCli: '', messajeCli: '' } };
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: <p>Hello World</p>,
      footer: 'Copyright 2018',
      onOpen: () => {
        // `MySwal` is a subclass of `Swal`
        //   with all the same instance & static methods
        MySwal.clickConfirm();
      },
    }).then(() => {
      return MySwal.fire(<p>Ocurrio un error al enviar el correo pero tambien puede llamarnos y lo atenderemos con gusto</p>);
    });
    this.setState({ form: { nameCli: '', emailCli: '', subjectCli: '', messajeCli: '' } });
    /*
    const options = {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(this.state.form), // data can be `string` or {object}!
      headers: { 'Content-Type': 'application/json' },
    };
    const urlDelete = 'https://dinarqro.com/anterior/app/index.php/Email/emaildo/';
    const response = await fetch(urlDelete, options);
    console.log(response);*/
  }

  render() {
    return (
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

                      <form id='frmEmail' onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                          Nombre:
                          <input
                            type='text'
                            className='form-control'
                            name='nameCli'
                            onChange={this.handleChange}
                            placeholder='Nombre'
                            value={this.state.form.nameCli}
                          />
                        </div>
                        <div className='form-group'>
                          Email:
                          <input
                            type='text'
                            className='form-control'
                            name='emailCli'
                            onChange={this.handleChange}
                            placeholder='ejemplo@ejemplo.com'
                            value={this.state.form.emailCli}
                          />
                        </div>
                        <div className='form-group'>
                          Motivo:
                          <input
                            type='text'
                            className='form-control'
                            name='subjectCli'
                            onChange={this.handleChange}
                            placeholder='Cotización'
                            value={this.state.form.subjectCli}
                          />
                        </div>
                        <div className='form-group'>
                          Mensaje:
                          <textarea
                            name='messajeCli'
                            onChange={this.handleChange}
                            className='form-control'
                            aria-label='With textarea'
                            placeholder='Hola buenas tardes ....'
                            value={this.state.form.messajeCli}
                          />
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
  }
};

export default Contacto;
