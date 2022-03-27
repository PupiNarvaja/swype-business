import React from 'react';
import { Link } from 'react-router-dom';
import './MainButton.css';

const MainButton = ({text, destiny}) => {
    return (
        <div className='button--container'>
            <Link to={destiny}>
                <button className='mainButton'>{text}</button>        
            </Link>                    
        </div>
    )
}

export default MainButton;