import { Carousel } from 'bootstrap';

// Seleciona o elemento do carrossel no DOM
const carouselElement = document.querySelector('#ofertasCarousel');

// Verifica se o elemento foi encontrado antes de prosseguir
if (carouselElement instanceof HTMLElement) {
  const myCarousel = new Carousel(carouselElement, {
    interval: 3000,
    ride: 'carousel',
    wrap: true
  });
} else {
  console.error("Elemento do carrossel #ofertasCarousel não foi encontrado.");
}