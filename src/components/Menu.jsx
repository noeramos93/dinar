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
                {' '}
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-item-dark' to='/proyectos'>
                <FontAwesomeIcon icon={faFolderOpen} />
                {' '}
                Proyectos
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-item-dark dropdown-toggle' data-toggle='dropdown' href='foo' role='button' aria-haspopup='true' aria-expanded='false'>
                <FontAwesomeIcon icon={faPencilRuler} />
                {' '}
                Servicios
              </a>
              <div className='dropdown-menu'>
                <Link className='dropdown-item' to='/diseño'>
                  <FontAwesomeIcon icon={faObjectGroup} />
                  {' '}
                  Diseños
                </Link>
                <Link className='dropdown-item' to='/ingenieria'>
                  <FontAwesomeIcon icon={faDraftingCompass} />
                  {' '}
                  Ingenieria
                </Link>
                <Link className='dropdown-item' to='/arquitectura'>
                  <FontAwesomeIcon icon={faCity} />
                  {' '}
                  Arquitectura
                </Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link className='nav-item-dark' to='/contacto'>
                <FontAwesomeIcon icon={faAddressCard} />
                {' '}
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Menu;
