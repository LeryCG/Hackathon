const scene = document.querySelector(".scene");
const ufo = document.querySelector(".ufo");
const cow = document.querySelector(".cow");
const beam = document.querySelector(".beam");
const stars = document.querySelector(".stars");
const twinkling = document.querySelector(".twinkling");
const nebula = document.querySelector(".nebula");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = scrollY / maxScroll;

  // Zoom de toda la escena
  const scale = 1 + scrollFraction * 0.08; // Zoom hasta 8%
  scene.style.transform = `scale(${scale})`;

  // Movimiento sutil de la nave y vaca
  ufo.style.transform = `translateY(${scrollFraction * -20}px)`;
  cow.style.transform = `translateX(-50%) translateY(${
    scrollFraction * -25
  }px)`;

  // Intensidad del haz
  beam.style.opacity = 0.25 + scrollFraction * 0.5;
  beam.style.filter = `blur(${2 + scrollFraction * 3}px)`;

  // Fondo dinámico
  stars.style.transform = `translateY(${-scrollFraction * 50}px)`;
  twinkling.style.transform = `translateY(${-scrollFraction * 80}px)`;
  nebula.style.transform = `translate(${scrollFraction * 30}px, ${
    -scrollFraction * 20
  }px)`;
});
