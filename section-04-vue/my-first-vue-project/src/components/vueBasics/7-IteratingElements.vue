<template>
  <h1>Iterating Elements</h1>
  <div id="v-for-directive">
    <!-- SYNTAX ESPECIAL que se llama v-for, este directive tal cual como funciona
    este bucle dentro de vanillaJS, acepta un paramtero que viene siendo la
    lista o la data que queremos iterar, el otro parametro que podemos pasarle
    viene siendo un parametro que nosotros mismos nombramos :), aparte de estos
    2 paraemtros podemos pasarle un tercer parametro que es el key el key es un
    elemento unico dentro de cada iteracion de la lista para asegurarnos de no
    tener ningun tipo de inconsistencia dentro de la data :) -->

    <div id="iterating-arrays">
      <h3>Lista de equipos de futbol del mundial</h3>
      <!-- Ejemplo 001 - usando el paramtero individual que nos creamos noostors "worldCupTeam" como key para iterar correctamente dentro de la lista -->
      <ul>
        <li v-for="worldCupTeam in worldCupTeams" v-bind:key="worldCupTeam">
          {{ worldCupTeam }}
        </li>
      </ul>
      <!-- Ejemplo 002 - usando el index/indice === numero de cada elemento correspondiente del array :) -->
      <ul>
        <li v-for="(worldCupTeam, index) in worldCupTeams" :key="index">
          {{ index }} - {{ worldCupTeam }}
        </li>
      </ul>
    </div>
    <div id="iterating-array-of-objects">
      <h3>Lista de Comidas :)</h3>
      <ul>
        <li v-for="(foodType, index) in foodTypes" :key="index">
          <div>
            <h4>{{ foodType.name }}</h4>
            <h6>{{ foodType.countryOrigin }}</h6>
            <p>{{ foodType.rating }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div id="iterating-array-of-objects-contaning-an-array">
      <div v-for="(actor, index) in actors">
        <h3>{{ actor.name }}</h3>
        <h5 v-for="(movie, index) in actor.movies">
          {{ index }} - {{ movie }}
        </h5>
        <!-- <ul>
          <li v-for="(movie, index) in actor.movies" :key="movie">
            {{ index }} - {{ movie }}
          </li>
        </ul> -->
      </div>
    </div>
    <div id="iterating-throguh-properties-of-an-object">
      <ul>
        <li v-for="value in myInfo" :key="value">
          {{ value }}
        </li>
        <hr />
        <ul>
          <li v-for="(value, pepito, index) in myInfo" :key="index">
            {{ value }} - {{ index }} - {{ pepito }}
          </li>
        </ul>
      </ul>
    </div>
    <div id="conditionally-rendering-listItems-using-vFor-directive">
      <template v-for="artist in hipHopArtists" :key="artist">
        <h2 v-if="artist === 'De La Soul' || artist === 'Ms. Lauryn Hill'">
          {{ artist }}
        </h2>
        <h2 v-else>There is no artst with tha particular name</h2>
      </template>
    </div>
  </div>
  <div id="class-excercises"></div>
</template>

<script setup>
import { reactive } from "vue";

// Iterating Arrays
const worldCupTeams = reactive([
  "Argentina",
  "Brazil",
  "España",
  "Serbia",
  "Francia",
  "Francia",
]);

// Iterating array of objects
const foodTypes = reactive([
  { name: "Pizza", countryOrigin: "Italia", rating: "5/5" },
  { name: "Sushi", countryOrigin: "Japan", rating: "5/5" },
  { name: "Fajitas", countryOrigin: "Mexico", rating: "15/5" },
  { name: "Paella", countryOrigin: "Spain", rating: "5/5" },
]);

// Iterating an array of an array within an object
const actors = reactive([
  {
    name: "Robert De Niro",
    movies: ["The Godfather II", "Casino", "Goodfellas"],
  },
  {
    name: "Daniel Day Lewis",
    movies: [
      "There will be blood",
      "The Last of the Mohicans",
      "Gangs of New York",
    ],
  },
  {
    name: "Merryl Streep",
    movies: ["The Devil wears prada", "Kramer vs Kramer", "Sophies Choice"],
  },
]);

// Iterating properties of an object!
const myInfo = reactive({
  name: "Diego Z",
  school: "Ironhack",
  course: "Front End Development Vue",
});

// Iterating through an array and conditionally rendering it's value depending on the value itself
const hipHopArtists = reactive([
  "A tribe Called Quest",
  "De La Soul",
  "Outkast",
  "Missy Elliot",
  "Ms. Lauryn Hill",
]);

// .....
// .....
// .....
// .....
// Ejercicios Iterating Elements

// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.

// Ej.1: Creamos una variable reactiva que contenga un array con vuestras cinco películas preferidas. En el template pondremos un título de My favorite Movies y después una <ol>. Dentro de la ordered list recorreremos el array de películas y crearemos un <li> para cada una que nos las printee en pantalla. A cada <li> le daremos el index del elemento en el array como key.

// Ej.2:  Creamos una variable reactiva que contenga un objeto con cinco keys: favoriteFood, favoriteDrink, favoriteSport, favoriteCountry y favoriteArrayMethod. En el template vamos a recorrer el objeto para mostrar cada key y su valor en una unoredered list (en pantalla deberíamos ver algo como "favoriteFood: Sushi").

// Ej.3***: Creamos una variable reactiva students que contenga un array con al menos tres objetos. Cada objeto representará uno de vuestros compañeros y tendrá las keys name (string), age(number) y favoriteLanguages(array de strings). Tendremos que recorrer el array en el template y para cada objeto printear el nombre de vuestro compañero. Según si su edad es mayor o menor a 18 printearemos "I can go for a few drinks with NAME after class" o "NAME is still too young, they'll have to go home tonight". Finalmente, loopeamos el array de sus lenguajes de programación favoritos dentro de una unordered list.
</script>

<style scoped>
#iterating-array-of-objects li {
  outline: 1px solid white;
  padding: 0.5rem;
  margin: 2rem 0;
}
#iterating-array-of-objects h4 {
  font-size: 1.5rem;
}
#iterating-array-of-objects h6 {
  font-size: 1rem;
}
#iterating-array-of-objects p {
  font-size: 0.7rem;
}
</style>
