// Iteration 1: Names and Input
let hacker1;
let hacker2;

hacker1 = "Berta";
hacker2 = "Alejandro";
console.log("Iteration #1");
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
console.log("-------------------");
// Iteration 2: Conditionals
// 1st version - Condicional Tradicional (If, Else If, Else)
console.log("Iteration #2 - Condicional Tradicional");
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!.`
  );
}

// 2nd variation - Usando un operador ternario
console.log("Iteration #2 - Usando Ternarios");
// SYNTAX basado en esta iteracion
// [hacker1.length > hacker2.length][? ""][: ""]
//3 blocks :
// 1. Primer bloque, donde condicionamos codigo
// 2. Segundo bloque, si la condicion inicial es TRUE se ejecuta el codigo dentro del bloque #2
// 3. Tercer bloque, si la condicion inicial es FALSE se ejecuta el codigo dentro del bloque #3

// Primer ejemplo para ver como funcionan los ternarios. 50/50 Use Case
// hacker1.length > hacker2.length
//   ? console.log(
//       `The driver has the longest name, it has ${hacker1.length} characters.`
//     )
//   : console.log(
//       `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
//     );

// Ternario Iteracion Correcta (3 condiciones)
hacker1.length > hacker2.length
  ? console.log(
      `The driver has the longest name, it has ${hacker1.length} characters.`
    )
  : hacker1.length === hacker2.length
  ? console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters!.`
    )
  : console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
console.log("-------------------");
// Iteration 3: Loops
// Un bucle es un tipo de programa informático que nos permite repetir una operación específica un número predeterminado de veces sin tener que escribir esa operación individualmente.
// Por ejemplo, si quieres mostrar un mensaje 100 veces, puedes utilizar un bucle.
// Es sólo un ejemplo sencillo; puedes conseguir mucho más con los bucles.
//Print all the characters of the driver's name,

// VARIABLE QUE ESTAMOS USANDOhacker1 = "Berta"
// Iteration 3.1 - Usando Loops
let reservedName = "";
for (let i = 0; i < hacker1.length; i++) {
  reservedName += hacker1[i].toUpperCase() + " ";
}
console.log(reservedName);

// Iteration 3.1 - Usando metodos nativos
let upperCaseName = hacker1.toUpperCase().split("").join(" ");
console.log(upperCaseName);

// Iteration 3.1  - Usando metodo nativo y un spread operator [Javi]
let upperHacker = hacker1.toUpperCase();
let arrayHacker = [...upperHacker].join(" "); // ... spread operator :)
console.log(arrayHacker);

// Iteration 3.1 - Usando un forOff loop
let driverName = ""; //string vacio
for (const diego of hacker1) {
  driverName += diego.toUpperCase() + " ";
}
console.log(driverName);

// ITERATION 3 - Reverse Order
console.log("-------------------");

// Iteration 3.2 - Loop
let reverseName = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reverseName += hacker1[i];
}
console.log(reverseName);

// Iteration 3.2 - Usando metodo nativo
const reverseNameSimplified = hacker1.split("").reverse().join("");
console.log(reverseNameSimplified);

// ITERATION 3 - Reverse Order
//Iteration 3.3 - Condicional sencillo
if (hacker1 > hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Iteration 3.3 - Condicional sencillo dentro de una funcion :)
//Declarar una función
// SYNTAX
// function nameOfFunction() {
//     // function body
// }
// nameOfFunction()

function ordenLexicoGrafico(string1, string2) {
  if (string1 > string2) {
    console.log("The driver's name goes first.");
  } else if (string1 < string2) {
    console.log("Yo, the navigator goes first definitely.");
  } else {
    console.log("What?! You both have the same name?");
  }
}
ordenLexicoGrafico(hacker1, hacker2);
console.log("-------------------");

// BONUS TIME
// BONUS 1 - LOREM IPSUM "ET" FINDER

let lorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis ad voluptatum beatae quisquam autem nisi ullam nihil a veniam nam pariatur dolores temporibus animi atque, quidem sapiente veritatis quae adipi et";

// trimmear todos los blank spaces
let trimmedLorem = lorem.trim();

// contar la cantidad de palabras
let etCount = 0;
for (key of trimmedLorem) {
  if (key === " et ") etCount += 1;
}
console.log(`La cantidad de palabras et: ${etCount + 1}`);

// BONUS 2 - SPLIT & REVERSE
let phraseToCheck = "amor roma";
let phraseToCheckPalindrome = phraseToCheck.split("").reverse().join("");

if (phraseToCheck.toLowerCase() == phraseToCheckPalindrome.toLowerCase()) {
  console.log("THE STRING IS A PALINDROME");
} else {
  console.log("THE STRING IS NOT A PALINDROME");
}
console.log(phraseToCheckPalindrome);
