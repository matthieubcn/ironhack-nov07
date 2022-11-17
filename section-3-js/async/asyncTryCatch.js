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
  }, 1000);
});

const fatherWillDecide = async () => {
  try {
    const weather = await sonChecksWeather;
    if (weather === "Sunny") {
      console.log(`I have decided that we are going fishing!!!`);
    } else if (weather === "Rainy") {
      console.log(
        `It's going to rain so, I have decided that we are staying in playing playstation!`
      );
    }
  } catch (dudeson) {
    console.log(dudeson);
  }
};

fatherWillDecide();
