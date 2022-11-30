<template>
  <p>{{ props.bandSong }}</p>
</template>

<script setup>
const props = defineProps({
  bandSong: String,
});
</script>
