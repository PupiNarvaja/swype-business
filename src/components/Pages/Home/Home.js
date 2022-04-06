import React from 'react';
import './Home.css';
import user from '../../../assets/images/user.png';
import userWebp from '../../../assets/images/userWebp.webp';
import MainButton from '../../MainButton/MainButton';
import Carousel from '../../CarouselContainer/Carousel/Carousel';
import HomeCarouselArray from '../../CarouselContainer/HomeCarousel/HomeCarouselArray';

const Home = () => {
    return (
        <>
            <div className='estudio--container'>
                <h2 className='title'>El Estudio</h2>
                <div className='estudio--p'>
                    <p className='p-24'>Somos un grupo de profesionales de Diseño y Marketing digital.</p>
                    <br></br>
                    <p className='p-24'>Contamos con conocimientos que abarcan una amplia gama de aspectos: diseño, comunicación, publicidad, marketing, entre otros.</p>
                    <br></br>
                    <p className='p-24'>Brindamos servicios de excelencia.</p>
                </div>
                <MainButton text="Conocé más" destiny="/estudio"/>
            </div>
            <div className='servicios--container container'>
                <h2 className='title'>Servicios</h2>
                <div className='servicios--wrapper'>
                    <div className='servicios--card card-1'>
                        <h3>Creatividad y Diseño</h3>
                        <div className='circle'></div>
                        <p className='p-24'>Invertí en la empresa que sos, para convertirte en la empresa que querés ser.</p>
                    </div>
                    <div className='servicios--card card-2'>
                        <h3>Marketing y Comunicación</h3>
                        <div className='circle'></div>
                        <p className='p-24'>En los detalles está la diferencia. Más funcionalidad. <br></br>Más impacto.</p>
                    </div>
                    <div className='servicios--card card-3'>
                        <h3>Gestión de redes sociales</h3>
                        <div className='circle'></div>
                        <p className='p-24'>El éxito está en interactuar mientras los demás solo postean.</p>
                    </div>
                </div>
            </div>
            <div className='equipo--wrapper'>
                <div className='equipo--container container'>
                    <h2 className='title'>El Equipo</h2>
                    <div className='users--container'>
                        <div className='max-width-313'>
                            <picture>
                                <source srcSet={userWebp}></source>
                                <img src={user} alt='miembro del equipo'></img>
                            </picture>
                        </div>
                        <div className='max-width-313'>
                            <picture>
                                <source srcSet={userWebp}></source>
                                <img src={user} alt='miembro del equipo'></img>
                            </picture>
                        </div>
                        <div className='max-width-313'>
                            <picture>
                                <source srcSet={userWebp}></source>
                                <img src={user} alt='miembro del equipo'></img>
                            </picture>
                        </div>
                    </div>
                </div>
                <MainButton text="Conocé más" destiny="/equipo"/>
            </div>
            <div className='clientes--container'>
                <h2 className='title container'>Clientes</h2>
                <Carousel slides={HomeCarouselArray()} perPage={3} perPageBreakPoint={2}/>
                <MainButton text="Conocé más" destiny="/clientes"/>
            </div>
        </>
    )
}

export default Home;
