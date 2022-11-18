// Usando promesas

// Como a alternativa a callbacks, ES6 introdujo las promesas a JS.

// Idea es sencilla, es un metodo nuevo de JS  que contiene 2 funciones

// 1ra Funcion - Resuelve / Reolve - Se llama cuando una tarea es exitosa(couando el hijo suba al arbol y revisa el estado del tiempo. Independiente del estado del tiempo.)

// 2do Funcion = Rechaza . Rejects - se llama cuando nos encontramos con cualquiere error (el hijo nunca se pudo subir al arbol)
// let myPromise = new Promise((resolve, reject) => {});

const sonChecksWeather = new Promise((resolve, reject) => {
  setTimeout(() => {
    const possibleOutcome = ["Sunny", "Rainy", "Unexpected Error"];
    const randomNumber = Math.floor(Math.random() * 2);
    const result = possibleOutcome[randomNumber];
    console.log(`The weather is ${result}`);

    // Condiciones
    if (result === "Sunny" || result === "Rainy") {
      resolve(result);
    } else {
      reject(
        new Error(`Dad, could not get up the tree so no luck for us.... `)
      );
    }
  }, 2000);
});

/// Father will decide!
const fatherWillDecide = sonChecksWeather.then((weather) => {
  if (weather === "Sunny") {
    console.log("Wohoo lets go fishing!");
  } else {
    console.log("It's going to rain so no lets stay!");
  }
});
