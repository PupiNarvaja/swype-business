import React from 'react';
import logo from '../../../assets/images/logo.png';
import title from '../../../assets/images/title-estudio.png';
import './Estudio.css';

const Estudio = () => {
  return (
      <>
        <div className='home'>
            <div className='container'>
                <img src={title} alt='Main title' className='home--title'></img>
            </div>
        </div>
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