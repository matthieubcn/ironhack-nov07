//JS ASYNC

//Antes de Comenzar repasemos este metodo:

// ------------------------------
// ------------------------------
// ------------------------------
// ------------------------------

// JS - setTimeout()
//El método setTimeout() ejecuta un bloque de código después del tiempo especificado. El método ejecuta el código sólo una vez.
// SYNTAX: setTimeout(function, milliseconds);
// Sus parámetros son
// función - una función que contiene un bloque de código
// milisegundos - el tiempo tras el cual se ejecuta la función
// El método setTimeout() devuelve un intervalID, que es un número entero positivo.

// Ejemplo 01
// programa sencilo que diga hola mundo
function greet() {
  console.log("Hello world - simple");
}
//greet();
// setTimeout(greet, 3000);
// console.log("Este mensaje va primero - antes de 2 segundos");

// Programa para mostrar en consola el tiempo cada 3 segundos :)
function showTime() {
  // return new date and time
  let dateTime = new Date();
  // reutn the current local time
  let time = dateTime.toLocaleTimeString();
  console.log(time);
  // usar settimeout - display time every 3 secs
  setTimeout(showTime, 3000);
}
// llamar a la funcion
// showTime();

// ------------------------------
// ------------------------------
// ------------------------------
// JS - cleartimeout()
// si queremos detener cualquier llamada a una funcion, podemos usar el metodo clearTimeout()

// SYNTAX = clearTimeout(intervalID);
// Aca el intervalid es el valor de retorono del metodo setTimeout().

let count = 0;
// function - increase
function increaseCount() {
  // incrementar +1
  count += 1;
  console.log(count);
}
let id = setTimeout(increaseCount, 3000);
// clearTimout
clearTimeout(id);
// console.log("metodo setTimeout frenado...");

// setTimeout() - con aprametros
// SYNTAX setTimeout(function, milisegundos, parameter1, param2, param3.....)
// Cuando pasas parámetros adicionales al método setTimeout(), estos parámetros (parameter1, parameter2, etc.) serán pasados a la función especificada.
// EJEMPLO
// Prgrama para mostrar mi nombre en consola.
function greetWithParams(name, lastName) {
  console.log("Hello" + " " + name + " " + lastName);
}

// activar el setTimeout
// setTimeout(greetWithParams, 4000, "diego", "zito");
// /En el programa anterior, se pasan dos parámetros Diego y Zito al método setTimeout(). Estos dos parámetros son los argumentos que se pasarán a la función (aquí, la función greetWithParams()) que se define dentro del método setTimeout().

// ------------------------------
// ------------------------------
// ------------------------------
// JS - CALLBACKS
// Aprendemos a punta de ejemplos

// function
function greetCallback(name) {
  console.log(`Hello  - ${name}`);
}
// greetCallback("diego");

// function 2 - with CALLBACK
function greetCallBackTwo(name, blink) {
  console.log(`Hello  - ${name}`);
  blink();
}
// function to be referenced inside the function greetCallBackTwo - Por ende la funcion que vamos a crear que se llama callMe() es la funcion que vamos a pasarle como argumento a la funcion greetCallBackTwo.
function callMe() {
  console.log("Tio llamame que se estan acabando las entradas de Blink 182");
}
// Llamar a la funcion greetCallBackTwo() y dentro de los parentesis vamos a pasar el parametro de name y una FUNCION como argumento para trabajar el callback :)
greetCallBackTwo("Diego", callMe);
// EN LA FUNCION INICIAL DECLARAMOS 2 COSAS DENTRO DE LOS PARENTHESIS, 1 ES UN PAREMETRO Y LA OTRA ES UN ARGUMENTO
// La función callMe() es una función de devolución de llamada[CALLBACK]

// Ventajas de la función de devolución de llamada[CALLBACKS]
// El beneficio de usar una función callback es que puedes esperar el resultado de una llamada a una función anterior y luego ejecutar otra llamada a una función.
// En este ejemplo, vamos a utilizar el método setTimeout() para imitar el programa que tarda en ejecutarse, como los datos procedentes del servidor.

function greetCallBackThree() {
  console.log(`Hello Homies!`);
}
function sayMyName(name) {
  console.log(`Hello ${name}`);
}
// calling thefunction
// setTimeout(greetCallBackThree, 3000);
// sayMyName("Diego");

// -----------
// EJEMPLO CALLBACK - PASARLE UNA FUNCION COMO ARGUMENTO
function greetCallBackFour(name, myFunction) {
  console.log(`Hello my students!`);
  // calbackfunction declaration
  // ejecutar esta funcion despues de un tiempo.
  myFunction(name);
}
// crear esa funcion callback que va a recibir la funcion  greetCallBackFour
function sayName(name) {
  console.log(`Hello there ${name}`);
}
//Calling the function con el nombre greetCallBackFour con un setTimeout y dentro de los parentesis, vamos a pasar info
//setTimeout(greetCallBackFour, 5000, "Diego", sayName);

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------

// JS - PROMESAS
// JS PROMESAS Y CADENA DE PROMESAS
// En JavaScript, una promesa es una buena manera de manejar las operaciones asíncronas. Se utiliza para saber si la operación asíncrona se ha completado con éxito o no.

// Una promesa puede tener uno de estos tres estados

// - Pendiente
// - Cumplida
// - Rechazada
// Una promesa comienza en un estado pendiente. Esto significa que el proceso no se ha completado. Si la operación tiene éxito, el proceso termina en un estado cumplido. Y, si se produce un error, el proceso termina en un estado rechazado.

// Por ejemplo, cuando solicitas datos al servidor utilizando una promesa, estará en un estado pendiente. Cuando los datos lleguen con éxito, estará en un estado cumplido. Si se produce un error, entonces estará en un estado rechazado.

// Crear una promesa
// Para crear un objeto promise, utilizamos el constructor Promise().
// SYNTAX :
let promise = new Promise(function (resolve, reject) {
  //hacer algo
});
// El constructor Promise() toma una función como argumento. La función también acepta dos ARGUMENTOS resolve() y reject().
// Si la promesa regresa con éxito, se llama a la función resolve(). Y, si se produce un error, se llama a la función reject().

// EJEMPLO 01 - PROMESAS
let promiseStatus = true;
let countValue = new Promise((resolve, reject) => {
  if (promiseStatus) {
    resolve(2 + 2);
  } else {
    reject("Yo there are no oreos in the kitchen, go buy some...");
  }
});
console.log(countValue);
// En el programa de arriba,se crea un objeto tipo PROMISE que toma dos funciones como argumentos: resolve() y un reject(), estos se utilizan si el proceso/llamada tiene exito con resolve() y si no tiene exito vamos con reject()...

// ------
// ------
// JS PROMISES CHAINING - ENCADENAMIENTO --- .THEN()
// Las promesas son útiles cuando tienes que manejar más de una tarea asíncrona, una tras otra. Para ello, utilizamos el encadenamiento de promesas.
// Puedes realizar una operación después de resolver una promesa utilizando los métodos then(), catch() y finally().
// Método then() de JavaScript
// El método then() se utiliza con el callback cuando la promesa se cumple o se resuelve con éxito.
// SYNTAX: promiseObject.then(onFulfilled, onRejected);

// EJEMPLO 02 - PROMISES - CHAINING - .THEN()
let countValue2 = new Promise((resolve, reject) => {
  resolve("Promise is resolved");
});
// estos .THEN se ejecutan solo si la promesa esta RESOLVED
countValue2
  .then(function successValue(result) {
    console.log(result);
  })
  .then(function successValue1() {
    console.log(
      "Hemos llamado varias veces a funciones multiples con la expasioon de la promesa .then()"
    );
  });
// En el programa anterior, el método then() se utiliza para encadenar las funciones a la promesa. El método then() se llama cuando la promesa se resuelve con éxito.
// Puedes encadenar múltiples métodos then() con la promesa.

// JS PROMISES CHAINING - ENCADENAMIENTO --- .CATCH()
// El método catch() se utiliza con el callback cuando la promesa es rechazada o si se produce un error. Por ejemplo,
let countValue3 = new Promise((resolve, reject) => {
  resolve("Promise is resolve");
});
// se ejecuta si la promesa se resuelve
countValue3
  .then(function successValue(result) {
    console.log(result);
  })
  .catch(function errorValue(result) {
    console.log(result);
  });

// JS PROMISES CHAINING - ENCADENAMIENTO --- .FINALLY()
// También puedes utilizar el método finally() con las promesas. El método finally() se ejecuta cuando la promesa se resuelve con éxito o se rechaza.

// EJEMPLO
// nos creamos promesa
let countValue4 = new Promise((resolve, reject) => {
  // puede ser resolve o reject, nosotros por el ejemplo vamos con resolve!
  resolve("Promise is resolved hang in there guys! i know its difficult!");
});
// Apuntar a countValue4 y le encadenamos el finally()
countValue4.finally(
  (greet = () =>
    console.log(
      "Este codigo se ejecuta independientemente de el resolve o reject...."
    ))
);

// Sus diferencias pueden resumirse en los siguientes puntos:

// JS - PROMISES :
// - La sintaxis es fácil de usar y de leer.
// - El manejo de errores es más fácil de gestionar.
// - ejemplo :
// api().then(function(result) {
//     return api2() ;
// }).then(function(result2) {
//     return api3();
// }).then(function(result3) {
//     // do work
// }).catch(function(error) {
//     //handle any error that may occur before this point
// });

// JS CALBACK :
// - La sintaxis es difícil de entender.
// - El manejo de errores puede ser difícil de manejar.
// -  ejemplo:
// api(function(result){
//     api2(function(result2){
//         api3(function(result3){
//              // do work
//             if(error) {
//                 // do something
//             }
//             else {
//                 // do something
//             }
//         });
//     });
// });

// ------------------
// ------------------
// ------------------
// ------------------
// ------------------
// Javscript async/await
// Utilizamos la palabra clave async con una función para representar que la función es una función asíncrona. La función async devuelve una promesa.

// SYNTAX:
// async function name(parameter1, parameter2, ...paramaterN) {
// statements
// }
// Aquí,
// name - nombre de la función
// parameters - parámetros que se pasan a la función

// SYNTAX REAL DE ESTRUCTURA DE SKELETON
// async function myAsyncFunction() {}
// const myAsyncFunction = async () => {}

// EJEMPLO - ASYNC - SENCILLO
const myAsyncFunction = async () => {
  console.log("My first async function.");
  return Promise.resolve();
};
myAsyncFunction();

// EJEMPLO - ASYNC - EXTENDED - CON PROMESA
const myAsync2 = async () => {
  console.log("My second async function");
};
// myAsync2().then((result) => console.log(result));

// JS ASYNC - AWAIT KEYWORD
// La palabra clave await se utiliza dentro de la función async para esperar la operación asíncrona.
// SYNTAX:
// let result = await promise

// El uso de await pone en pausa la función asíncrona hasta que la promesa devuelve un valor de resultado (resolver o rechazar).

//
// EJEMPLO - ASYNC - EXTENDED - CON PROMESA - ASYNC Y AWAIT KEYWORDs
// Nos creamos una promesa
let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise has been resolved after - 4seconds");
  }, 4000);
});
// vamos a crear la funcion asyncrona
const asyncFunc = async () => {
  // espermos hsta que la promesa se resuelva despes de ls 4 segundos
  let result = await myPromise;
  console.log(result);
  console.log("Esperamos 4 segundos para ver eso.....");
};
// LLamar a la funcion
asyncFunc();
// BREAKDOWN OF ABOVE
// En el programa anterior, se crea un objeto Promise que se resuelve después de 4000 milisegundos. Aquí, la función asyncFunc() se escribe utilizando la función async.
// La palabra clave await espera a que la promesa se cumpla (resuelva o rechace).
// Por lo tanto, "Esperamos 4 segundos para ver eso....." y "result="Promise has been resolved after - 4seconds"" se muestra sólo después de que el valor de la promesa esté disponible para la variable de resultado.
// En el programa anterior, si no se utiliza await, lo que plasmamos se muestra antes de que se resuelva la promesa.

// ERROR HANDLING ASYNC
// Al utilizar la función async, se escribe el código de manera sincrónica. Y también puedes usar el método catch() para atrapar el error. Por ejemplo,
// asyncFunc().catch(
// catch error and do something
// )

// La otra forma de manejar un error es utilizando el bloque try/catch. Por ejemplo,

// EJEMPLO - ASYNC - EXTENDED - CON PROMESA - ASYNC Y AWAIT KEYWORD y TRY CATCH
let promiseWithCatch = new Promise((resolve, reject) => {
  setTimeout(
    () => reject("KRYSTEL - WU TANG CLAN - Promesa se ha resuelto..."),
    4000
  );
});
// TRY CATCH ERROR HANDLING
const myAsyncFuncTry = async () => {
  try {
    let result = await promiseWithCatch;
    console.log(result);
  } catch (krystel) {
    console.log(krystel);
  }
};
// calling the function
myAsyncFuncTry();

// Beneficios del uso de la función async
// - El código es más legible que usando un callback o una promesa.
// - El manejo de errores es más sencillo.
// - La depuración es más fácil.
