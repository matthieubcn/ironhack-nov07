// Data types JS

// Tenemos 2 tipos de datos en este tipo de lenguaje :)

// Tenemos Datos Primitivos y noPrimitivos. En pocas palabras los datos primitivos representan un valor y los datos no primitivos los podemos entender como composiciones de datos primitivos, que vendrian siendo lo que en JS llamamos "OBJETOS o ARRAYS"

// Segun MDN los datos primitivos son tipos de datos que no estan compuestos por un objeto, array y no tenga algun metodo.

// En JS tenemos estos 6 tipos de datos primitivos:

//     - numeros
//     - strings
//     - Booleanos
//     - null
//     - undefined
//     - symbolos -  — that's guaranteed to be unique.

// Datos Primitivos - Examples

// Numeros
console.log(8);
console.log(8.5);
//nan === not a number
let f = "hello";
console.log(8 / f); // NAN;

// Strings
console.log("Wu tang clan is for the children");
console.log("8"); // esto se parsea como un STRING ya que el "8" esta dentro de los doubleQuotes.

// Booleanos - TRUE || FALSE
console.log(true);
console.log(false);

// null
console.log(null);

//Undefined
let diego = undefined;
// ESTO NO ES LO MISMO PORQUE JS LO PARSEA COMO UN STRING VACIO YA QUE TIENE LOS DOUBLEQUOTES DESPUES DE INICIALIZAR LA VARIABLE
//let diego = "";
console.log(typeof diego);

// Symbol
let barcelona = Symbol("borne");
console.log(typeof barcelona);
console.log(Symbol("borne") === Symbol("borne"));

// En JS tenemos estos 2 tipos de datos noPrimitivos:

//     - Arrays - Arrays
//     - Objects - Objetos
//
// Datos No Primitivos - Examples

// Array

// Array Example - 1
// UNCOMMENT TO DISPLAY CODE
// console.log("This is my cool table of Funk Artists:");
// console.log("Using just strings");
// console.table([
//   "Daft Punk",
//   "Marc Rebillet",
//   "Anderson Paak",
//   "Silk Sonic",
//   "Los Amigos Invisibles",
// ]);

// Array Example - 2
// UNCOMMENT TO DISPLAY CODE
// console.log("This is my cool table of Funk Artists:");
// console.log("Mix of primitive dataTypes");
// console.table([
//   "Daft Punk",
//   5,
//   "Anderson Paak",
//   false,
//   "Los Amigos Invisibles",
//   undefined,
// ]);

// Objetos
// ejemplo syntax initialization = {}
// ejemplo syntaxt context = { key: "value" }

// EXAMPLE - 1
// COMPLEX
console.log("My Bio");
// console.table({
//   firstName: "Diego",
//   lastName: "Zito",
//   ocuppation: "FE - Instructor",
//   hobbies: [
//     "Music",
//     "Guitar Playing",
//     "Piano",
//     "Surfing",
//     "Cycling",
//     "Stoicism",
//   ],
//   skills: {
//     surfing: "Excellent",
//     skiing: 0,
//     guitar: ["Acoustic", "Electronic"],
//     instruments: {
//       percussion: ["Drums", "Toms", "Snares", "Cymbal"],
//       string: ["Guitar", "Bass", "Cuatro"],
//     },
//   },
// });

// EXAMPLE 2
// ARRAY OF OBJECTS
console.table([
  {
    movie: "Wolf of Wallstreet",
    genre: ["Drama", "Action", "Comedy"],
    director: ["Martin Scorsese"],
    location: "New York City, NY",
    actors: ["Jonah Hill", "Margo Robbie", "Leo Di Caprio"],
    year: 2010,
  },
  {
    movie: "Fight Club",
    genre: ["Drama", "Noir", "Comedy", "Action"],
    director: ["David Fincher"],
    location: "Los Angeles, California",
    actors: ["Bradd Pitt", "Edward Norton", "Helena Bonham Carter"],
    year: 1999,
  },
  {
    movie: "The Neon Demon",
    genre: ["Aleix", "Thriller", "Drama"],
    director: ["Nicolas Winding Refn"],
    location: "Copenhagen, Denmark",
    actors: ["Elle Fanning", "Jenna Malone", "Keanu Reeves"],
    year: 2016,
  },
]);

// Using the same object but storing it within a variable:
const movies = [
  {
    movie: "Wolf of Wallstreet",
    genre: ["Drama", "Action", "Comedy"],
    director: ["Martin Scorsese"],
    location: "New York City, NY",
    actors: ["Jonah Hill", "Margo Robbie", "Leo Di Caprio"],
    year: 2010,
  },
  {
    movie: "Fight Club",
    genre: ["Drama", "Noir", "Comedy", "Action"],
    director: ["David Fincher"],
    location: "Los Angeles, California",
    actors: ["Bradd Pitt", "Edward Norton", "Helena Bonham Carter"],
    year: 1999,
  },
  {
    movie: "The Neon Demon",
    genre: ["Aleix", "Thriller", "Drama"],
    director: ["Nicolas Winding Refn"],
    location: "Copenhagen, Denmark",
    actors: ["Elle Fanning", "Jenna Malone", "Keanu Reeves"],
    year: 2016,
  },
];

console.table(movies);
console.log(movies[0].actors[1]);
// Conventional Way - PRIOR ES6
console.log(
  "My favorite actor of the movie Wolf of Wallstreet is " + movies[0].actors[1]
);

// Modern Way - POST ES6
// Template Literals
console.log(
  `My Fav actor of wolfie using template literals would be ${movies[0].actors[1]}`
);
