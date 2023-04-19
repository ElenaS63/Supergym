const initSwipers = () => {
  if (document.querySelector('.coaches__swiper')) {
    const coachesSwiper = new Swiper ('.coaches__swiper', { // eslint-disable-line
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',


      navigation: {
        nextEl: '.coaches__button--next',
        prevEl: '.coaches__button--prev',
      },
    });
  }

  if (document.querySelector('.comments__swiper')) {
    const commentsSwiper = new Swiper('.comments__swiper', { // eslint-disable-line
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
