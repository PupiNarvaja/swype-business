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
                            <p>swypecreativo@gmail.com</p>
                        </div>
                        <div className='contact--div'>
                            <img src={whatsapp} alt='whatsapp'></img>
                            <p>3513496762</p>
                        </div>
                    </div>
                    <div className='footer__bubble'>
                        <div className='contact--div'>
                            <img src={instagram} alt='instagram'></img>
                            <p>@swypecreativo</p>
                        </div>
                        <div className='contact--div'>
                            <img src={facebook} alt='facebook'></img>
                            <p>@swypecreativo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;