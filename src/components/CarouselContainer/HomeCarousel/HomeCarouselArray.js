import client1 from '../../../assets/images/clients/client1.png';
import client2 from '../../../assets/images/clients/client2.png';
import client3 from '../../../assets/images/clients/client3.png';
import client4 from '../../../assets/images/clients/client4.png';
import client5 from '../../../assets/images/clients/client5.png';
import client6 from '../../../assets/images/clients/client6.png';

/* ---- Webp format ---- */
import client1Webp from '../../../assets/images/clients/client1Webp.webp';
import client2Webp from '../../../assets/images/clients/client2Webp.webp';
import client3Webp from '../../../assets/images/clients/client3Webp.webp';
import client4Webp from '../../../assets/images/clients/client4Webp.webp';
import client5Webp from '../../../assets/images/clients/client5Webp.webp';
import client6Webp from '../../../assets/images/clients/client6Webp.webp';

const HomeCarouselArray = () => {
    
    const slides = [
        { key:"HomeCarousel1", content: client1, contentB: client1Webp, alt:"cliente", id: "HomeCarousel" },
        { key:"HomeCarousel2", content: client2, contentB: client2Webp, alt:"cliente", id: "HomeCarousel" },
        { key:"HomeCarousel3", content: client3, contentB: client3Webp, alt:"cliente", id: "HomeCarousel" },
        { key:"HomeCarousel4", content: client4, contentB: client4Webp, alt:"cliente", id: "HomeCarousel" },
        { key:"HomeCarousel5", content: client5, contentB: client5Webp, alt:"cliente", id: "HomeCarousel" },
        { key:"HomeCarousel6", content: client6, contentB: client6Webp, alt:"cliente", id: "HomeCarousel" }
    ];
    
    return slides;
}

export default HomeCarouselArray;