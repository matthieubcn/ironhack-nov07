<script setup>
import { ref, watch, reactive } from "vue";

// EXPLICACION:

//Las propiedades computadas nos permiten calcular declarativamente valores derivados. Sin embargo, hay casos en los que necesitamos realizar "efectos secundarios" en reacción a los cambios de estado - por ejemplo, mutando el DOM, o cambiando otra pieza de estado basada en el resultado de una operación asíncrona.

//Con la API de composición, podemos utilizar la función de "vigilancia" para desencadenar una devolución de llamada cada vez que cambie un fragmento de estado reactivo:

// Un watcher es una característica especial de Vue.js que te permite "vigilar" una
// propiedad del estado del componente, y ejecutar una función cuando el valor de
// esa propiedad cambia.

// Como su nombre indica, se limita a vigilar una propiedad

// para detectar cualquier cambio. Cuando usar watchers? - Quieres escuchar cuando
// una propiedad de datos cambia, y realizar alguna acción. - Quiere escuchar el
// cambio de valor de una propiedad - Sólo necesita escuchar una propiedad
// específica (no puede ver varias propiedades al mismo tiempo) - Quiere vigilar
// una propiedad de datos hasta que alcance algún valor específico y entonces hacer
// algo

// SOURCE TYPES
// El primer argumento de watch puede ser diferentes tipos de "fuentes" reactivas: puede ser una ref (incluyendo refs computadas), un objeto reactivo, una función getter, o un array de múltiples fuentes:
const x = ref(0);
const y = ref(0);

// single ref
watch(x, (newX) => {
  console.log(`x is ${newX}`);
});

// getter
watch(
  () => x.value + y.value,
  (sum) => {
    console.log(`sum of x + y is: ${sum}`);
  }
);

// array of multiple sources
watch([x, () => y.value], ([newX, newY]) => {
  console.log(`x is ${newX} and y is ${newY}`);
});

// --- EJEMPLO NO OBSERVAR UNA PROPIEDAD REACTIVA
// ----
// ----
//Ten en cuenta que no puedes observar una propiedad de un objeto reactivo de esta manera:
const obj = reactive({ count: 18 });

// esto no funcionará porque estamos pasando un número a watch()
// watch(obj.count, (count) => {
//   console.log(`count is: ${count}`);
// });

// en su lugar, utilice un getter:
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`);
  }
);
// ----
// ----
// ----
// ----
</script>

<template>
  <div id="breakdown">
    <h3>Breakdown</h3>
    <p>{{ x + y }}</p>
    <input v-model="x" />
    <input v-model="y" />
  </div>
</template>

<style>
#watchers {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.underline {
  text-decoration: underline;
}
.promoted {
  font-style: italic;
}
.new {
  color: olivedrab;
}
.sold-out {
  color: red;
}
label {
  font-weight: bold;
  display: flex;
  margin-bottom: 5px;
}
input + label {
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}
input[type="text"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
