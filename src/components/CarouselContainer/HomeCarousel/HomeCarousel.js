import { SplideSlide } from '@splidejs/react-splide';

const HomeCarousel = ({ slide }) => {
    return (
        <SplideSlide>
            <div className='max-width-313'>
                <img src={slide.content} alt={slide.alt}></img>
            </div>
        </SplideSlide>
    )
}

export default HomeCarousel;