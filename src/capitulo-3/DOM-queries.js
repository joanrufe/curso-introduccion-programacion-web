// Seleccionando elementos
let container = document.getElementById("contenedor");

// Equivalente usando selectores CSS
container = document.querySelector("#contenedor");

// Podemos modificar su contenido con
container.innerHTML = "Container <b>modificado</b>";

// Tambien podemos añadir atributos
container.setAttribute("class", "newclass");

console.log(container.getAttribute("class"));
