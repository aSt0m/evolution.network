
// const menuDrop = document.querySelector(".menu-drop");
// const linkDown= document.querySelector(".linkDown");
// const visible = document.querySelector(".visible");


// linkDown.addEventListener('click',()=>{
//     menuDrop.classList.add('.active')

// })


// /** carrousel */
// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "2",
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 300,
//       modifier: 2,
//       slideShadows: true,
//     },
//     autoplay: {
//       delay: 5000,
//     },
//    loop: true,
//   });
  

//**Carrousel */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: "3",
  
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
  });
  

   /**Hamburguer menu */
 const ham = document.querySelector('.ham');
 const enlaces = document.querySelector('.nav-down-right');
 const barras = document.querySelectorAll('.ham span');




 ham.addEventListener('click', () => {
     enlaces.classList.toggle('activado');
     barras.forEach(child => {
         child.classList.toggle('animado')});
     ham.classList.toggle('girar');  
     
 });











