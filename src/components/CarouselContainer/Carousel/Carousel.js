import React from 'react';
import { Splide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import prev from '../../../assets/images/prev.svg';
import next from '../../../assets/images/next.svg';
import './Carousel.css';

const Carousel = ({ whichCarousel, perPage, perPageBreakPoint }) => {
    return(
        <div className='carousel--container'>
            <Splide
                renderControls={ () => (
                    <div className="splide__arrows">
                        <button className="splide__arrow splide__arrow--prev"><img src={prev} alt='Flecha previa'></img></button>
                        <button className="splide__arrow splide__arrow--next"><img src={next} alt='Flecha siguiente'></img></button>
                    </div>
                )}
                options={ {
                    type: 'loop',
                    gap: '1rem',
                    pagination: false,
                    perPage: perPage,
                    perMove: 1,
                    focus: 'center',
                    speed: 800,
                    breakpoints: {
                        768: {
                            perPage: perPageBreakPoint,
                            focus: 1
                        },
                    }
                } }
            >
                {whichCarousel}
            </Splide>
        </div>
    )
}

export default Carousel;