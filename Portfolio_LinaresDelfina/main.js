const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
  menu.classList.toggle('menu--pegado', window.scrollY > 60);
});


const botonMenu = document.createElement('button');
botonMenu.classList.add('menu_hamburguesa');
botonMenu.setAttribute('aria-label', 'Abrir menú');
botonMenu.innerHTML = '<span></span><span></span><span></span>';
menu.insertBefore(botonMenu, menu.querySelector('.menu_lista'));

botonMenu.addEventListener('click', () => {
  menu.classList.toggle('menu--abierto');
});

document.querySelectorAll('.menu_enlace').forEach(enlace => {
  enlace.addEventListener('click', () => {
    menu.classList.remove('menu--abierto');
  });
});


const elementosAnimados = document.querySelectorAll(
  '.sobremi_foto-lado, .sobremi_texto, .tarjetita, .proyecto'
);

elementosAnimados.forEach(el => el.classList.add('al-aparecer'));

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;

      const hermanos = [...entrada.target.parentElement.querySelectorAll('.al-aparecer')];
      const posicion = hermanos.indexOf(entrada.target);

      setTimeout(() => {
        entrada.target.classList.add('visible');
      }, posicion * 120);

      observador.unobserve(entrada.target);
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
);

elementosAnimados.forEach(el => observador.observe(el));
