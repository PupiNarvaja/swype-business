const CommentsCarouselArray = () => {
    const slides = [];

    const swype = ["swype".toUpperCase()];

    for (let i = 0; i < 3; i++) {
        slides.push({
            key: "CommentsCarousel" + [i],
            content:
                "Me encanta trabajar con " +
                swype +
                "!! Porque además de ser chicos 2.0 son muy atentos con sus trabajos, entregan en tiempo y forma, tienen ideas muy modernas y diálogo abierto!!!! Ni lo dudes, súmate a " +
                swype +
                "!!!",
            author: "Iné Pagnutti",
            alt: "Comentarios de clientes",
            id: "CommentsCarousel",
        });
    }

    return slides;
};

export default CommentsCarouselArray;
