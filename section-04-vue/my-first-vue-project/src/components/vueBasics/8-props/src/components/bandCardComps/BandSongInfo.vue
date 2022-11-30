<template>
  <p>
    {{ props.bandSongInfo }}
  </p>
</template>

<script setup>
const props = defineProps({
  bandSongInfo: String,
});
</script>
