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
// const number2 = prompt("Enter a number between 1-2");

// if (number2 == 1) console.log("You chose 1");
// else console.log("You chose 2");

// ------------------------------
// JS -  Switch Statement
// El statmente "switch" evalúa una expresión y ejecuta el cuerpo correspondiente que coincide con el resultado de la expresión.

// Syntax:
// switch (variable / expression) {
//   case value1:
//     // ejecucion de este bloque de codigo 1
//     break;

//   case value2:
//     // ejecucion de este bloque de codigo 2
//     break;

//   case valueN:
//     // ejecucion de este bloque de codigo N
//     break;

//   default:
//   // ejecucion de este bloque de codigo default
// }
//BREAKDOWN
// El switch statement evalúa una variable/expresión entre paréntesis ().
// Si el resultado de la expresión es igual al valor1, se ejecuta su cuerpo.
// Si el resultado de la expresión es igual al valor2, se ejecuta su cuerpo.
// Este proceso continúa. Si no hay ningún caso que coincida, se ejecuta el cuerpo por defecto.

// IMPORTANTE:
// - El statement "break" es opcional.Si se encuentra el statement break, El switch statement switch termina.
// - Si no se utiliza el statement break, también se ejecutan los casos posteriores al caso coincidente.
// - "Default" por defecto también es opcional.

// Ejemplo sencillo - sin type checking
let switchExample1 = 2;
switch (switchExample1) {
  case 1:
    switchExample1 = "one";
    break;
  case 2:
    switchExample1 = "two";
    break;
  default:
    switchExample1 = "not found";
    break;
}
console.log(`The value is ${switchExample1}`);
console.log("-------------------");

// ejemplo Sencillo - con type checking
//IMPORTANTE
//En JavaScript, el "switch" statement comprueba los casos estrictamente (deben ser del mismo tipo de datos) con el resultado de la expresión. Observamos que en el ejemplo posterior, 1 no coincide con "1".
// let switchExample2 = 1;
// switch (switchExample2) {
//   case "1":
//     switchExample2 = 1;
//     break;
//   case 1:
//     switchExample2 = "one";
//     break;
//   case 2:
//     switchExample2 = "two";
//     break;
//   default:
//     switchExample2 = "not found";
//     break;
// }
// console.log(`The value is ${switchExample2}`);
console.log("-------------------");

// Ejemplo complejo - SWiTCH - CALCULADORA
console.log("SWITCH - Simple Calculator");
// inicializamos una variable para poder asignarle un valor luego (operacion matematica)
// let result;

// // Input del operando que va a usar el usuario (x, +, -, /)
// const operator = prompt("Enter operator ( either +, -, * or / ): ");

// // Variables para recibir los numeros(inputs) del usuario
// const calcNum1 = parseFloat(prompt("Enter 1st number: "));
// const calcNum2 = parseFloat(prompt("Enter 2nd number: "));

// switch (operator) {
//   case "+":
//     result = calcNum1 + calcNum2;
//     console.log(`${calcNum1} + ${calcNum2} = ${result}`);
//     break;
//   case "-":
//     result = calcNum1 - calcNum2;
//     console.log(`${calcNum1} - ${calcNum2} = ${result}`);
//     break;
//   case "*":
//     result = calcNum1 * calcNum2;
//     console.log(`${calcNum1} * ${calcNum2} = ${result}`);
//     break;
//   case "/":
//     result = calcNum1 / calcNum2;
//     console.log(`${calcNum1} / ${calcNum2} = ${result}`);
//     break;
//   default:
//     console.log(
//       "This is not a valid operator for this simple calculator, if you want power go invest on a TI - 30XIIS Calculator, don't be cheap.... or just use your phone... "
//     );
// }
console.log("-------------------");

console.log("SWITCH - Multiple Cases");
// Ejemplo complejo - SWITCH - COUNTRY CONTINET FINDER - CASOS MULTIPLES
const countryOfOrigin = prompt("What country where you born?");
switch (countryOfOrigin) {
  case "Venezuela":
  case "Colombia":
  case "Ecuador":
  case "Brazil":
    alert(`Cool, ${countryOfOrigin} is located in South America`);
    console.log(`Cool, ${countryOfOrigin} is located in South America`);
    break;
  case "Spain":
  case "France":
  case "Portugal":
  case "Andorra":
    alert(`Cool, ${countryOfOrigin} is locaded in Europe`);
    console.log(`Cool, ${countryOfOrigin} is locaded in Europe`);
    break;
  default:
    alert("you are not from this planet! go Invade somewhere else...");
    console.log("you are not from this planet! go Invade somewhere else...");
}
