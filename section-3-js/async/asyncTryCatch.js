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

const fatherWillDecide = async (promesa) => {
  try {
    const weather = await sonChecksWeather;
    if (weather === "Sunny") {
      console.log("Wohoo lets go fishing!");
    } else {
      console.log("It's going to rain so no lets stay!");
    }
  } catch {
    console.log(promesa);
  }
};
fatherWillDecide();
