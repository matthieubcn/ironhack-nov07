// JS Conditionals

// In computer programming, there may arise situations where you have to run a block of code among more than one alternatives. For example, assigning grades A, B or C based on marks obtained by a student.

// In such situations, you can use the JavaScript if...else statement to create a program that can make decisions.

// In JavaScript, there are three forms of the if...else statement.
// 1. if statement
// 2. if...else statement
// 3. else...if statement

// -----------------------

//JS - IF Statement

// Syntax
// if (condition) {
//   // body del condicional if
// }

// Ejemplo - Condicionar si un numero es positivo!
// check if number is positive o mayor que0
// const number = prompt("Enter a number:   ");

// // aca nos condicionamos el numero .
// if (number > 0) {
//   console.log(" Este numero es positivo");
//   console.log(
//     "Es una caso condicional que solo estamos ejecutando una condicion"
//   );
// }

// -----------------------

// JS  - IF ELSE Statement
// Si un IF tiene un condicional opcional, podemos usar este condiconal opcional para ejecutar codigo en base que la condicion IF inicial sea falsa.
// Syntax
// if (condition) {
//     // body del condicional if
// } else {
//     // body del condicional else
// }

// if (number > 0) {
//   console.log(" Este numero es positivo");
// } else {
//   console.log(" Este numero es negativo");
//   console.log(
//     "Es un caso en base a la condicion inicial que sea un valor falso"
//   );
// }

// -----------------------
//JS - ELSE IF Statement
// El condicional else if nos habilita la capacidad de condicionar +1(multiples) alternativas en base a las condiciones que queramos.
// Syntax - terminando con un else {}
// if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else {
// }

// Syntax - terminando sin un else {}
// if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// } else if (condition) {
//   // ejecucion de este bloque de codigo
// }

// -----------------------
// Ejemplo - else if
// Age Check

// const drinkingAge = parseInt(prompt("Want to buy beer? - let me see your ID"));

// if (drinkingAge < 18) {
//   console.log("I am sorry son, but you are too young to be buying alcohol.");
// } else if (drinkingAge === 18) {
//   console.log("You just turned 18, what type of beer would you want to enjoy:");
// } else if (drinkingAge >= 18 && drinkingAge < 40) {
//   console.log("Enjoy your night, but one drink at a time");
// } else if (drinkingAge >= 40) {
//   console.log("Enjoy your night, remember that the hangover is real!");
// }

// -----------------------
//Class Excercise - MOVIE THEATER :)

// <= 5 - Gratis
// < 15 - tienes un 20%
// >= 15 y <=60 - pagan regular
//si el usuario +60 - tiene 40%

// ------------------------------
// NESTED - CONDICIONALES ADINADOS
// Podemos adinar condicionales dentro de condicionales si queremos :)

// const number = prompt("Enter a number:   ");

// if (number >= 0) {
//   if (number === 0) {
//     console.log("This input is = to 0");
//   } else if (number >= 1 && number <= 3) {
//     console.log("Your number is between 1 & 3");
//   } else {
//     console.log("Your number is a positive number bigger than 0");
//   }
// } else {
//   console.log("You entered a negative number");
// }

// -----------------------

// Reduciendo un poco de codigo
// Si tus condicionales son 50/50 (if else) puedes optar por una syntaxis mas limpias sin tener que agregar las {}

// ESTO PASA A
// if (number > 0) {
//     // ejecucion de este bloque de codigo
// } else {
//     // ejecucion de este bloque de codigo
// }
// ESTO
// if (number > 0) // ejecucion de este bloque de codigo
// else  // ejecucion de este bloque de codigo

//Ejemplo de reduccion
const number2 = prompt("Enter a number between 1-2");

if (number === 1) console.log("You chose 1");
else console.log("You chose 2");
