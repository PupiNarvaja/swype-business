import React from "react";
import './MainContainer.css';

const MainContainer = ({ title, typeOfTitle, content }) => {
    return (
        <>
            <div className='main'>
                <div className='main--container container'>
                    {typeOfTitle === 'img' ?
                    <img src={title} alt='Main title' className='main--title--img'></img>
                    :
                    <h1 className='main--title'>{title}</h1>}
                </div>
            </div>
            {content}
        </>
    )
}

export default MainContainer;