import React from 'react';
import './WhatsAppBtn.css';
import wppIcon from '../../assets/images/wppIcon.svg';

const WhatsAppBtn = () => {
    return (
        <div>
            <img src={wppIcon} className='wpp-icon'></img>
        </div>
    )
}

export default WhatsAppBtn;