
// const menuDrop = document.querySelector(".menu-drop");
// const linkDown= document.querySelector(".linkDown");
// const visible = document.querySelector(".visible");


// linkDown.addEventListener('click',()=>{
//     menuDrop.classList.add('.active')

// })


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
    delay: 5000,
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


/**Hamburguer menu */
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.nav-down-right');
const barras = document.querySelectorAll('.ham span');




ham.addEventListener('click', () => {
  enlaces.classList.toggle('activado');
  barras.forEach(child => {
    child.classList.toggle('animado')
  });
  ham.classList.toggle('gira');

});











