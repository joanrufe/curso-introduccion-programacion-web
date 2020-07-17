// if ... else
const condicion1 = true;
if (condicion1) {
  console.log("condicion1 verdadera");
}

const condicion2 = false;

if (condicion1 && condicion2) {
  console.log("ambas condiciones se cumple");
} else {
  console.log("ninguna condición se cumple");
}

// Bucles
let number = 0;
while (number !== 10) {
  number++;
}

number = 0;
do {
  number++;
} while (number <= 10);

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Switch
const tipoAnimal = "perro";
switch (tipoAnimal) {
  case "perro":
    console.log("Los perros estan bien");
    break;
  case "gato":
    console.log("Los gatos molan");
    break;
  default:
    console.log("A nadie le gusta un " + tipoAnimal);
}
