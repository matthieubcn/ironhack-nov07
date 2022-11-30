<!-- Iteration #1 - Create component and show it on the homeScreen -->
<template>
  <!-- Iteration #02 - Mostramos data desde nuestro script tag en el template mediante interpolacion de texto -->
  <h1>{{ wuTangVariable }}</h1>
  <img v-bind:src="wuTangImage.image" :alt="wuTangImage.alternateText" />
  <!-- Itration #03 - Creamos una funcion que nos haga display de algo en consola mediante un click event dentro del template :)  -->
  <!-- Long Version - SYNTAX -->
  <button v-on:click="wuTang()">Click me - LONG SYNTAX</button>
  <!-- Short Version - SYNTAX -->
  <button @click="wuTang">Click me - SHORT SYNTAX</button>
</template>

<script setup>
// Iteration #02 - Mostramos data desde nuestro script tag en el template mediante interpolacion de texto
import { ref, reactive } from "vue";

// Iteration #02 - Variables
const wuTangVariable = ref("Wu Tang Clan is for the Children");
const wuTangImage = reactive({
  image: "http://media.wbur.org/wp/2018/10/wutang-1000x602.jpg",
  alternateText:
    "enter the 36th chambers is one of the most revolutionary hip hop albums of all time!",
});

// Itration #03 - Creamos una funcion que nos haga display de algo en consola mediante un click event dentro del template :)
const wuTang = () => {
  console.log("Wu Tang Clan is for the Children");
  alert("Wu Tang Clan is for the Children");
};
</script>
