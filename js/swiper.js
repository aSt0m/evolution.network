

  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'vertical',
  //   loop: true,
  
  //   // If we need pagination
  //   // pagination: {
  //   //   el: '.swiper-pagination',
  //   // },
  
  //   // Navigation arrows
  //   // navigation: {
  //   //   nextEl: '.swiper-button-next',
  //   //   prevEl: '.swiper-button-prev',
  //   // },
  
  //   // And if we need scrollbar
  //   // scrollbar: {
  //   //   el: '.swiper-scrollbar',
  //   // },
  //   autoplay: {
  //       delay: 3000,
  //     },
  // });
  

/** carrousel header */
var swipeHeader = new Swiper(".swiper-header", {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  slidesPerView: "1",

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
   
  
  }
});
  


//**Carrousel */
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: "1",

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    color: "000",
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
});
