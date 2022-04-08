import React from 'react';
import MainButton from '../../MainButton/MainButton';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className='contacto'>
      <div className='contacto__form--container'>
        <h2 className='contacto__title'>Consultas? Hablemos!</h2>
        <form className='contacto__form'>
          <input placeholder='Mail' type='text'></input>
          <textarea placeholder='Dejanos tu mensaje!' type='text'></textarea>
          <MainButton text='Enviar' destiny='send'/>
        </form>
      </div>
      <div className='contacto__medios--container'>
        <div>
          <h3 className='contacto__sub-title'>Mail</h3>
          <p className='p-36'>swypecreativo@gmail.com</p>
        </div>
        <div>
          <h3 className='contacto__sub-title'>Teléfono</h3>
          <p className='p-36'>3513496762</p>
        </div>
        <div>
          <h3 className='contacto__sub-title'>Instagram</h3>
          <p className='p-36'>@swypecreativo</p>
        </div>
        <div>
          <h3 className='contacto__sub-title'>Facebook</h3>
          <p className='p-36'>@swypecreativo</p>
        </div>
      </div>
    </div>
  )
}

export default Contacto;
