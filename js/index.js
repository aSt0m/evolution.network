
// const menuDrop = document.querySelector(".menu-drop");
// const linkDown= document.querySelector(".linkDown");
// const visible = document.querySelector(".visible");


// linkDown.addEventListener('click',()=>{
//     menuDrop.classList.add('.active')

// })





// //**Carrousel */
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: "1",

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//     color: "000",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
//   autoplay: {
//     delay: 5000,
//   },
//   breakpoints: {
//     // when window width is >= 768px
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 20
//     },
//   }
// });


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


// carrito de compras

const car = document.querySelector(".shopping-cart");
const menuShop = document.querySelector('.menu-cart-section');
const menuShopClose = document.querySelector('.menu-cart__close');


car.addEventListener('click',()=>{
menuShop.classList.toggle("activee");
car.style.right = "55rem";

})

menuShopClose.addEventListener('click',()=>{
  
  car.style.right = "15rem";
  menuShop.classList.toggle("activee");
})






