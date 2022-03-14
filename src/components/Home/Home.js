import React from 'react';
import './Home.css';
import title from '../../assets/images/mainTitle.png'

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <img src={title} className='home--title'></img>
      </div>
    </div>
  )
}

export default Home;