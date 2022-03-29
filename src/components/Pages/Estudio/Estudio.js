import React from 'react';
import logo from '../../../assets/images/logo.png';
import './Estudio.css';

const Estudio = () => {
  return (
      <>
        <h2 className='title'>¿Quiénes somos?</h2>
        <h2 className='title'>¿Cómo trabajamos?</h2>
        <h2 className='title'>¿Cómo nace 
            <img src={logo} alt="Logo Swype Business" className='logo--title'/>
            ?
        </h2>
      </>
  )
}

export default Estudio;