const persona = {
  nombre: "Alex Wang",
  edad: 32,
  genero: "masculino",
  saludo: function() {
    console.log("Hola, Soy " + this.nombre + " y tengo " + this.edad);
  }
};

// Se puede acceder a las propiedades del objeto de varias formas
console.log(persona.edad);
console.log(persona["genero"]);

// O llamar a sus métodos
persona.saludo();

// Se pueden sobreescribir el valor de las propiedades con el
// operador de asignación.
persona.genero = "femenino";

// O añadir uno nuevo
persona.nacionalidad = "china";

// Object es el prototipo base para otros tipos de datos
// como Array (colección de elementos)
const array = [1, 2, 3];

// Cada entrada del array tiene como nombre de propiedad un
// número empezando por 0 e incrementandolo en 1 por cada nuevo elemento.
console.log("primera entrada de la colección", array[0]);
console.log("segunda entrada de la colección", array[1]);

// Además añade métodos especificos para manejar este tipo de dato
// como por ejemplo el método forEach
array.forEach(function(elemento, indice) {
  console.log(`El elemento número ${indice} es ${elemento}`);
});

// el método map que transforma un array en otro array metiante un callback
const newArray = array.map(function(elem) {
  return elem + elem;
});

// o el método join para unir los elementos del array
console.log(newArray.join(" - "));

// Otros tipos de datos como Number, Boolean o String
// tammbién contienen sus propios métodos
console.log("Mola".concat(" mazo"));
