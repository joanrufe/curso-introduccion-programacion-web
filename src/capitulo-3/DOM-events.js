// Manejadores de eventos

// Boton que incrementa la cuenta en 1 con cada click
const botonContador = document.getElementById("contador");
const textoCuenta = document.getElementById("cuenta");

let cuenta = 0;

textoCuenta.innerHTML = cuenta;

botonContador.addEventListener("click", function(event) {
  textoCuenta.innerHTML = cuenta++;
});

// Imagen que solo se muestra al pasar el raton por encima
const imagenContainer = document.querySelector(".img-oculta");
const imgFondo = imagenContainer.querySelector(".img-fondo");
const imagen = imagenContainer.querySelector("img");

imagenContainer.addEventListener("mouseenter", function(event) {
  imgFondo.style.display = "none";
  imagen.style.display = "";
});

imagenContainer.addEventListener("mouseleave", function(event) {
  imgFondo.style.display = "";
  imagen.style.display = "none";
});
