<template>
  <!-- Usando el custom event podremos llamar a la función del padre desde el botón del componente hijo. -->
  <button @click="$emit('sayHi')">Say hi!</button>

  <button v-on:click="sayHiInternal()">Say hi - Componente Interno</button>

  <!-- <button></button> -->
</template>

<script setup>
// Los custom events en VUE se denominan como emits:)

// Estos emits tienen una invocacion mediante un metodo nativo de vue que se llama defineEmits.

// SYNTAX:
// defineEmits(['sayHi', 'greet', 'helloWorld'])
// defineEmits("miSuperCoolEmit")
// const emit = defineEmits("miSuperCoolEmit2")
// const emit = defineEmits(['sayHi', 'greet', 'helloWorld'])

// Basicamente plasmando los nombres de los eventosCustoms que vamos a usar en nuestro template

// sayHi === middlement, es como un evento tipo click que esta recibiendo logica de otro componente

const emit = defineEmits(["sayHi", "greet"]);

// FUNCION QUE ALERTA AL USUARIO CON UN "Hello!!" dentro del componente hijo!
const sayHiInternal = () => {
  alert("Hello!!");
};
</script>
