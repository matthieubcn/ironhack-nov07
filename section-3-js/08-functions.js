// JS Funciones

// Funcion JavaScript y expresiones de función

// JS - Function
// Una función es un bloque de código que realiza una tarea específica.

// Supongamos que necesitas crear un programa para crear un círculo y colorearlo. Puedes crear dos funciones para resolver este problema:

// una función para dibujar el círculo
// una función para colorear el círculo
// Dividir un problema complejo en trozos más pequeños hace que tu programa sea fácil de entender y reutilizable.

// Además, JavaScript cuenta con un gran número de funciones incorporadas(methods).
//Por ejemplo, Math.sqrt() es una función para calcular la raíz cuadrada de un número.

// Ventajas de utilizar una función
// - La función hace que el código sea reutilizable. Se puede declarar una vez y utilizarla varias veces.
// - La función hace que el programa sea más fácil ya que cada pequeña tarea se divide en una función.
// - La función aumenta la legibilidad.
// IMPORTANTE - Cuando se pasa un valor al declarar una función, se llama parámetro. Y cuando se llama a la función, el valor pasado se llama argumento.

// DECLARANDO FUNCIONES
//Declarar una función
// SYNTAX
// function nameOfFunction() {
//     // function body
// }
// nameOfFunction()

// - Una función se declara utilizando la palabra clave function.
// - Las reglas básicas para nombrar una función son similares a las de nombrar una variable. Es mejor escribir un nombre descriptivo para su función. Por ejemplo, si una función se utiliza para sumar dos números, podría nombrar la función add o addNumbers.
// - El cuerpo de la función se escribe dentro de {}.
// Para utilizar esa función, tenemos que llamarla. nameOfFunction()

console.log("-------------------");
console.log("Simple Function:");
// Ejemplo  1
// console.log("Simple Function:");
// function greet() {
//   console.log("Hola");
// }
// greet();
// Declarar una funcion con PARAMETROS
// Una función también puede declararse con parámetros. Un parámetro es un valor que se pasa al declarar una función.
// SYNTAX
// function nameOfFunction(parameter) {
//     // function body
// }
// nameOfFunction(parameter)
// Ejemplo  2
console.log("-------------------");
console.log("Simple Function With Params:");
// function greetWithParams(name) {
//   console.log(`Hello ${name}`);
// }
// let userName = prompt("Please, enter your name: ");
// greetWithParams(userName);

// Cuando se pasa un valor al declarar una función, se llama parámetro. Y cuando se llama a la función, el valor pasado se llama argumento.

// Ejemplo  2
console.log("-------------------");
console.log("Simple Function With Two Params:");
// function add(a, b) {
//   console.log(`El total de esta suma es: ${a + b}`);
// }
// add(20, 10);

// DECLARAR FUNCIONES CON RETURN
// - El return statement puede utilizarse para devolver el valor a una llamada a una función.
// - El return statement indica que la función ha terminado. Cualquier código después del return no se ejecuta.
// - Si no se devuelve nada, la función devuelve un valor indefinido.
// - Funciones tipo flecha que contengan las {} por defecto esperan el keyword return
// Ejemplo  3
console.log("-------------------");
console.log("Function With Two Params & Return Statement:");
// function addWithReturn(a, b) {
//   return a + b;
// }
// let number1 = parseFloat(prompt("1er Numero: "));
// let number2 = parseFloat(prompt("2er Numero: "));
// let result = addWithReturn(number1, number2);
// alert(`La suma de estos 2 nums es: ${result}`);

// JS - FUNCTION EXPRESSIONS
// En Javascript, las funciones también pueden definirse como expresiones. Por ejemplo,
// programa para encontrar el cuadrado de un número
// la función se declara dentro de la variable
let x = function (num) {
  return num * num;
};
console.log(x(4));
// se puede utilizar como valor de la variable para otras variables
let y = x(3);
console.log(y);

// - La variable x se utiliza para almacenar la función. Aquí la función es tratada como una expresión. Y la función se llama usando el nombre de la variable.
// - Tambien se llama una función anónima ya que no tiene nombre.

// ARROW FUNCTIONS
// La función de flecha es una de las características introducidas en la versión ES6 de JavaScript. Permite crear funciones de una manera más limpia en comparación con las funciones normales. Por ejemplo,
// Esta función
// expresión de la función
let exampleFunc = function (x, y) {
  return x * y;
};
// puede escribirse de esta manera utilizando funciones de flecha
let exampleArrowFunc1 = (x, y) => x * y;
let exampleArrowFunc2 = (x, y) => {
  return x * y;
};

console.log(exampleArrowFunc2(2, 2));
// todas estas son iguales, de menor > mayor es mas simplificada...

//SYNTAX
// let myFunction = (arg1, arg2, arg3, arg#) => {
//    statement(s) -  body of arrow function
// }
// myFunciton es el nombre de la función
// arg1, arg2 , arg3, arg# son los argumentos de la función
// statement(s) es el cuerpo de la función

// Si el cuerpo tiene una sola declaración o expresión, puede escribir la función de flecha como:
// let exampleArrowFuncSingleDeclaration = (argument) => expression

// Ejemplo  4
console.log("-------------------");
console.log("Arrow Function - Sin Argumentos o parametros :");
let noArguments = () => console.log("Hello");
noArguments();

// Ejemplo  5
console.log("-------------------");
console.log("Arrow Function - 1 Parametro :");
// Si una función sólo tiene un parametro, puede omitir los paréntesis. Por ejemplo,
// let oneArguments = x => console.log(`Hello ${x}`);
let oneArguments = (x) => console.log(`Hello ${x}`);
oneArguments("Aleix");

// Ejemplo 6
console.log("-------------------");
console.log("Arrow Function - function expression:");
// También podemos crear dinámicamente una función y utilizarla como una expresión. Por ejemplo,
let age = 21;
let welcome =
  age < 18
    ? () => console.log("Wu Tang Clan, for the children")
    : () => {
        console.log("C.R.E.A.M");
      };
welcome();

// Ejemplo 7
console.log("-------------------");
console.log(
  "Arrow Function - multiple params - multiple lines dentro del body"
);
let sum = (a, b) => {
  let result = a + b;
  return result;
};
let resultOfSum = sum(5, 89);
console.log(resultOfSum);

// EJERCICIO #1
// Crea una función que reciba tres argumentos: una string name, un numero age y un objeto livesIn. Ten en cuenta que el objeto livesIn será un objeto que contiene dos keys: livesInCity y livesInTown. Las dos tendrán un valor booleánico y siempre será una falsa y la otra verdadera.
// Crea una función tipo flecha que retorne una string parecida a "Diego tiene 30 años y vive en la ciudad".Según la key que sea true en el argumento livesIn vamos a retornar vive en la ciudad o vive en un pueblo.

//console.log(miFuncion("Jarko", 25, {livesInCity: true, livesInTown: false}));
//console.log(miFuncion("Martina", 42, {livesInCity: false, livesInTown: true}));
//console.log(miFuncion("Laia", 78, { livesInCity: false, livesInTown: true }));
