var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    grabCursor: true,
    loop: true, // Asegura que el loop esté activado
    centeredSlides: true, // Esto centra el slide activo

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        991: {
            slidesPerView: 3, // Mostrar 3 slides a partir de pantallas más grandes
        }
    },

    // Esto permitirá un efecto suave en el paso de los slides
    autoplay: {
        delay: 3000, // Cambiar automáticamente cada 3 segundos
        disableOnInteraction: false, // No detener autoplay al interactuar
    }
});
