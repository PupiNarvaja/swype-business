import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import logo from '../../assets/images/logo.png';
import './NavBar.css';


const NavBar = () => {
  return (
    <header className='header'>
      <div className='header--container'>
        <Link to="/">
            <img src={logo} alt="Logo Swype Business" className='logo'/>
        </Link>
        <div className='nav--container'>
          <nav>
              <ul className='nav'>
                  <li><NavLink to="/estudio">El Estudio</NavLink></li>
                  <li><NavLink to="/servicios">Servicios</NavLink></li>
                  <li><NavLink to="/equipo">El Equipo</NavLink></li>
                  <li><NavLink to="/clientes">Clientes</NavLink></li>
                  <li><NavLink to="/contacto">Contacto</NavLink></li>
              </ul>
          </nav>
          <div className='social--container'>
            <a href='https://www.instagram.com/swypecreativo/' target="_blank" rel='noreferrer noopener'>
              <AiFillInstagram />
            </a>
            <a href='https://www.facebook.com/swypecreativo/' target="_blank" rel='noreferrer noopener'>
              <AiFillFacebook />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar