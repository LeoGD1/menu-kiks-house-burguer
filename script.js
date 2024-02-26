const loaderContenedor = document.querySelector('.loader');
const loaderTop = document.querySelector('.loader__top');
const loaderBottom = document.querySelector('.loader__bottom');
const loaderBtn = document.querySelector('.loader__btn');
const loaderLogo = document.querySelector('.loader__imagen');


loaderBtn.addEventListener('click', e => {
  e.preventDefault();

  loaderLogo.style.animation = 'girarLogo 1s ease-in infinite';

  loaderTop.classList.add('moveTop');
  loaderBottom.classList.add('moveBottom');
  loaderContenedor.style.pointerEvents = 'none';

  document.body.style.overflow = 'visible';

});



/* SWIPER */

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  autoplay: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },

  // Navigation arrows
  /* navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, */

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


/* menu */

const btnMenu = document.querySelector('.nav__menu');
const listaMenu = document.querySelector('.nav__ul');
const lineaSpan =  document.querySelectorAll('.nav__span');
const logoAmarillo = document.querySelector('.nav__logo');
const listaLi = document.querySelectorAll('.nav__li');
let menuAbierto = false;
let delayAnimacion = 0;

btnMenu.addEventListener('click', () => {

  listaMenu.classList.toggle('active');

  if(menuAbierto == false) {
    for(let i = 0; i < lineaSpan.length; i++) {
      lineaSpan[i].style.backgroundColor = '#FFC500';
    }

    for(let i = 0; i < listaLi.length; i++) {
      // Incrementa el delay para cada elemento basado en su índice
      let delayActual = delayAnimacion + i * 200; // Aumenta en 200ms para cada elemento
      
      // Establece el delay de animación y la animación para cada elemento
      listaLi[i].style.animation = `animacionEnlaces .5s ease-out ${delayActual}ms forwards`;
    }
    logoAmarillo.src = 'images/icono_hamburguesa-amarillo.svg';
    document.body.style.overflow = 'hidden';
    menuAbierto = true;

  } else {

    for(let i = 0; i < lineaSpan.length; i++) {
      lineaSpan[i].style.backgroundColor = '#000';
    }

    for(let i = 0; i < listaLi.length; i++) {
      listaLi[i].style.animation = 'none';
    }
    logoAmarillo.src = 'images/icono_hamburguesa-negro.svg';
    document.body.style.overflow = 'visible';
    menuAbierto = false;

  }

});

