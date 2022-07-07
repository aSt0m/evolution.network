// Spinner

//   const spinner = document.querySelector('.spinner');
// window.addEventListener('load',()=>{
//   spinner.classList.toggle='spinner-2'
// })

  const spinner = document.querySelector('.spinner');
window.addEventListener('load',()=>{
  spinner.classList.toggle('spinner-2')
})


// const menuDrop = document.querySelector(".menu-drop");
// const linkDown= document.querySelector(".linkDown");
// const visible = document.querySelector(".visible");


// linkDown.addEventListener('click',()=>{
//     menuDrop.classList.add('.active')

// })






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
const containerDrop = document.querySelector('.container-menu-drop');
const categoria = document.querySelector(".categoria");

// categoria.addEventListener('click',()=>{
//   containerDrop.classList.toggle('act')
 
// })

car.addEventListener('click',()=>{
menuShop.classList.toggle("activee");
car.style.right = "55rem";

})

menuShopClose.addEventListener('click',()=>{
  
  // car.style.right = "15rem";
  menuShop.classList.toggle("activee");
})

// const variable = document.querySelectorAll('.nav-down')
// const link = document.querySelectorAll('.link-2')
// link.forEach((element,i) => {
//   console.log(element,i)
  

  
  
// });






