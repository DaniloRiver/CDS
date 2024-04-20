var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Wrap every letter in a span
document.addEventListener("DOMContentLoaded", function() {
var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml14 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0,1],
    translateX: [40,0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i
  }).add({
    targets: '.ml14',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

});

var map = L.map('map').setView([14.10335884452478, -87.20285956451028], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var myLayer = L.marker([14.10335884452478, -87.20285956451028]).addTo(map)
    .bindPopup('A pretty CSS popup.<br> Easily customizable.');

// Define los estilos que deseas aplicar a la capa
var nuevoEstilo = {
    color: 'red',         // Color del borde
    fillColor: 'yellow',  // Color de relleno
    weight: 2,            // Grosor del borde en píxeles
    opacity: 0.5,         // Opacidad de la capa
    fillOpacity: 0.2      // Opacidad del relleno
};
var zoomLevel = 28;

// Aplica los nuevos estilos a la capa
myLayer.setStyle(nuevoEstilo);
myLayer.setZoom(zoomLevel);

  // Función para detener la animación de rotación cuando el cursor está sobre la tarjeta
function stopRotation(card) {
    card.style.transition = 'none';
}

// Función para reanudar la animación de rotación cuando el cursor sale de la tarjeta
function resumeRotation(card) {
    card.style.transition = 'transform 0.8s';
}
