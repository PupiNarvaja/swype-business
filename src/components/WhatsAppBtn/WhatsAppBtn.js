import React from 'react';
import './WhatsAppBtn.css';
import wppIcon from '../../assets/images/wppIcon.svg';

const WhatsAppBtn = () => {
    return (
        <div>
            <img src={wppIcon} alt='WhatssApp icon' className='wpp-icon'></img>
        </div>
    )
}

export default WhatsAppBtn;