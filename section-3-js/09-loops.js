// JS Bucles - Loops
// Un bucle es un tipo de programa informático que nos permite repetir una operación específica un número predeterminado de veces sin tener que escribir esa operación individualmente.
// Por ejemplo, si quieres mostrar un mensaje 100 veces, puedes utilizar un bucle.
// Es sólo un ejemplo sencillo; puedes conseguir mucho más con los bucles.

// Tenemos los siguientes tipos de bucles:
// - for
// - while
// - do while
// - expansiones del for loop

// ---------------------------

// JS - For Loop
// Syntax

// for (expresionInicial, condicion, actualizacionDeExpresion){
// body del bucle for
// }
// Breakdown:
// 1. La expresión inicial inicializa y/o declara variables y se ejecuta sólo una vez.
// 2. Se evalúa la condición.
// 2.a Si la condición es falsa, el bucle for se termina.
// 2.b Si la condición es verdadera, se ejecuta el bloque de código dentro del bucle for.
// 3. La expresión de actualización actualiza el valor de la expresión inicial cuando la condición es verdadera.
// 4. La condición se evalúa de nuevo. Este proceso continúa hasta que la condición es falsa.

// FOR LOOP - EJEMPLO SIMPLE
console.log("-------------------");
console.log("FOR LOOP - Simple");
// PROGRAMA PARA IMPRIMIR 5 VECES UN STRING EN CONSOLA
// variable que usaremos como numero para iterar
const forLoopExample = 10;
// bucleamos con for loop - desde 1 = 1 hasta 10 [i === index - ""]
// for (expresionInicial, condicion, actualizacionDeExpresion){
// body del bucle for
// }
// Expresion inicial = let i = 1
// condicion = i <= forLoopExample
// actualizacion de expresion = i++
for (let i = 1; i <= forLoopExample; i++) {
  console.log("Js is legit - FOR LOOP");
}

console.log("-------------------");
console.log("FOR LOOP - ARRAY Example - Fav Citites:");
const cities = ["Barcelona", "Tokyo", "Berlin", "Helsinki"];
for (let i = 0; i < cities.length; i++) {
  console.log(`. ${cities[i]}`);
}

console.log("-------------------");
console.log("FOR LOOP - ARRAY MIXTO");
// FOR LOOP - MIXED ARRAY [polimorfismo, es decir, tratar la entrada de una función independientemente de los tipos que se le pasen.]
const mixedArray = [1, 2, "h", 1, true, "b", "2", "h", 2, 2];
function sum(arrayProperty) {
  let mixedSum = 0;
  for (let i = 0; i < arrayProperty.length; i++) {
    if (typeof arrayProperty[i] === "string") {
      str = arrayProperty[i].split("");
      for (let i = 0; i < str.length; i++) {
        mixedSum += str[i].length;
      }
    } else if (arrayProperty[i] === true) {
      mixedSum += 1;
    } else {
      mixedSum += arrayProperty[i];
    }
  }
  return mixedSum;
}
console.log("Sum of a mixed array:");
console.log(sum(mixedArray));

//FOR LOOP - ARRAY DE OBJETOS - CASO MAS REAL
console.log("-------------------");
console.log("FOR LOOP - ARRAY DE OBJETOS - CASO REAL");
const data = [
  { name: "Diego", age: 30, group: "A" },
  { name: "Jarko", age: 25, group: "B" },
  { name: "Aleix", age: 20, group: "A" },
  { name: "Marcos", age: 15, group: "C" },
  { name: "Octavio", age: 25, group: "B" },
];
for (let i = 0; i < data.length; i++) {
  console.log(`. ${data[i].age}`);
}

// JS - WHILE LOOP
// Syntax
// while (condition) {
//     // body del bucle while
// }
//Breakdown:
// 1. Un bucle while evalúa la condición dentro del paréntesis().
// 2. Si la condición es verdadera, se ejecuta el código dentro del body del bucle while.
// 3. La condición se evalúa de nuevo.
// 4. Este proceso continúa hasta que la condición es falsa.
// 5. Cuando la condición es falsa, el bucle se detiene.

// WHILE LOOP - EJEMPLO SIMPLE
console.log("-------------------");
console.log("WHILE LOOP - Simple");
// PROGRAMA PARA IMPRIMIR 5 VECES UN STRING EN CONSOLA
// variable que usaremos como numero para iterar
const whileLoopExample = 10;
// bucleamos con el syntax
// while (whileLoopExample >= 10) {
//   console.log("JS is legit - WHILE LOOP");
// }

console.log("-------------------");
console.log("WHILE LOOP - Array");
// WHILE LOOP - EJEMPLO ARRAY
const whileLoopArrayExample = ["Barcelona", "Tokyo", "Berlin", "Helsinki"];
// Podemos almacenar la longitud del array en una variable y utilizar esta variable en la condición de un bucle while para romper el bucle.
let lengthOfWhileArrayExample = whileLoopArrayExample.length;
// También, crear una variable count para acceder a los elementos del objeto en el array.
let count = 0;
while (lengthOfWhileArrayExample--) {
  console.log(`. ${whileLoopArrayExample[count]}`);
  count++;
}

console.log("-------------------");
console.log("WHILE LOOP - Simple");
// WHILE LOOP - EJEMPLO SENCILLO
let i = 1;
let n = 5;
while (i <= n) {
  console.log(`. ${i}`);
  i += 1;
}

console.log("-------------------");
console.log("WHILE LOOP - Array objetos");
// WHILE LOOP - Array objetos
const whileLoopArrayOfObjectsExample = [
  { name: "Diego", age: 30, group: "A" },
  { name: "Jarko", age: 25, group: "B" },
  { name: "Aleix", age: 20, group: "A" },
  { name: "Marcos", age: 15, group: "C" },
  { name: "Octavio", age: 25, group: "B" },
];
// Podemos almacenar la longitud del array en una variable y utilizar esta variable en la condición de un bucle while para romper el bucle.
let lengthOfWhileObjectExample = whileLoopArrayOfObjectsExample.length;
// También, crear una variable count para acceder a los elementos del objeto en el array.
let count2 = 0;
while (lengthOfWhileObjectExample--) {
  console.log(`. ${whileLoopArrayOfObjectsExample[count2].name}`);
  count2++;
}

// EJERCICIO - 001
// Dado un array, devuelve el tipo de dato que hay en cada una de sus posiciones.
let arrayExample = ["hola", "patata", 12, "adios", 11];
let arrayExampleString = ["hola", "patata", "adios"];
let arrayExamplenumber = [14, -42, 22];

// Simplified
for (let i = 0; i >= arrayExample.length; i++) {
  console.log(typeof param[i]);
}

// Version Extended - FUNCTION
function devolverPosicion(param) {
  param.forEach((element) => {
    console.log(typeof element);
  });
}
devolverPosicion(arrayExample);

// EJERCICIO - 002
// Creamos un array de strings con nombres de personajes famosos. Lo vamos a recorrer todo e imprimiremos la misma frase para cada uno (algo como "X is so famous, I love them.").
