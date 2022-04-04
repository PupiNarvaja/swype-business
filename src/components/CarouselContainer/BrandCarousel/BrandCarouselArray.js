import logoGordon from '../../../assets/images/clients/client9.png';
import image1Gordon from '../../../assets/images/clients/gordon1.png';
import image2Gordon from '../../../assets/images/clients/gordon2.png';

import logoCalaca from '../../../assets/images/clients/client6.png';
import image1Calaca from '../../../assets/images/clients/calaca1.png';
import image2Calaca from '../../../assets/images/clients/calaca2.png';

import logoBergese from '../../../assets/images/clients/client5.png';
import image1Bergese from '../../../assets/images/clients/bergese1.png';
import image2Bergese from '../../../assets/images/clients/bergese2.png';

import logoJz from '../../../assets/images/clients/client13.png';
import image1Jz from '../../../assets/images/clients/jz1.png';
import image2Jz from '../../../assets/images/clients/jz2.png';

const BrandCarouselArray = () => {

    const slides = [
        { key:"BrandCarousel1", logo: logoGordon, content1: "Emprendimiento de comida take-away y delivery.", content2: "Jesús María.", content3: "Trabajo realizado: Creación de identidad, diseño gráfico, creación de estrategia y asesoría de marketing digital, gestión de redes sociales.", alt:"emprendimiento de comida delivery", image1: image1Gordon, image2: image2Gordon, id: "BrandCarousel"},
        { key:"BrandCarousel2", logo: logoCalaca, content1: "Venta de insumos para el autocultivo y consumo de cannabis y venta de tabaco.", content2: "Colonia Caroya.", content3: "Trabajos realizados: Creación de identidad, diseño gráfico, creación de estrategia y asesoría de marketing, gestión de redes sociales.", image1: image1Calaca, image2: image2Calaca, id: "BrandCarousel"},
        { key:"BrandCarousel3", logo: logoBergese, content1: "Venta de materiales para la construcción.", content2: "Colonia Caroya.", content3: "Trabajos realizados: Estrategia de marketing digital, rediseño de logo, gestión de redes sociales.", image1: image1Bergese, image2: image2Bergese, id: "BrandCarousel"},
        { key:"BrandCarousel4", logo: logoJz, content1: "Consultorio de estética.", content2: "Jesús María.", content3: "Trabajos realizados: Diseño de identidad.", image1: image1Jz, image2: image2Jz, id: "BrandCarousel"}
    ];
    
    return slides;
}

export default BrandCarouselArray;