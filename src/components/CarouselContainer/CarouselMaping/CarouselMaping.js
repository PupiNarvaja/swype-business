import HomeCarousel from "../HomeCarousel/HomeCarousel";

const CarouselMaping = ({ slides }) => {
    // Mapeamos el array recibido en Carousel para enviar por cada slide del array, un componente de cada carousel.
    return (
        <>
            {slides.map((slide) => {
                return <HomeCarousel slide={slide} key={slide.id} />
            })}
        </>
    )
}

export default CarouselMaping;