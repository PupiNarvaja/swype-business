import phone1 from '../../../assets/images/clients/phone1.png';
import phone2 from '../../../assets/images/clients/phone2.png';
import phone3 from '../../../assets/images/clients/phone3.png';

const PhoneCarouselArray = () => {

    const slides = [
        { key:"PhoneCarousel1", content: phone1, alt:"instagram de clientes", id: "PhoneCarousel"},
        { key:"PhoneCarousel2", content: phone2, alt:"instagram de clientes", id: "PhoneCarousel"},
        { key:"PhoneCarousel3", content: phone3, alt:"instagram de clientes", id: "PhoneCarousel"}
    ];

    return slides;
}

export default PhoneCarouselArray;