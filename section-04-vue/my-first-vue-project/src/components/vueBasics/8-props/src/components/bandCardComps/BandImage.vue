<template>
  <img :src="props.bandImage" alt="" />
</template>

<script setup>
const props = defineProps({
  bandImage: String,
});
</script>
