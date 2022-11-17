// COMANDO DE NODE PARA VER RESULTADOS:
// node movies.js

//const movies = require('./data');
import { movies } from './data.js';
//Iteracion 1
// funcion tipo flecha que aceptara un parametro
// porque el param va a ser el array de datos que queremos apuntar.
const getAllDirectors = (moviesArray) => {
  // Usamos el paramatero para iterar y crear un nuevo copia del array en base al metodo map y segmentamos por algo especifico dentro del map mediante una expresion que se encarga de llamar al director.
  const rawList = moviesArray.map((movie) => movie.director);
  // usamos la variable de arriba en conjunto con el metodo filter que le pasamos 2 parametros, uno para apuntar al nombre del director y el segundo es el numero de# del director en el array y comparamos en base a la primera instancia que aparece el nombre del director con las otras veces que aparece para poder filtrar
  const cleanList = rawList.filter(
    (director, numeroDePocisionDirectorEnElArray) =>
      rawList.indexOf(director) === numeroDePocisionDirectorEnElArray
  );
  // returnamos la variable que queremos usar :)
  return cleanList;
};
console.log('1. Clean list:');
console.log(getAllDirectors(movies));
