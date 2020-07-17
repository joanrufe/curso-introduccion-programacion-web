// Declaración/definición de la función
function miFuncion(parametro) {
  console.log("el parametro es ", parametro);
}

// llamada a la función
miFuncion("mola");
miFuncion(10);

// Una función puede devolver o no algún valor
function returnItSelf(param) {
  return param;
}
console.log("returnItSelf function devuelve: ", returnItSelf("hola"));
// se pueden declarar funciones anonimas pero
// deben ser asignadas de alguna manera
// En este caso almacenamos la funcion en la siguiente variable
const double = function(param) {
  return param + param;
};

console.log("double result ", double(10));

// Existe un nuevo tipo de funciones con sintaxis simplificada
// llamadas funciones flecha (Arrow functions) y són anónimas
const square = num => {
  return num * num;
};

console.log("double result ", square(2));

// Se puede simplificar más la sintaxis con return implicitos
const sum = (num1, num2) => num1 * num2;

console.log("double result ", sum(3, 2));

// Las funciones se pueden pasar como parámetros
function superFun(number, callback) {
  callback(number);
}

// Cuando pasamos la función como parametro
// la llamamos callback.
superFun(1, function(num) {
  console.log("Inside Callback ", num);
});
