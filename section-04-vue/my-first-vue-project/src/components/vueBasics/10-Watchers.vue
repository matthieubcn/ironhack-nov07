<script setup>
import { ref, watch, reactive, computed } from "vue";

// EXPLICACION:

//Las propiedades computadas nos permiten calcular declarativamente valores derivados. Sin embargo, hay casos en los que necesitamos realizar "efectos secundarios" en reacción a los cambios de estado - por ejemplo, mutando el DOM, o cambiando otra pieza de estado basada en el resultado de una operación asíncrona.

//Con la API de composición, podemos utilizar la función de "vigilancia" para desencadenar una devolución de llamada cada vez que cambie un fragmento de estado reactivo:

// Un watcher es una característica especial de Vue.js que te permite "vigilar" una
// propiedad del estado del componente, y ejecutar una función cuando el valor de
// esa propiedad cambia.

// Como su nombre indica, se limita a vigilar una propiedad

// para detectar cualquier cambio.

//Cuando usar watchers ? - Quieres escuchar cuando
// una propiedad de datos cambia, y realizar alguna acción. - Quiere escuchar el
// cambio de valor de una propiedad - Sólo necesita escuchar una propiedad
// específica (no puede ver varias propiedades al mismo tiempo) - Quiere vigilar
// una propiedad de datos hasta que alcance algún valor específico y entonces hacer
// algo

// SOURCE TYPES
// El primer argumento de watch puede ser diferentes tipos de "fuentes" reactivas: puede ser una ref (incluyendo refs computadas), un objeto reactivo, una función getter:
const x = ref(0);
const y = ref(0);

// syntax:
//watch();
//inside variable
//const diego = watch()
// watch(primer-paramtero, segundo-parametro);
// Primer paramtero puede el tipo de fuente reactiva que queremos cambiar o puedo ser un set de tipos(ADVANCED)

// single ref
// watch(x, (newX) => {
//   console.log(`x is ${newX}`);
// });

// getter
// watch(
//   () => x.value + y.value,
//   (sum) => {
//     console.log(`sum of x + y is: ${sum}`);
//   }
// );

//array of multiple sources
// watch([x, () => y.value], ([newX, newY]) => {
//   console.log(`x is ${newX} and y is ${newY}`);
// });

// --- EJEMPLO NO OBSERVAR UNA PROPIEDAD REACTIVA
// ----
// ----
//Ten en cuenta que no puedes observar una propiedad de un objeto reactivo de esta manera:
const obj = reactive({ count: 18, name: "Wu Tang" });

// esto no funcionará porque estamos pasando un número a watch()
// watch(obj.count, (count) => {
//   console.log(`count is: ${count}`);
// });

// en su lugar, utilice un getter:
// watch(
//   () => {
//     return obj.count;
//   },
//   (count) => {
//     console.log(`count is: ${count}`);
//   }
// );
// ----
// ----
// ----
// ----

// EJEMPLOS

// EJERCICIO 001  - CAMBIO DE NOMBRE - SLIM SHADY
let name = ref("Aleix");

const changeName = () => {
  name.value = "Slim Shady";
};

watch(name, (newValue, oldValue) => {
  console.log(`
    El nuevo nombre es: ${newValue}
    EL nombre antiguo es: ${oldValue}
  `);
});

// EJERCICIO 002 - VOLUME TRACKER
let volume = ref(0);

// Creamos el watch para monitorear el cambio de volumen y imprimimos en una alerta un mensaje de advertencia que no se quede sord@ el usuario :)
watch(volume, (newVal, oldVal) => {
  if (newVal > oldVal && newVal === 5) {
    alert(`
      heyyyyyyy estas pasandote de volumen, el volumen ${newVal} ya es considerado dañino/harmful para tus orejotas!
    `);
  }
});

// Ejercicio 003 - MUTANDO ARRAYS
// IMPORTANTISMO
// CUANDO TRABAJAMOS CON WATCHERS ESPECIFICAMENTE TRABAJANDO WATCHERS Y APUNTANDO A DATSO NO PRIMITIVOS COMO OBJETOS Y ARRATS, NECESITAMOS EXPANDIR UN POCO EL METODO WATCH!!! CON UN OBJETO QUE SE LLAMA "{DEEP: TRUE}", SI NO EL WATCHER NO PODRA TRABAJAR CON DATOS NOPRIMITIVOS, SIEMPRE DEPENDEMOS DE ESTE OBJETO PARA PODER MUTAR O MANIPULAR ESTOS TIPOS DE DATOS!
const movieList = reactive([
  "Pulp Fiction",
  "Interstellar",
  "Wonder",
  "Jaws",
  "Ray",
]);

const addMoviePush = () => {
  movieList.push("Saving Private Ryan");
};
const addMovieConcat = () => {
  movieList.value.concat([
    "Pulp Fiction",
    "Interstellar",
    "Wonder",
    "Jaws",
    "Ray",
    "Titanic",
    "Life",
    "A Scanner Darkly",
  ]);
};

watch(
  movieList,
  (newVal, oldVal) => {
    console.log(`Lista de las pelis actualizada:${newVal}`);
  },
  // IMPORTANTISMO
  // CUANDO TRABAJAMOS CON WATCHERS ESPECIFICAMENTE TRABAJANDO WATCHERS Y APUNTANDO A DATSO NO PRIMITIVOS COMO OBJETOS Y ARRATS, NECESITAMOS EXPANDIR UN POCO EL METODO WATCH!!! CON UN OBJETO QUE SE LLAMA "{DEEP: TRUE}", SI NO EL WATCHER NO PODRA TRABAJAR CON DATOS NOPRIMITIVOS, SIEMPRE DEPENDEMOS DE ESTE OBJETO PARA PODER MUTAR O MANIPULAR ESTOS TIPOS DE DATOS!
  { deep: true }
);

// EJEMPLO 004 - PREGUNTANDO UNA SIMPLE PREGUNTA

const question = ref("");
const answer = ref(
  "Tipicamente esta pregunta termina con un simbolo de interrogacion"
);

//MONTAMOS WATCHER, MONITEROAMOS LA VARIABLE DE QUESTION y como trabajamos con un api, vamos a declarar una expresion que depende de las keywords async y await y dentro de esta expresion vamos a pasar un condiciional if ANIDADO que dentro del if, ejecutemos un tryCtach para conectarnos a la API y sacar una respuesta a la pregunta :)
watch(question, async (newQuestion, oldQuestion) => {
  if (newQuestion.indexOf("?") > -1) {
    answer.value = "Pensando........ ya te respondo....";
    try {
      const response = await fetch("https://yesno.wtf/api");
      answer.value = (await response.json()).answer;
    } catch (error) {
      answer.value = `Hey, no me pude comunicar con la API, este error equivale a ${error}`;
    }
  }
});

watch(answer, (newVal, oldVal) => {
  console.log(
    `El valor antiguo de la respuesta fue ${oldVal} y el nuevo valor es ${newVal}`
  );
});

// -----
// -----
// -----
// -----
// -----
// Ejercicio de watchers
// Crea un componente que haga lo siguiente:
// 1- Te pregunte si te gusta la pizza inyectando la pregunta en un HTML.
// 2- De la respuesta en función a un JSON que debes crear
// 3- El JSON será un archivo local que conteste "Yey, te gusta la pizza" si dices que sí, "Que raro eres" si dices que no y "contéstame bien" si contestas cualquier otra cosa.
// 4- Junto a la contestación, debe aparecer una imagen divertida

//EJEMPLO DEL JSON
// [
//   {
//     "answer": "no",
//     "image": "https://t3.ftcdn.net/jpg/03/36/81/88/360_F_336818845_1tvrNYhwr19LfGiC4BDAeCJzm0mVHH48.jpg"
// }
// ]
</script>

<template>
  <div id="breakdown">
    <h1>WATCHERS</h1>
    <img
      src="https://www.noticiastrabajo.es/uploads/images/2022/11/vigilantes-securitas-ofertas.jpg"
      alt="Los Watchers"
    />
  </div>
  <div id="breakdown">
    <h3>Breakdown</h3>
    <!-- <p>{{ x + y }}</p> -->
    <input v-model="x" />
    <input v-model="y" />
    <input type="number" v-model="obj.count" />
  </div>
  <div id="ejemplo-1">
    <h3>Ejemplo 001</h3>
    <p>My name is what? my name is who? my name is what? {{ name }}</p>
    <button @click="changeName()">click me to see slim shady</button>
  </div>
  <div id="ejemplo-2">
    <h3>Ejemplo 002</h3>
    <h5>Volume Tracker (0-20)</h5>
    <p>El voumen actual es: {{ volume }}</p>
    <div>
      <button @click="volume -= 1">Reducir</button>
      <button @click="volume += 1">Incrementar</button>
    </div>
  </div>
  <div id="ejemplo-3">
    <h3>Ejemplo 003</h3>
    <!-- Mutar el Array con la info nueva - PUSH -->
    <button @click="addMoviePush()">Add Movie - PUSH</button>
    <!-- Creamos Nuevos Array - CONCAT -->
    <button @click="addMovieConcat()">Add Movie - CONCAT</button>
    <p v-for="(movie, index) in movieList" :key="index">{{ movie }}</p>
  </div>
  <div id="ejemplo-4">
    <h3>Ejemplo 004</h3>
    <p>Preguntame una pregunta closeEnded Question!</p>
    <input type="text" v-model="question" />
    <h5>{{ answer }}</h5>
  </div>
</template>

<style>
img {
  width: 30%;
}
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
