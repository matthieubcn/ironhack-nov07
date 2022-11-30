<template>
  <br />
  <button class="fancy-btn">
    <slot />
  </button>
  <br />
  <h1>
    <slot />
  </h1>
  <br />
  <strong class="black">
    <slot />
  </strong>
  <br />
  <div class="sloth-flex">
    <slot />
    <slot />
    <slot />
  </div>
  <br />
</template>

<style>
.black {
  background: green;
  color: black;
}

.sloth-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

<script setup></script>
