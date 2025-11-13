/* main.js – efectos épicos para Cow Abduction 404 */

// ------------------------------
// CONFIGURACIÓN DE ESTRELLAS FUGACES
// ------------------------------
const dynamicStarsContainer = document.querySelector(".dynamic-stars");

function createShootingStar() {
  const star = document.createElement("div");
  star.classList.add("dynamic-star");

  const startX = Math.random() * window.innerWidth;
  const startY = (Math.random() * window.innerHeight) / 2;
  const endX = startX + (Math.random() * 200 - 100);
  const endY = startY + 400 + Math.random() * 100;

  star.style.left = startX + "px";
  star.style.top = startY + "px";
  star.style.setProperty("--x-end", endX + "px");
  star.style.setProperty("--y-end", endY + "px");
  star.style.animationDuration = 0.8 + Math.random() * 0.8 + "s";

  dynamicStarsContainer.appendChild(star);

  setTimeout(() => star.remove(), 1500);
}

setInterval(createShootingStar, 400);

// ------------------------------
// PLANETAS FLOTANTES DINÁMICOS
// ------------------------------
const planetsContainer = document.querySelector(".planets");
const planets = [];

function createPlanet(index) {
  const planet = document.createElement("img");
  planet.src =
    "https://raw.githubusercontent.com/ruvebal/web-atelier-udit/main/lessons/en/404/hackathon/planet.png";
  planet.classList.add("planet");

  // posición inicial aleatoria
  planet.style.left = Math.random() * window.innerWidth + "px";
  planet.style.top = Math.random() * window.innerHeight + "px";

  // velocidad y dirección aleatoria
  const speedX = Math.random() * 0.3 + 0.1; // px por frame
  const speedY = Math.random() * 0.3 + 0.1;

  // tamaño aleatorio
  const size = 30 + Math.random() * 50;
  planet.style.width = size + "px";

  planetsContainer.appendChild(planet);

  planets.push({
    el: planet,
    x: parseFloat(planet.style.left),
    y: parseFloat(planet.style.top),
    speedX,
    speedY,
  });
}

// Crear 7 planetas
for (let i = 0; i < 7; i++) createPlanet(i);

// Animar planetas
function animatePlanets() {
  planets.forEach((p) => {
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x > window.innerWidth) p.x = -parseFloat(p.el.style.width);
    if (p.y > window.innerHeight) p.y = -parseFloat(p.el.style.height);

    p.el.style.left = p.x + "px";
    p.el.style.top = p.y + "px";
  });
  requestAnimationFrame(animatePlanets);
}
animatePlanets();

// ------------------------------
// PARTICULAS DEL HAZ DEL UFO
// ------------------------------
const beam = document.querySelector(".beam");

function createBeamParticle() {
  const particle = document.createElement("div");
  particle.classList.add("beam-particle");
  particle.style.position = "absolute";
  particle.style.width = "4px";
  particle.style.height = "4px";
  particle.style.background = "rgba(0,255,178,0.8)";
  particle.style.borderRadius = "50%";
  particle.style.left = Math.random() * 140 - 70 + "px";
  particle.style.top = Math.random() * 240 + "px";
  particle.style.opacity = 0;

  beam.appendChild(particle);

  particle.animate(
    [
      { transform: "translateY(0)", opacity: 0 },
      { transform: "translateY(-20px)", opacity: 1 },
      { transform: "translateY(-40px)", opacity: 0 },
    ],
    {
      duration: 1000 + Math.random() * 500,
      iterations: 1,
    }
  );

  setTimeout(() => particle.remove(), 1500);
}

setInterval(createBeamParticle, 150);

// ------------------------------
// INTERACCIÓN DEL UFO CON EL CURSOR
// ------------------------------
const ufo = document.querySelector(".ufo");

document.addEventListener("mousemove", (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  const deltaX = (e.clientX - centerX) / 50;
  const deltaY = (e.clientY - centerY) / 50;

  ufo.style.transform = `translateY(${
    Math.sin(Date.now() / 600) * -10 + deltaY
  }px) rotate(${Math.sin(Date.now() / 1000)}deg) translateX(${deltaX}px)`;
});

// ------------------------------
// VACA ABDUCIDA MÁS ÉPICA
// ------------------------------
const cow = document.querySelector(".cow");

function animateCow() {
  const tilt = Math.sin(Date.now() / 800) * 5;
  const lift = Math.sin(Date.now() / 600) * 15;
  cow.style.transform = `translateX(-50%) translateY(${-lift}px) rotate(${tilt}deg) scale(1.05)`;
  requestAnimationFrame(animateCow);
}
animateCow();

// ------------------------------
// ZOOM SUAVE DE ESCENA
// ------------------------------
const scene = document.querySelector(".scene");
function sceneZoomEffect() {
  const scale = 1 + Math.sin(Date.now() / 3000) * 0.015;
  scene.style.transform = `scale(${scale})`;
  requestAnimationFrame(sceneZoomEffect);
}
sceneZoomEffect();

// ------------------------------
// MENSAJE DINÁMICO
// ------------------------------
const messages = [
  "Oops! Cow abducted by UFOs!",
  "404: The cow has left the planet!",
  "Aliens say hi! Page missing.",
  "The herd has been beamed up!",
  "Out of this world… literally!",
];

const messageElement = document.getElementById("dynamicMessage");
let msgIndex = 0;

function changeMessage() {
  // Fade out
  messageElement.style.opacity = 0;

  setTimeout(() => {
    messageElement.textContent = messages[msgIndex];
    // Fade in
    messageElement.style.opacity = 1;

    msgIndex = (msgIndex + 1) % messages.length;
  }, 500);
}

// Cambiar mensaje cada 4 segundos
setInterval(changeMessage, 6000);
