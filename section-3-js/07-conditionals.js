// JS Conditionals

// In computer programming, there may arise situations where you have to run a block of code among more than one alternatives. For example, assigning grades A, B or C based on marks obtained by a student.

// In such situations, you can use the JavaScript if...else statement to create a program that can make decisions.

// In JavaScript, there are three forms of the if...else statement.
// 1. if statement
// 2. if...else statement
// 3. else...if statement

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

// Ejemplo
// Number Check

const drinkingAge = parseInt(prompt("Want to buy beer? - let me see your ID"));

if (drinkingAge < 18) {
  console.log("I am sorry son, but you are too young to be buying alcohol.");
} else if (drinkingAge === 18) {
  console.log("You just turned 18, what type of beer would you want to enjoy:");
} else if (drinkingAge >= 18 && drinkingAge < 40) {
  console.log("Enjoy your night, but one drink at a time");
} else if (drinkingAge >= 40) {
  console.log("Enjoy your night, remember that the hangover is real!");
}
