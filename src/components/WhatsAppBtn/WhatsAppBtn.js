import React from 'react';
import './WhatsAppBtn.css';
import wppIcon from '../../assets/images/wppIcon.svg';
import wppIconWebp from '../../assets/images/wppIconWebp.webp';

const WhatsAppBtn = () => {
    return (
        <div>
            <picture>
                <source srcSet={wppIconWebp}></source>
                <img src={wppIcon} alt='WhatssApp icon' className='wpp-icon'></img>
            </picture>
        </div>
    )
}

export default WhatsAppBtn;