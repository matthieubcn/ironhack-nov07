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
  </div>
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
