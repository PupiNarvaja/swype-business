import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import logo from '../../assets/images/logo.png'
import './NavBar.css';


const NavBar = () => {
  return (
    <header>
        <Link to="/">
            <img src={logo} alt="Logo Swype Business" className='logo'/>
        </Link>
        <nav>
            <ul className='nav'>
                <li><NavLink to="/estudio">El Estudio</NavLink></li>
                <li><NavLink to="/servicios">Servicios</NavLink></li>
                <li><NavLink to="/equipo">El Equipo</NavLink></li>
                <li><NavLink to="/clientes">Clientes</NavLink></li>
                <li><NavLink to="/contacto">Contacto</NavLink></li>
            </ul>
      </nav>
      <div>
        <AiFillInstagram />
        <AiFillFacebook />
      </div>
    </header>
  )
}

export default NavBar