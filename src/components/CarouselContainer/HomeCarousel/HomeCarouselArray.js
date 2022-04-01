import client from '../../../assets/images/client.png';

const HomeCarouselArray = () => {
    
    const slides = [];
    
    for (let i = 0; i < 3; i++) {
        slides.push(
            { id:"HomeCarousel" + [i], content: client, alt:"cliente" }
        )
    }
    return slides;
}

export default HomeCarouselArray;