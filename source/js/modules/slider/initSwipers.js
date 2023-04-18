const initSwipers = () => {
  if (document.querySelector('.comments__swiper')) {
    const commentsSwiper = new Swiper('.comments__swiper', {
      direction: 'horizontal',
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 500,
      autoHeight: true,

      navigation: {
        nextEl: '.comments__button--next',
        prevEl: '.comments__button--prev',
      },
    });
  }
};

export {initSwipers};
