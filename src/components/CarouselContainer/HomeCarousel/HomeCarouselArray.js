import client from '../../../assets/images/client.png';
import clientB from '../../../assets/images/clientWebp.webp'

const HomeCarouselArray = () => {
    
    const slides = [];
    
    for (let i = 0; i < 3; i++) {
        slides.push(
            { key:"HomeCarousel" + [i], content: client, contentB: clientB, alt:"cliente", id: "HomeCarousel" }
        )
    }
    return slides;
}

export default HomeCarouselArray;