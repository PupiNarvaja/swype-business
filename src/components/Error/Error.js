import React from 'react';
import MainButton from '../MainButton/MainButton';
import './Error.css';

const Error = () => {
  return (
    <>
        <h1 className='title mb-3_5 error'>ERROR 404</h1>
        <h2 className="title-error error" data-aos="fade-up">Página no encontrada</h2>
        <div data-aos="fade-up">
            <MainButton text="Volver al inicio" destiny="/" />
        </div>
    </>
  )
}

export default Error;