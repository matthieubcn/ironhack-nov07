<!-- Aca adentro es donde colocaremos nuestro HTML -->
<template>
  <!-- Usando text interpolation aka syntax de bigotes! -->
  <h1>
    Naci en {{ cityOfBirth }}, {{ truthyValue }} venezuela y tengo
    {{ age }} años. {{ nullValue }}
  </h1>
  <h1>{{ myInfo.age }} {{ myInfo.countryOfBirth }} Hola Santi</h1>

  <h1>{{ 2 + 2 }}</h1>

  <!-- EJEMPLO DE REACTIVIDAD  -->
  <div>
    <button @click="decreaseCounter">-</button>
    <h1>{{ diego }}</h1>
    <button @click="increaseCounter">+</button>
  </div>
  <!-- Ejercicio #1 -->
  <div></div>

  <!-- EJMPLO DE INYECCION DE COMPONENTES DENTRO DE COMPONENTES -->
  <!-- <HtmlDirective />
  <TextDirective /> -->
</template>

<!-- Aca adentro es donde colocaremos nuestro JS -->
<script setup>
// Si queremos trabajar con datos primitivos o no primitivos dentro de nuestro script con el composition API tenemos que activar nuestra reactividad. Esta reactividad por defecto se usan 2 tipos de metodos nativos al framework para poder trabajar de una manera reactiva.
// Un metodo se llama ref()
// Un metodo se llama rective()

// Pasos:
// Primero nos tenemos que importar estos metodos desde la libreria de vue :)
import { ref, reactive } from "vue";
import TextDirective from "./2-TextDirective.vue";
import HtmlDirective from "./3-HtmlDirective.vue";

// Vamos a decalrar variables que contengan el metodo dentro para poder trabajar correctamente datos que sean reactivos:)

const diego = 0;

// Primitive Data Types
const cityOfBirth = ref("valencia");
const age = ref(31);
const truthyValue = ref(false);
const nullValue = ref(null);

// Non Primitive Data Types
const myInfo = reactive({
  age: 31,
  cityOfBirth: "Valencia",
  countryOfBirth: "Venezuela",
  likesAlcohol: true,
});

const counter = reactive({
  count: 0,
  title: "My counter",
});

const increaseCounter = () => {
  diego++;
  console.log("Wu tang clan");
};
const decreaseCounter = () => {
  diego--;
};

// EJERCICIO
const myInfo2 = reactive({
  name: "Diego Zito",
  age: 31,
  dob: "May 16, 1991",
  hobbies: ["Programming", "Surfing", "Snowboarding", "Cooking", "Guitar"],
});
const favMovie = ref("Gangs of New York");
const favFood = ref("Mexican Food");
const timesWathed = ref(32);
</script>

<!-- Aca adentro es donde colocaremos nuestro CSS -->
<style></style>
