import React from 'react';
import { Link } from 'react-router-dom';
import title from '../../../assets/images/mainTitle.png';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='container'>
          <img src={title} alt='Main title' className='home--title'></img>
        </div>
      </div>
      <div className='estudio--container'>
        <h2 className='title'>El Estudio</h2>
        <div className='estudio--p'>
          <p>Somos un grupo de profesionales de Diseño y Marketing digital.</p>
          <br></br>
          <p>Contamos con conocimientos que abarcan una amplia gama de aspectos: diseño, comunicación, publicidad, marketing, entre otros.</p>
          <br></br>
          <p>Brindamos servicios de excelencia.</p>
        </div>
        <Link to="/estudio">
          <button>Conocé más</button>        
        </Link>
      </div>
    </>
  )
}

export default Home;