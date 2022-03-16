import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import title from '../../assets/images/mainTitle.png'

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='container'>
          <img src={title} alt='Main title' className='home--title'></img>
        </div>
      </div>
      <div className='estudio--container'>
        <h2>EL ESTUDIO</h2>
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