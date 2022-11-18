// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//Iteracion 1
// funcion tipo flecha que aceptara un parametro
// porque el param va a ser el array de datos que queremos apuntar.
const getAllDirectors = (moviesArray) => {
  // Usamos el paramatero para iterar y crear un nuevo copia del array en base al metodo map y segmentamos por algo especifico dentro del map mediante una expresion que se encarga de llamar al director.
  const rawList = moviesArray.map((movie) => movie.director);
  // usamos la variable de arriba en conjunto con el metodo filter que le pasamos 2 parametros, uno para apuntar al nombre del director y el segundo es el numero de# del director en el array y comparamos en base a la primera instancia que aparece el nombre del director con las otras veces que aparece para poder filtrar
  const cleanList = rawList.filter(
    (director, index) => rawList.indexOf(director) === index
  );
  // returnamos la variable que queremos usar :)
  return cleanList;
};
console.log("1. Clean list:");
console.table(getAllDirectors(movies));
console.log("---------------------------------");

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// V01 - EXTENDED - TODO EN DOS VARIABLES DENTRO DE LA FUNCION CON EL NOMBRE DE DICHA VARIABLE dramaMovies &  ""
const howManyMoviesExtended = (moviesArray) => {
  const movieDirector = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );
  const dramaMovies = movieDirector.filter((movieGenre) =>
    movieGenre.genre.includes("Drama")
  );
  return dramaMovies;
};

// V02 - Simplified - TODO EN UNA SOLA VARIABLE DENTRO DE LA FUNCION CON EL NOMBRE DE DICHA VARIABLE dramaMovies
const howmanyMovies = (moviesArray) => {
  const dramaMovies = moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  );
  return dramaMovies;
};
console.log("2. Lista de pelis de Drama del Sr. Spielberg:");
console.table(howManyMoviesExtended(movies));
console.log("---------------------------------");

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// Iteration 3: All scores average - Get the average of all scores with 2 decimals

//V001
const scoresAverage = (moviesArray) => {
  // variable para guardar el valor de la suma de los scores
  let totalScores = 0;
  // mappear el array de pelis para sacar todos los scores
  const scores = moviesArray.map((movie) => movie.score);
  // Buclear en base a cada score de cada peli y vamos a sumarle el score a la variable de totalScores por CADA iteracion de los elementos dentro del array
  for (let i = 0; i < scores.length; i++) {
    // totalScores = scores[i] + totalScores; // EXTENDED USING + operator
    totalScores += scores[i]; // SIMPLIFIED USING += operator
  }
  const totalMovieScore = totalScores / moviesArray.length;
  return totalMovieScore.toFixed(2);
};
console.log("3. V-01 - FOR LOOP - promedio pelis es:");
console.table(scoresAverage(movies));
console.log("---------------------------------");

//V002 -
const scoresAverageUsingReduce = (moviesArray) => {
  const scores = moviesArray.reduce((total, movie) => {
    return (total += movie.score);
  }, 0);
  const totalMovieScore = scores / moviesArray.length;
  return totalMovieScore.toFixed(2);
};
console.log("3. V-02 - reduce() Method - promedio pelis es:");
console.table(scoresAverageUsingReduce(movies));
console.log("---------------------------------");

//V003 - DIMITRI
function scoresAverageDimitri(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  // let allMovies = [...moviesArray]
  moviesArray.forEach((movie) => {
    if (
      movie.score === "" ||
      movie.score === null ||
      typeof movie.score !== "number"
    ) {
      movie.score = 0;
    }
  });
  let scores = moviesArray.map((movie) => movie.score);
  const counter = 0;
  const totalScores = scores.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    counter
  );
  return parseFloat((totalScores / scores.length).toFixed(2));
}
console.log("3. V-03 - DIMITRI - reduce() Method - promedio pelis es:");
console.table(scoresAverageDimitri(movies));
console.log("---------------------------------");

// V004
function scoresAverageAldo(moviesArray) {
  if (!moviesArray.length) return 0;

  const ratesArr = moviesArray.map((movieObj) => movieObj.score);

  const rateSum = ratesArr.reduce((acc, num) => (!num ? acc : acc + num), 0);

  return Number((rateSum / moviesArray.length).toFixed(2));
}
console.log("3. V-03 - ALDO - reduce() Method - promedio pelis es:");
console.table(scoresAverageAldo(movies));
console.log("---------------------------------");

// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// ---------------------------------------------
// Iteration 4: Drama movies - Get the average of Drama Movies

// V001
const dramaMoviesScore = (moviesArray) => {
  //recibir todas las pelis que tengan el genero de drama
  const drama = moviesArray.filter((movieDrama) => {
    return movieDrama.genre.includes("Drama");
  });
  // mapeamos la variable drama y sacamos todos los scores de cada peli:)
  const scores = drama.map((movie) => movie.score);
  // variable inicializada a 0 para sumar el valor de cada iteracion de cada score de cada peli.
  let total = 0;
  scores.forEach((scores) => (total += scores));
  return (total / drama.length).toFixed(2);
};
console.log(
  "4. V-01 - filter(), map(), forEach() Methods - promedio de pelis de 'DRAMA' es:"
);
console.table(dramaMoviesScore(movies));
console.log("---------------------------------");

// V002
const dramaMoviesScoreReduce = (moviesArray) => {
  //recibir todas las pelis que tengan el genero de drama
  const drama = moviesArray.filter((movieDrama) => {
    return movieDrama.genre.includes("Drama");
  });
  // Usemos un reduce() para sacar el total
  const scores = drama.reduce((total, movie) => {
    return (total += movie.score);
  }, 0);
  //Dividir
  const totalDrama = scores / drama.length;
  return totalDrama.toFixed(2);
};
console.log(
  "4. V-02 - filter(), reduce() Methods - promedio de pelis de 'DRAMA' es:"
);
console.table(dramaMoviesScoreReduce(movies));
console.log("---------------------------------");

//V003
function dramaMoviesScoreReusingFunction(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  return scoresAverage(dramaMovies);
}
console.log(dramaMoviesScoreReusingFunction(movies));
console.log(
  "4. V-03 - Reusing scoresAverage() function - promedio de pelis de 'DRAMA' es:"
);
console.table(dramaMoviesScoreReduce(movies));
console.log("---------------------------------");

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // Creamos copia del array mediante un map() method
  //const copyOfMovies = moviesArray.map((movie) => movie);
  const copyofMoviesSpread = [...moviesArray];
  // Sortear y comparar con un metodo de STRINGS que se llama localeCompare()
  copyofMoviesSpread.sort((a, b) => {
    if (a.year > b.year) return a.year - b.year;
    if (a.year < b.year) return a.year - b.year;
    else return a.title.localeCompare(b.title);
  });
  return copyofMoviesSpread;
}
console.log("5. V-01 - Pelis ordenadas por año descendiente y alfabeticamete");
console.table(orderByYear(movies));
console.log("---------------------------------");

function orderByYearSanti(moviesArray) {
  let newArray = [];
  newArray = moviesArray.sort((a, b) => a.year - b.year);
  return newArray;
}
console.log(
  "5. V-02 - SANTI - Pelis ordenadas por año descendiente y alfabeticamete"
);
console.table(orderByYearSanti(movies));
console.log("---------------------------------");

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (moviesArray) => {
  return (
    moviesArray
      .map((movie) => movie.title)
      //.filter((movie) => movie.title)
      .sort()
      .slice(0, 20)
  );
};
console.log("6. V-01 - Order ascendiente:");
console.table(orderAlphabetically(movies));
console.log("---------------------------------");

function orderAlphabeticallyRaphaela(moviesArray) {
  // let copy = [...moviesArray];
  let movieTitlesAscending = moviesArray
    .sort((a, b) => (a.title > b.title ? 1 : -1))
    .map((movie) => movie.title)
    .slice(0, 21);

  return movieTitlesAscending;
}
console.log("6. V-02 - RAPHAELA - Order ascendiente:");
console.table(orderAlphabeticallyRaphaela(movies));
console.log("---------------------------------");

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
