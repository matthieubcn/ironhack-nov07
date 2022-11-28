<!-- Aca adentro es donde colocaremos nuestro HTML -->
<template>
  <p>Mi nombre es Diego y me gusta mucho programar</p>

  <!-- Usando text interpolation aka syntax de bigotes! -->
  <h1>{{ diego }}</h1>
  <h1>
    Naci en {{ cityOfBirth }}, {{ truthyValue }} venezuela y tengo
    {{ age }} años. {{ nullValue }}
  </h1>
  <h1>{{ myInfo.age }} {{ myInfo.countryOfBirth }} Hola Santi</h1>
  <h1>{{ myInfo.countryOfBirth }}</h1>

  <div>
    <button @click="decreaseCounter">-</button>
    <h1>{{ diego }}</h1>
    <button @click="increaseCounter">+</button>
  </div>
</template>

<!-- Aca adentro es donde colocaremos nuestro JS -->
<script setup>
// Si queremos trabajar con datos primitivos o no primitivos dentro de nuestro script con el composition API tenemos que activar nuestra reactividad. Esta reactividad por defecto se usan 2 tipos de metodos nativos al framework para poder trabajar de una manera reactiva.
// Un metodo se llama ref()
// Un metodo se llama rective()

// Pasos:
// Primero nos tenemos que importar estos metodos desde la libreria de vue :)
import { ref, reactive } from "vue";

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
};
const decreaseCounter = () => {
  diego--;
};
</script>

<!-- Aca adentro es donde colocaremos nuestro CSS -->
<style></style>
