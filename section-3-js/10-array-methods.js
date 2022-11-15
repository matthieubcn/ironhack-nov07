// Array Methods
// En JavaScript, un array es una estructura de datos que contiene una lista de elementos que almacenan múltiples valores en una sola variable. La fuerza de los js arrays reside en los métodos de los arrays. Los Array methods o métodos de matrices son funciones incorporadas a JavaScript que podemos aplicar a nuestros arrays - Cada método tiene una función única que realiza un cambio o cálculo a nuestro array y nos ahorra escribir funciones comunes desde cero.

// JS Array Methods
// Para facilitar la manipulación de arrays en JavaScript, debemos utilizar métodos de arrays para facilitar nuestro trabajo y hacer el código más limpio.
const arr = [1, 2, 3, 4, 5, 1, 0, 7];
const animals = ["dog", "cat", "parrot", "cow", "cheetah", "horse"];

// 1. map()
// Este método crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento de este array.
// Ejemplo 1 - numeros
const mapped = arr.map((param) => param + 20);
console.log(mapped);
console.log(arr);
// Ejemplo 2 - animales
const newAnimals = animals.map((animalsPerArray) => {
  const storage = animalsPerArray;
  console.log(`Each animal of the array is: "${storage}"`);
  return storage;
});

// 2. filter()
// Este método crea un nuevo array con sólo los elementos que pasan la condición dentro de la función proporcionada.
// Ejemplo 1 - numeros
const filtered = arr.filter((element) => element === 2 || element === 4);
console.table(filtered);
// Ejemplo 2 - animales
const filteredAnimals = animals.filter(
  (element) => element == "cat" || element == "horse"
);
console.table(filteredAnimals);

//3. sort()
// Este método se utiliza para ordenar los elementos del array en orden ascendente o descendente.
const alphabet = ["f", "a", "c", "v", "z"];

// ascendiente sort()
let ascend = alphabet.sort((a, b) => (a > b ? 1 : -1));
console.log(ascend);
// descendiente sort()
let descend = alphabet.sort((a, b) => (a > b ? -1 : 1));
console.log(descend);

// 4. forEach()
// Este método ayuda a realizar un bucle sobre un array ejecutando una función de devolución de llamada proporcionada(CALLBACK) para cada elemento de un array.
alphabet
  .sort((a, b) => (a > b ? 1 : -1))
  .forEach((element) => {
    console.log(element);
  });

// 5. concat()
// Este método se utiliza para fusionar dos o más matrices[ARRAYS] y devuelve una nueva matriz, sin cambiar las matrices existentes.
const arr1 = ["milan", "tokyo"];
const arr2 = ["miami", "chicago"];
const arr3 = ["londo", "helsinki"];

console.log(arr1.concat(arr2, arr2));
console.log(arr1);

// 6. every()
// Este método comprueba cada elemento de la matriz que pasa la condición, devolviendo true o false según corresponda.
// Ejemplo - todos los elementos >5 - FALSY CONDITION
const greaterFive = arr.every((num) => {
  num > 5;
});
console.log(greaterFive);
// Ejemplo - todos los elementos <9 - TRUTHY CONDITION
const lessNine = arr.every((num) => num < 9);
console.log(lessNine);

// 7. some()
// Este método comprueba si al menos un elemento de la matriz que pasa la condición, devolviendo true o false según corresponda.
// al menos que un elemento es >5?
const greaterFiveSome = arr.some((num) => num > 5);
console.log(greaterFiveSome);
// al menos que un elemento sea <= 0
const lessNum = arr.some((num) => num <= 0);
console.log(lessNum);

// 8. includes()
//  Este método comprueba si un array incluye el elemento que pasa la condición, devolviendo true o false según corresponda.
console.log(arr.includes(2));
console.log(arr.includes(7));

// 9 . join()
//Este método devuelve una nuevo string concatenando todos los elementos del array separados por el separador especificado.
const joinArray = ["C", ".", "R", ".", "E", ".", "A", ".", "M"];
console.log(joinArray.join(""));

// 10. reduce()
// Este método aplica una función contra un acumulador y cada elemento del array para reducirlo a un único valor.
const arrReduce = [1, 2, 3, 4, 5, 1, 0, 7];
const reduced = arrReduce.reduce((total, current) => total + current);
console.log(reduced);

// //Crea una función que añada el primer elemento al principio de un array y el segundo elemento al final del mismo array.
// ya estos metodosNativo de Array existen :)
