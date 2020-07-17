// Como ya conocemos, existe el operador de asignacion
const ejemploAsignacion = "heyho";

// Operadores para numeros
// Suma +
const resultadoSuma = 10 + 2;
// Multiplicacion *
const resultadoMult = 20 * 2;
// Division /
const resultadoDiv = 10 / 6;

// Las operaciones no es necesario almacenarlas en variables
// se pueden ejecutar y pasarlos a funciones como esta
console.log(resultadoSuma + resultadoMult + resultadoDiv);

// Tambien existe el operador de incremento
let numero;
console.log("Incremento", numero++);
// Que es equivalente a hacer numero = numero + 1
// o decremento
console.log("Decremento", numero--);
// Que es equivalente a hacer numero = numero - 1

// Operadores logicos que devuelven como true o false
// Operador OR
const resOp1 = true || false;
// Operador AND
const resOp2 = true && false;
// Operador NOT
const resOp3 = !false;

// Existen otros operadores que se usan con numeros
let a = 10;
let b = 1;
// Mayor que
const resOp4 = a > b;
// Menor que
const resOp5 = a < b;
// También mayor o igual y menor o igual
const resOp6 = b <= a && a >= 10;

// Las operaciones se pueden agrupar usando parentesis
const resFinal = (resOp1 && resOp2) || resOp3;

/*
Existen otros operadores menos usados, para obtener mas informacion 
visitar https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Assignment_Operators
*/
