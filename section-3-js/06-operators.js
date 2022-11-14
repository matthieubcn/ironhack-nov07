// Que es un operador?

// En JS, un operador es un symbolo especial que nos ayuda a ejecutar operaciones en operandos.
// Ejemplo:

const add = 2 + 3;
console.log(add);

// Aca cicos, el operador "+" es un symbolo matematico de operacion.  Caso de suma que te suma 2+3

// JS Tipo de Operadores
// Lista que aprenderemos hoy

// Assignment Operator
// Arithemic Operator
// Copmarison Operator
// Logical Operators
// Bitwise Operators
// String Operators
// Other Operators

// JS Assignment Operators
// Si miramos el ejemplo en la linea 6, el operador de asignacion "=" es lo que usamos para apuntar/asignar la operacion matematica con la variable "add"...

console.log("Assignment Operators");
console.table([
  {
    operator: "=",
    name: "Assignment operator",
    example: "a = 7; // 7",
  },
  {
    operator: "+=",
    name: "Addition operator",
    example: "a += 5; // a = a + 5",
  },
  {
    operator: "-=",
    name: "Subtraction Assignment",
    example: "a -= 2; // a = a - 2",
  },
  {
    operator: "*=",
    name: "Multiplication Assignment",
    example: "a *= 3; // a = a * 3",
  },
  {
    operator: "/=",
    name: "Division Assignment",
    example: "a /= 2; // a = a / 2",
  },
  {
    operator: "%=",
    name: "Remainder Assignment",
    example: "a %= 2; // a = a % 2",
  },
  {
    operator: "**=",
    name: "Exponentiation Assignment",
    example: "a **= 2; // a = a**2",
  },
]);

console.log("Arithemical Operators");
console.table([
  {
    operator: "+",
    name: "Add",
    example: "2+2 // 4",
  },
  {
    operator: "-",
    name: "Substract",
    example: "4-2 // 2",
  },
  {
    operator: "*",
    name: "Multiplication",
    example: "4 * 4 // 16",
  },
  {
    operator: "/",
    name: "Division",
    example: "3 /3 // 1",
  },
  {
    operator: "++",
    name: "Increment (increments by 1)",
    example: "4++ // 5",
  },
  {
    operator: "--",
    name: "Decrement (decrements by 1)",
    example: "4-- // 3",
  },
  {
    operator: "**",
    name: "Exponentiation (Power)",
    example: "2**2 // 8",
  },
]);

// JS Comparison Operators
// Operadores de comparasion, comparan dos tipos de valores o mas+ y te retornan un valor booleanico.
// Ejemplo

let number1 = 3;
let number2 = 2;

console.log("Comparing these 2 numbers");
console.log(number1 > number2);

console.log("Comparison Operators");
console.table([
  {
    operator: "==",
    description: "Equal to: returns true if the operands are equal",
    example: "x == y",
  },
  {
    operator: "!=",
    description: "Not equal to: returns true if the operands are not equal",
    example: "x != y",
  },
  {
    operator: "===",
    description:
      "Strict equal to: true if the operands are equal and of the same type",
    example: "x === y",
  },
  {
    operator: "!==",
    description:
      "Strict not equal to: true if the operands are equal but of different type or not equal at all",
    example: "x !== y",
  },
  {
    operator: ">",
    description:
      "Greater than: true if left operand is greater than the right operand",
    example: "x > y",
  },
  {
    operator: ">=",
    description:
      "Greater than or equal to: true if left operand is greater than or equal to the right operand",
    example: "x >= y",
  },
  {
    operator: "<",
    description:
      "Less than: true if the left operand is less than the right operand",
    example: "x < y",
  },
  {
    operator: "<=",
    description:
      "Less than or equal to: true if the left operand is less than or equal to the right operand",
    example: "x <= y",
  },
]);
// console.log(8 == 8);
// console.log(8 != 4);
// console.log(8 === "8");
// console.log(8 !== "8");
// console.log(4 > 2);
// console.log(4 < 2);
// console.log(2 >= 2);
// console.log(5 <= 9);

// JS Logical Operators
// Ejecutan operaciones logicas, que nos brindan ayuda para segmentar ciertas operaciones.

const numberA = 5;
const numberB = 3;

console.log(
  `The comparison of these numbers is: ${numberA < 6 && numberB < 5}`
);

console.log("Logical Operators");
console.table([
  {
    operator: "&&",
    description:
      "Logical AND: true if both the operands are true, else returns false",
    example: "x && y",
  },
  {
    operator: "||",
    description:
      "Logical OR: true if either of the operands is true; returns false if both are false",
    example: "x || y",
  },
  {
    operator: "!",
    description: "Logical NOT: true if the operand is false and vice-versa.	",
    example: "!x",
  },
]);

// Logical AND
console.log(true && true);
console.log(true && false);

// Logical OR
console.log(true || false);
console.log(false || false);

// Logical NOT
console.log(!true);

// Strings + operators...
// En js podemos usar algunos operadores para otras operaciones que no corresponden matematica y logica contextual...
console.log("Wu Tang Clan" + " is for the children");

//function to add two numbers
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

console.log(addTwoNumbers(4, 8));

// 3 variables...

// 1. que operador logico me permite que si num y str son equivalentes sean true.!
// 2. que operador nos permite saber si num y str no son iguales.
// 3. que num es una edad, el usuario ha metido un num equivalente a una eda como podemos saber si la edad es mayor que 18, menor que 18 o mayorQue o igual 18

// num
// str
// obj

let num;
let str;

num = 8;
str = "18";

console.log(num == str);
console.log(num === str);
console.log(str < 18 || str == 18);
console.log(str <= 18);
