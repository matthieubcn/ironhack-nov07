<template>
  <div>
    <h2>{{ props.bandInfo.name }}</h2>
    <h5>{{ props.bandInfo.genre }}</h5>
  </div>
</template>

<script setup>
const props = defineProps({
  bandInfo: Object,
});
</script>
