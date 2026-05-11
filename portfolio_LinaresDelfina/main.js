/* main.js — portfolio de Delfina */
const menu = document.querySelector('.menu');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    menu.classList.add('menu--pegado');
  } else {
    menu.classList.remove('menu--pegado');
  }
});
const botonMenu = document.createElement('button');
botonMenu.classList.add('menu__hamburguesa');
botonMenu.setAttribute('aria-label', 'Abrir menú');
botonMenu.innerHTML = '<span></span><span></span><span></span>';
menu.insertBefore(botonMenu, menu.querySelector('.menu__lista'));
botonMenu.addEventListener('click', () => {
  menu.classList.toggle('menu--abierto');
});
document.querySelectorAll('.menu__enlace').forEach(enlace => {
  enlace.addEventListener('click', () => {
    menu.classList.remove('menu--abierto');
  });
});
const cosas = document.querySelectorAll(
  '.sobremi__foto-lado, .sobremi__texto, .tarjetita, .proyecto'
);
cosas.forEach(cosa => cosa.classList.add('al-aparecer'));
const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        const hermanos = [...entrada.target.parentElement.querySelectorAll('.al-aparecer')];
        const posicion = hermanos.indexOf(entrada.target);
        setTimeout(() => {
          entrada.target.classList.add('visible');
        }, posicion * 120);
        observador.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);
cosas.forEach(cosa => observador.observe(cosa));
