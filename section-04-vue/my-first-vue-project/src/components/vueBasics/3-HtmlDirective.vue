<template>
  <div id="using-v-html-directive">
    <h1>Using a v-html Directive</h1>
    <div v-html="alexisFavBand"></div>
    <div v-html="htmlCrossSide"></div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let alexisFavBand = ref(`
<div>
      <h1>The Red Hot Chilli Peppers</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est excepturi
        fuga quae cum laborum fugit deserunt facilis voluptatum ad illo veniam,
        minima nisi! Accusamus amet voluptatem aut iusto unde aliquid.
      </p>
      <img
      class="hello"
        src="https://imagenes.america.elpais.com/resizer/1d1vRBsUUg7KtoGwSCwyKmDvxZU=/1960x1103/filters:focal(1658x102:1668x112)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/PTKRWTYYSNBORB27FAGTSU6YDM.jpg"
        alt=""
      />
    </div>
`);

const htmlCrossSide = ref(
  ` <a href="" onClick="alert('you have been hacked')">Click me please</a>`
);
</script>

<style>
.hello {
  width: 50%;
}
</style>
