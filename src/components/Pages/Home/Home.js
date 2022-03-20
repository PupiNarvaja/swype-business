import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import title from '../../../assets/images/mainTitle.png';

const Home = () => {
    return (
        <>
            <div className='home'>
                <div className='home--container container'>
                    <img src={title} alt='Main title' className='home--title'></img>
                </div>
            </div>
            <div className='estudio--container container'>
                <h2>EL ESTUDIO</h2>
                <div className='estudio--p'>
                    <p>Somos un grupo de profesionales de Diseño y Marketing digital.</p>
                    <br></br>
                    <p>Contamos con conocimientos que abarcan una amplia gama de aspectos: diseño, comunicación, publicidad, marketing, entre otros.</p>
                    <br></br>
                    <p>Brindamos servicios de excelencia.</p>
                </div>
                <div className='button--container'>
                    <Link to="/estudio">
                        <button>Conocé más</button>        
                    </Link>
                </div>
            </div>
            <div className='servicios--container container'>
                <h2>SERVICIOS</h2>
                <div className='servicios--wrapper'>
                    <div className='servicios--card card-1'>
                        <h3>Creatividad y Diseño</h3>
                        <div className='circle'></div>
                        <p>Invertí en la empresa que sos, para convertirte en la empresa que querés ser.</p>
                    </div>
                    <div className='servicios--card card-2'>
                        <h3>Marketing y Comunicación</h3>
                        <div className='circle'></div>
                        <p>En los detalles está la diferencia. Más funcionalidad. <br></br>Más impacto.</p>
                    </div>
                    <div className='servicios--card card-3'>
                        <h3>Gestión de redes sociales</h3>
                        <div className='circle'></div>
                        <p>El éxito está en interactuar mientras los demás solo postean.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;