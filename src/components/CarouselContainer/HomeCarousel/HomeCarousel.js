import { SplideSlide } from '@splidejs/react-splide';
import client from '../../../assets/images/client.png';
import './HomeCarousel';

const HomeCarousel = () => {

    const slides = [];
    
    for (let i = 0; i < 6; i++) {
        slides.push(
            { id:"HomeCarousel" + [i], content: client, alt:"cliente" }
        )
    }

    return (
        // SLIDES.MAP PUEDE SER COMPONENTE APARTE UNIVERSAL PARA LOS 4 CAROUSELES DISTINTOS. PASAR ARRAYS DE C/U A CAROUSEL Y QUE MAPEE Y DEVUELVA <SLIDE />.
        slides.map((slide) => {
            return (
                <SplideSlide key={slide.id}>
                    <div className='max-width-313'>
                        <img src={slide.content} alt={slide.alt}></img>
                    </div>
                </SplideSlide>
            )
        })
    )
}

export default HomeCarousel;