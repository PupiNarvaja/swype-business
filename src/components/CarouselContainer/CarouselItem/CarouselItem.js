import { SplideSlide } from '@splidejs/react-splide';
import './CarouselItem.css';

const CarouselItem = ({ slide }) => {
    return (
        <SplideSlide>
            {slide.id === "HomeCarousel" ? 
            <div className='max-width-313'>
                <img src={slide.content} alt={slide.alt}></img>
            </div>
                : slide.id === "PhoneCarousel" ?
            <div className='max-width-374'>
                <img src={slide.content} alt={slide.alt}></img>
            </div>
                : slide.id === "BrandCarousel" ?
            <div className='brandCarousel'>
                <div className='brandCarousel__logo--container'>
                    <img src={slide.logo} className='brandCarousel__logo' alt={slide.alt}></img>
                    <div className='shadow-box'>
                        <div className='inner--shadow'>
                            <p className='p-31'>{slide.content1}</p>
                            <p className='p-31'>{slide.content2}</p>
                            <p className='p-31'>{slide.content3}</p>
                        </div>
                    </div>               
                </div>
                <div className='brandCarousel__images--container'>
                    <img src={slide.image1} alt={slide.alt}></img>
                    <img src={slide.image2} alt={slide.alt}></img>
                </div>
            </div>
                :
            <div className='CommentsCarousel--container'>
                <p className='mb-1_66 p-31'>{slide.content}</p>
                <p className='strong p-31'>-{slide.author}</p>
            </div>
            }
        </SplideSlide>
    )
}

export default CarouselItem;