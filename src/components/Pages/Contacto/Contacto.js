import React, { useRef } from 'react';
import emailjs from 'emailjs-com'
import MainButton from '../../MainButton/MainButton';
import './Contacto.css';

const Contacto = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yk2qvco', 'template_uoln1et', form.current, 'tcEZqyCI-Kc4FMmgN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }

  return (
    <div className='contacto' data-aos="fade-up" data-aos-offset='100'>
      <div className='contacto__form--container'>
        <h2 className='contacto__title'>Consultas? Hablemos!</h2>
        <form ref={form} onSubmit={sendEmail} className='contacto__form'>
          <input placeholder='Mail' type='text' name='email'/>
          <textarea placeholder='Dejanos tu mensaje!' type='text' name='message'></textarea>
          <MainButton text='Enviar' destiny='send'/>
        </form>
      </div>
      <div className='contacto__medios--container'>
        <div>
          <h3 className='contacto__sub-title'>Mail</h3>
          <a href='mailto:swypecreativo@gmail.com' target='_blank' rel='noreferrer noopener'>
            <p className='p-36'>swypecreativo@gmail.com</p>
          </a>
        </div>
        <div>
          <h3 className='contacto__sub-title'>Teléfono</h3>
          <a href='https://wa.me/3513496762' target='_blank' rel='noreferrer noopener'>
            <p className='p-36'>+54 3513496762</p>
          </a>
        </div>
        <div>
          <h3 className='contacto__sub-title'>Instagram</h3>
          <a href='https://www.instagram.com/swypecreativo/' target='_blank' rel='noreferrer noopener'>
            <p className='p-36'>@swypecreativo</p>
          </a>
        </div>
        <div>
          <h3 className='contacto__sub-title'>Facebook</h3>
          <a href='https://www.facebook.com/swypeestudiocreativo/' target='_blank' rel='noreferrer noopener'>
            <p className='p-36'>@swypeestudiocreativo</p>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contacto;
