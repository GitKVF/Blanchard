document.addEventListener('DOMContentLoaded', () => {
    // gallary slider

  const gallarySlider = document.querySelector('.gallery__swiper-container');

  var gallarySwiper = new Swiper(gallarySlider, {
    pagination: {
      el: '.gallery__swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.gallery-button-next',
      prevEl: '.gallery-button-prev'
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    slidersPerColumnFill: 'row',
    breakpoints:{
      667:{
        slidesPerView: 2,
        slidesPerGroup: 3,
        spaceBetween: 34,
      },

      1024:{
        spaceBetween: 30,
        slidesPerView: 2,
        slidesPerGroup: 2,
        },

      1330:{
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
      }
    }
  });

  // events swiper

  const eventsSlider = document.querySelector('.events__swiper-container');

  var eventsSwiper = new Swiper(eventsSlider, {
    
    slidesPerView: 1,
    slidesPerGroup: 1,
    
    spaceBetween: 30,

    pagination: {
      el:'.swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.events__button-next',
      prevEl: '.events__button-prev',
    },
    

    breakpoints:{
      668: {
        slidesPerView: 2,
        slidesPerGroup:2,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 30,
      },

      1600:{
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 1,
      }
    }
  })


  // partners swiper

  const partnersSlider = document.querySelector('.partners__swiper-container');

  var partnersSwiper = new Swiper(partnersSlider, {
    slideClass: ('partners__swiper-slide'),
    slidesPerView: 1,
    slidesPerGroup: 1,
    
    spaceBetween: 30,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
      668: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },

      1600:{
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 1,
      }
    }
  })
})
