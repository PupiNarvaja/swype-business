import React from 'react';
import mail from '../../assets/images/icons/mail.png';
import whatsapp from '../../assets/images/icons/whatsapp.png';
import instagram from '../../assets/images/icons/instagram.png';
import facebook from '../../assets/images/icons/facebook.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer--container container'>
                <h2 className='title'>Contacto</h2>
                <div className='footer__contactDivs'>
                    <div className='footer__bubble'>
                        <div className='contact--div'>
                            <img src={mail} alt='mail'></img>
                            <a href='mailto:swypecreativo@gmail.com' target='_blank' rel='noreferrer noopener'>
                                <p className='p-20'>swypecreativo@gmail.com</p>
                            </a>
                        </div>
                        <div className='contact--div'>
                            <img src={whatsapp} alt='whatsapp'></img>
                            <a href='tel:3513496762' target='_blank' rel='noreferrer noopener'>
                                <p className='p-20'>3513496762</p>
                            </a>
                        </div>
                    </div>
                    <div className='footer__bubble'>
                        <div className='contact--div'>
                            <img src={instagram} alt='instagram'></img>
                            <a href='https://www.instagram.com/swypecreativo/' target='_blank' rel='noreferrer noopener'>
                                <p className='p-20'>@swypecreativo</p>
                            </a>
                        </div>
                        <div className='contact--div'>
                            <img src={facebook} alt='facebook'></img>
                            <a href='https://www.facebook.com/swypeestudiocreativo/' target='_blank' rel='noreferrer noopener'>
                                <p className='p-20'>@swypeestudiocreativo</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;