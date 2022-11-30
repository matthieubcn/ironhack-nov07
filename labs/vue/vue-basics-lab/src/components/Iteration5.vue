<template>
  <section>
    <h1>Iteration 005</h1>
    <div class="container" :class="colorBoolean ? 'is-red' : 'is-orange'">
      <h1>Toggleamos entre 2 colores usando un operador ternario</h1>
      <button @click="changeColorFunction()">click me to toggle color</button>
    </div>
    <div
      class="container"
      :class="myBooleanValue && 'myBooleanBackgroundColor'"
    >
      <h1>
        Toggleamos entre 2 colores dependiendo de un operador de asignacion "&&"
      </h1>
      <button @click="clickMe()">Click me to change color</button>
    </div>
    <div class="container" :style="{ background: color }">
      <h1>
        Generamos una funcion que analize los numeros+letras que combinan un
        codigo hexadecimal y le asignamos ese valor a una funcion que se encarge
        de cambiar el color del background :)
      </h1>
      <button @click="color = getRandomColor()">Cambiar color - random</button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
// Solution 001 - Toggleamos entre 2 colores usando un operador ternario
const colorBoolean = ref(true);
const changeColorFunction = () => {
  colorBoolean.value = !colorBoolean.value;
  console.log(colorBoolean.value);
};

//Solution 002 - Cambiar el color de dependiendo de un operador de asignacion "&&"
const myBooleanValue = ref(true);
const clickMe = () => {
  console.log("clicked!");
  myBooleanValue.value = !myBooleanValue.value;
};

// Solution 003 - Generamos una funcion que analize los numeros+letras que combinan un codigo hexadecimal y le asignamos ese valor a una funcion que se encarge de cambiar el color del background :)
let color = ref("orange");

const getRandomColor = () => {
  // parte 1 - definir los valores hex dentro de una variable tipo string
  const hexLetters = "0123456789ABCDEF";
  // parte 2 - definir el valor del # dentro de una variable tipo string
  let color = "#";
  // part 3  - bucle y limitamos a 6 caracteres que le asignamos a una variable llamada "color" que definimos inicialmente dentro de la linea 51. Esta variable le asignamos con un operador += la variable con nombre hexLetters que contiene una operacion matematica que multiplica el valor total de la variable hexLetters (total=15 caracteres) y utitliza el metodo random para aignaler un numero aleatorio; a esta multiplicacion se le asigna otro metodo que es el math.floor que rendondea el resultado y elimina sus decimales.
  for (let i = 0; i < 6; i++) {
    // console.log(hexLetters[Math.random() * 16]);
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  // parte 4 - retornamos el valor de la variable "color"!
  //   console.log(color);
  //   console.log(Math.random());
  //   console.log(Math.floor(45.566938373));
  return color;
};
</script>

<style scoped>
section {
  padding: 3rem 0;
}
.container {
  height: 6rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}
.is-red {
  background: red;
}
.is-orange {
  background: orange;
}

.myBooleanBackgroundColor {
  background: blue;
  color: white;
}
</style>
