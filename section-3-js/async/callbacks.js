// Usando Callbacks
// 3 possible outcomes ["Sunny", "Rainy", "Unexpected Error"];
const fatherWillDecide = (weather) => {
  console.log(`Father Says that!`);
  if (weather === "Sunny") {
    console.log(`I have decided that we are going fishing!!!`);
  } else if (weather === "Rainy") {
    console.log(
      `It's going to rain so, I have decided that we are staying in playing playstation!`
    );
  } else {
    console.log(
      `Son since you were not able to see the weather, I have decided to stay at home and just chill...`
    );
  }
};

const sonChecksWeather = () => {
  const possibleOutcome = ["Sunny", "Rainy", "Unexpected Error"];
  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 2);
    const result = possibleOutcome[randomNumber];
    console.log(`The weather is ${result}`);
    fatherWillDecide(result);
  }, 1000);
};
sonChecksWeather();
