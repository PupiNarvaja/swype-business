import React from 'react';
import mail from '../../assets/images/mail.png';
import whatsapp from '../../assets/images/whatsapp.png';
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer--container container'>
                <h2 className='title'>CONTACTO</h2>
                <h2 className='title title--clientes'>Contacto</h2>
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


