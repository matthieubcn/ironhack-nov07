<template>
  <h1>Conditinal rendering using v-if, v-else-if, v-else directive</h1>
  <div id="conditional-rendering-part-1">
    <!-- Approach sencillo utilizando un v-if -->
    <h2 v-if="number === 0">Este numero equivale a cero</h2>
    <!-- Expandir la condicion de arriba añadiendo un directivo v-else -->
    <h1 v-else>Este numero no equivale a cero</h1>
    <!-- !!REGLAS: -->
    <!-- v-else y v-else-if, estas dos directivas condicionales tienen que siempre tener un v-if asociado, si no lo tienes te saltara un error en pantalla -->
  </div>
  <hr />
  <div id="conditional-rendering-part-2">
    <!-- Approach uhn poco mas complejo utilizando un v-if adinado dentro del h2 -->
    <h2 v-if="number >= 0">
      <span v-if="number >= 5">Este numero es mas grande que 5</span>
      <span v-else="number <= 5">Este numero es menor o igual que 5</span>
    </h2>
  </div>
  <hr />
  <div id="conditional-rendering-part-3">
    <!-- Trabajando con multiples directivos condicionales :) -->
    <h2 v-if="num === 0">Este numero es cero</h2>
    <h2 v-else-if="num < 0">Este numero es un numero negativo</h2>
    <h2 v-else-if="num > 0 && num >= 10">
      Este numero es un numero positivo mayor o igual a 10
    </h2>
    <h2 v-else>Esto nisiquiera es un numero.... ponete serio....</h2>
  </div>
  <div id="conditional-rendering-part-4">
    <!-- que pasaria si queremos darle visibilidad a mas de 1 elemento mediante nuestras directivas de condicion...  -->

    <!-- soluciones posibles:
    1. añadirle un v-if a cada elemento que queremos condicionar 
    2. wrappear todos los elementos que quiero mostrar dentro un elemento y condicionar ese elemento 
    3. Usar un elemento tipo <template> para evitar inyectar elementos extras dentro del DOM y asi mismo nos desprendemos de mostrar un elemento que capaz nos traiga errores de estilo o de logica.....
    -->

    <!-- Solution  01 -->
    <span>SOLUTION 001</span>
    <h2 v-if="display">Kendrick Lamar</h2>
    <h2 v-if="display">Andre 3000</h2>
    <h2 v-if="display">Slick Rick</h2>

    <!-- Solution 02 -->
    <span>SOLUTION 002</span>
    <div v-if="display">
      <h2>Kendrick Lamar</h2>
      <h2>Andre 3000</h2>
      <h2>Slick Rick</h2>
    </div>

    <!-- Solution 03 -->
    <span>SOLUTION 003</span>
    <template v-if="display">
      <h2>Kendrick Lamar</h2>
      <h2>Andre 3000</h2>
      <h2>Slick Rick</h2>
    </template>
  </div>
  <div id="conditional-rendering-part-5">
    <!-- usando un v-show directivo -->
    <h2 v-show="showElement">Usando un v-show directive</h2>
    <h2 v-if="showElement">Usando un v-if directive</h2>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Ejemplos de conditional rendering part 1 & 2
const number = ref(15);

// Ejemplos de conditional rendering part 3
const num = ref(14);

//Ejemplos de condtional rendering part 4
const display = ref(true);

//Ejemplos de conditional rendering part 5
const showElement = ref(false);
</script>

<style scoped>
hr {
  margin: 0.5rem 0;
}
</style>
