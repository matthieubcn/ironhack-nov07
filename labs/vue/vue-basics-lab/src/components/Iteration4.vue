<template>
  <section>
    <h1>Iteration 004</h1>
    <p>vue === mirar en frances</p>
    <div v-for="(record, index) in records" :key="index">
      <h4>{{ index }} - {{ record.artist }}</h4>
      <h3>{{ record.recordName }}</h3>
      <h5>{{ record.genre }}</h5>
    </div>
  </section>
</template>
<script setup>
import { reactive } from "vue";

const records = reactive([
  {
    recordName: "Glow On",
    artist: "Turnstile",
    genre: "Hardcore Punk",
  },
  {
    recordName: "Amar la Trama",
    artist: "Jorge Drexler",
    genre: "Poetic Rock",
  },
  {
    recordName: "Per la Bona Gent",
    artist: "Manel",
    genre: "Catalan Rock, Rock de la terra",
  },
]);
</script>

<style></style>
