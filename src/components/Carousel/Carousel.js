import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import client from '../../assets/images/client.png';
import '@splidejs/splide/dist/css/splide.min.css';
import prev from '../../assets/images/prev.svg';
import next from '../../assets/images/next.svg';
import './Carousel.css';

const Carousel = () => {
    return(
        <div className='carousel--container'>
            <Splide
                renderControls={ () => (
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev"><img src={prev}></img></button>
                        <button className="splide__arrow splide__arrow--next"><img src={next}></img></button>
                    </div>
                )}
                options={ {
                    type: 'loop',
                    gap: '1rem',
                    pagination: false,
                    perPage: 3,
                    perMove: 1,
                    focus: 'center',
                    speed: 800,
                    breakpoints: {
                        768: {
                            perPage: 2,
                            focus: 1
                        },
                    }
                } }
            >
                <SplideSlide>
                    <div className='max-width-313'>
                        <img src={client} alt='cliente'/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='max-width-313'>
                        <img src={client} alt='cliente'/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='max-width-313'>
                        <img src={client} alt='cliente'/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='max-width-313'>
                        <img src={client} alt='cliente'/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='max-width-313'>
                        <img src={client} alt='cliente'/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className='max-width-313'>
                        <img src={client} alt='cliente'/>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}

export default Carousel;