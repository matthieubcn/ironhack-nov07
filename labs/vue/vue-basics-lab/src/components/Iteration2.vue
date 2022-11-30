<template>
  <section>
    <!-- Iteration 2 - Part 1 -->
    <!-- Math operation inside the template with some textInterolation === bigotes :)  -->
    <div>
      <h1>Iteration 002 - P1</h1>
      <!-- Solution - 001 -->
      <h2>{{ 2 + 2 }}</h2>
      <!-- Solution 002 -->
      <h2>{{ mathOperation }}</h2>
      <!-- Solution 003 -->
      <h2>{{ number1 + number2 }}</h2>
    </div>
    <!-- Iteration 2 - Part 2 -->
    <div>
      <h1>Iteration 002 - P2</h1>
      <!-- Solution 001 -->
      <h2>{{ textFunction() }}</h2>
      <!-- Solution 002 -->
      <h2 v-text="texto"></h2>
    </div>
    <!-- Iteration 1.2 - WITH COMPUTED PROPERTY -->
    <!-- WORKING WITH V-MODEL & COMPUTED PROPERTIES 
  LETS GET IT :) -->
    <div>
      <h1>Iteration 002 - P1 - ALTERNATE - Computed & v-model</h1>
      <input type="text" v-model="num1" />
      <span> + </span>
      <input type="text" v-model="num2" />
      <div>
        <h2>El resultado de la operacion es: {{ resultado }}</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
//Iteration 2 - Part 1
// Iteration 2.2
const mathOperation = ref(2 * 4);
// Iteration 2.3
const number1 = ref(4);
const number2 = ref(5);

//Iteration 2 - Part 2
const textFunction = () => {
  return "Wu Tang Clan is for the children!";
};
// Iteration 2.2
const texto = ref("Wu Tang Clan is for the children!");

//Iteration 1.2 - WITH COMPUTED PROPERTY
const num1 = ref("0");
const num2 = ref("0");

const resultado = computed(() => {
  return parseInt(num1.value) + parseInt(num2.value);
});
</script>

<style scoped>
h1 {
  text-decoration: underline;
}
</style>
