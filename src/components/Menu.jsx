import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faFolderOpen,
  faObjectGroup,
  faDraftingCompass,
  faCity,
  faAddressCard,
  faPencilRuler } from '@fortawesome/free-solid-svg-icons';

const Menu = () => (
  <section>
    <br />
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <ul className='nav justify-content-center'>
            <li className='nav-item'>
              <Link className='nav-item-dark active' to='/'>
                <FontAwesomeIcon icon={faHome} />
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-item-dark' to='/proyectos'>
                <FontAwesomeIcon icon={faFolderOpen} />
                Proyectos
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-item-dark dropdown-toggle' data-toggle='dropdown' href='foo' role='button' aria-haspopup='true' aria-expanded='false'>
                <FontAwesomeIcon icon={faPencilRuler} />
                Servicios
              </a>
              <div className='dropdown-menu'>
                <a className='dropdown-item' href='diseños.html'>
                  <FontAwesomeIcon icon={faObjectGroup} />
                  Diseños
                </a>
                <a className='dropdown-item' href='ingenieria.html'>
                  <FontAwesomeIcon icon={faDraftingCompass} />
                  Ingenieria
                </a>
                <a className='dropdown-item' href='arquitectura.html'>
                  <FontAwesomeIcon icon={faCity} />
                  Arquitectura
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <a className='nav-item-dark' href='contacto.html'>
                <FontAwesomeIcon icon={faAddressCard} />
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Menu;
