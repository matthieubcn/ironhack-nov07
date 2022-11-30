<template>
  <h1>hello</h1>
  <h1>{{ name }}</h1>
  <h4>{{ age }}</h4>
  <h4>{{ birthPlace }}</h4>
  <h4>{{ currentLocation }}</h4>
</template>

<script setup>
import { ref, reactive } from "vue";

// Syntax inicial :)
//defineProps({})

defineProps({
  name: {
    type: String,
    required: false,
    default: "Some Random Name",
  },
  age: {
    type: Number,
    default: 0,
  },
  birthPlace: {
    type: String,
  },
  currentLocation: {
    type: String,
    required: true,
    default: "Barcelona, España",
  },
});
</script>

<style></style>
