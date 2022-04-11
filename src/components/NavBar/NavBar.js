import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import logo from '../../assets/images/logo.png';
import logoWebp from '../../assets/images/logoWebp.webp';
import './NavBar.css';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  };
  
  const closeMenu = () => {
    setNavbarOpen(false)
  };

  const logoOnClick = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  };

  let ubicacionPrincipal = window.pageYOffset;
  window.onscroll = function () {
      let header = document.getElementById("header");
      let desplazamientoActual = window.pageYOffset;

      navbarOpen
          ? (header.style.top = "0")
          : ubicacionPrincipal >= desplazamientoActual
          ? (header.style.top = "0")
          : (header.style.top = "-100px");

      ubicacionPrincipal = desplazamientoActual;
      ubicacionPrincipal <= 650
          ? (header.style.backgroundColor = "rgba(246, 238, 235, .7)")
          : (header.style.backgroundColor = "rgba(246, 238, 235, .9)");
  };
  
  return (
    <header className="header" id='header'>
      <Link to="/" className='logo-link' onClick={logoOnClick}>
        <picture>
          <source srcSet={logoWebp} />
          <img src={logo} alt="Logo Swype Business" className='logo'/>
        </picture>
      </Link>
      <button id='menuBtn' onClick={handleToggle}>{navbarOpen ? "X" : "Open"}</button>
      <div className={`nav--container  ${navbarOpen ? "showMenu" : "hideMenu"}`}>
        <nav id='navbar'>
            <ul className="nav__ul">
                <li><NavLink to="/estudio" onClick={() => closeMenu()}>El Estudio</NavLink></li>
                <li><NavLink to="/servicios" onClick={() => closeMenu()}>Servicios</NavLink></li>
                <li><NavLink to="/equipo" onClick={() => closeMenu()}>El Equipo</NavLink></li>
                <li><NavLink to="/clientes" onClick={() => closeMenu()}>Clientes</NavLink></li>
                <li><NavLink to="/contacto" onClick={() => closeMenu()}>Contacto</NavLink></li>
            </ul>
        </nav>
        <div className='social--container'>
          <a href='https://www.instagram.com/swypecreativo/' target="_blank" rel='noreferrer noopener'>
            <AiFillInstagram />
          </a>
          <a href='https://www.facebook.com/swypeestudiocreativo/' target="_blank" rel='noreferrer noopener'>
            <AiFillFacebook />
          </a>
        </div>
      </div>
    </header>
  )
}

export default NavBar;
