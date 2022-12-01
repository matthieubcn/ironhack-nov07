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

// EJEMPLOS
//EXAMPLE 1 - Name Change
let name = ref("Jarko");

function changeName() {
  name.value = "Aleix";
}

watch(name, (newValue, oldValue) => {
  console.log(`New Value is ${newValue} - the old value was ${oldValue}`);
});

//EXAMPLE 2 - Volume tracker
let volume = ref(0);

//Watch Function to monitor volume change and display alert msg is user goes over 8decibels...

// V1
watch(volume, (newValue, oldValue) => {
  if (newValue > oldValue && newValue === 8) {
    alert(
      "Yo yo yo my individual, you better check your ears cause you'll be deaf in a few years!"
    );
  }
});

// V2 - Jumps alert once we go back down, not the best useCase for our users....
watch(volume, (newValue, oldValue) => {
  if (newValue === 8) {
    alert(
      "Yo yo yo my individual, you better check your ears cause you'll be deaf in a few years!"
    );
  }
});

//EXAMPLE 3 - Mutating Arrays
const movieList = ref(["Batman", "Spiderman"]);

function addMovie() {
  movieList.value.push("Saving Private Ryan");
}

// Why Deep true ?
//Using Watchers with Objects and Arrays, if you dont specify deep: true there is no way of accesing the objects or arrays elements
watch(
  movieList,
  (newValue, oldValue) => {
    console.log(`Updated List ${newValue}`);
  }
  //   { deep: true }
);

// EXAMPLE 4 - ASKING A QUESTION
const question = ref("");
const answer = ref("Questions usually contain a question mark. ;-)");

// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    answer.value = "Thinking...";
    try {
      const res = await fetch("https://yesno.wtf/api");
      answer.value = (await res.json()).answer;
    } catch (error) {
      answer.value = "Error! Could not reach the API. " + error;
    }
  }
});
</script>

<template>
  <div id="breakdown">
    <h3>Breakdown</h3>
    <p>{{ x + y }}</p>
    <input v-model="x" />
    <input v-model="y" />
  </div>
  <div id="example-1">
    <h3>Example 1</h3>
    <p>My Name is what? My name is who? my name is {{ name }}</p>
    <button @click="changeName()">Change My Name</button>
  </div>

  <div id="ejemplo-2">
    <h3>Example 2</h3>
    <h3>Volume Tracker (0-20)</h3>
    <p>
      The current volume is <strong>{{ volume }}</strong>
    </p>
    <div>
      <button @click="volume -= 1">Decrease</button>
      <button @click="volume += 1">Increase</button>
    </div>
  </div>

  <div id="ejemplo-3">
    <h3>Example 3</h3>

    <!-- Mutating Arrays -->

    <!-- Since we are mutating an array, we need to add extra functionality to the watcher function, which is the deep:true -->
    <button @click="addMovie">Add Movie - push()</button>

    <!-- concat returns new array thus we can use this approach to create a new one instead of mutating them, remove the deep:true on the watcher function to test this out!  -->
    <button @click="movieList = movieList.concat(['Titanic'])">
      Add Movies - concat()
    </button>

    <h3>Movie List</h3>
    <p v-for="(movie, index) in movieList" :key="index">
      {{ movie }}
    </p>
  </div>

  <div id="ejempl-4">
    <h1>Ejemplo 4</h1>
    <p>
      Ask a yes/no question:
      <input v-model="question" />
    </p>
    <p>{{ answer }}</p>
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
