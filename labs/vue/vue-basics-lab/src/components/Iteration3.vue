<template>
  <h1>Iteration 003</h1>
  <!-- Using a v-if-v-else directive - dependind of variable "conditional" -->
  <div>
    <h4 v-if="conditional">
      Mostramos este elemento dependiendo del valor del booleano que se la
      asigna al directivo v-if sea TRUE
    </h4>
    <h4 v-else>
      Mostramos este elemento dependiendo del valor del booleano que se la
      asigna al directivo v-if sea FALSE
    </h4>
  </div>
  <!-- Using a v-show directive - dependind of variable "showmanship" -->
  <div>
    <h4 v-show="showmanship">
      Mostramos este elemento dependiendo del valor del booleano que se la
      asigna al directivo v-show sea TRUE, veremos que la differencia aca es que
      dentro del DOM no se elimina este elemento chicos ya que se le alocaliza
      una propiedad de display:none al elemento.
    </h4>
  </div>
  <!-- Using a v-if-v-else directive - dependind of variable "wuTang", with the addition of writing the conditional within the directive, basically making sure that the conditions are met -->
  <div>
    <h4 v-if="wuTang === true">
      Mostramos este elemento dependiendo del valor del booleano que se la
      asigna al directivo v-if sea TRUE
    </h4>
    <h4 v-else>
      Mostramos este elemento dependiendo del valor del booleano que se la
      asigna al directivo v-if sea FALSE
    </h4>
  </div>
</template>

<script setup>
import { ref } from "vue";

const conditional = ref(false);
const showmanship = ref(true);
const wuTang = ref(false);
</script>

<style></style>
