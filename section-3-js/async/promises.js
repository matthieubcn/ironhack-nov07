// Usando promesas

// Como a alternativa a callbacks, ES6 introdujo las promesas a JS.

// Idea es sencilla, es un metodo nuevo de JS  que contiene 2 funciones

// 1ra Funcion - Resuelve / Reolve - Se llama cuando una tarea es exitosa(couando el hijo suba al arbol y revisa el estado del tiempo. Independiente del estado del tiempo.)

// 2do Funcion = Rechaza . Rejects - se llama cuando nos encontramos con cualquiere error (el hijo nunca se pudo subir al arbol)

const sonChecksWeather = new Promise((resolve, reject) => {
  setTimeout(() => {
    const possibleOutcome = ["Sunny", "Rainy", "Unexpected Error"];
    const randomNumber = Math.floor(Math.random() * 3);
    const result = possibleOutcome[randomNumber];
    console.log(`The weather is ${result}`);

    //Tanto rainy como sunny son las useCases que estaremos resolviendo dentro del resolve
    if (result === "Sunny" || result === "Rainy") {
      resolve(result);
    }
    // El caso de que el hijo no se pueda montar en el arbol es lo que estaremos rechazando
    else {
      reject(new Error(`I cannot tell you what the weather is!`));
    }
  }, 200);
});

const fatherWillDecide = sonChecksWeather.then((weather) => {
  if (weather === "Sunny") {
    console.log(`I have decided that we are going fishing!!!`);
  } else if (weather === "Rainy") {
    console.log(
      `It's going to rain so, I have decided that we are staying in playing playstation!`
    );
  }
});
