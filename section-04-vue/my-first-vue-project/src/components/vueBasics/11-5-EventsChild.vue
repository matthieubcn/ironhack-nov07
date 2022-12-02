<template>
  <!-- Usando el custom event podremos llamar a la función del padre desde el botón del componente hijo. -->
  <h5>Usando emit sayHi</h5>
  <button @click="$emit('sayHi')">Say hi!</button>
  <h5>Usando una funcion con logica interna llamada sayHiInternal</h5>
  <button v-on:click="sayHiInternal()">Say hi - Componente Interno</button>

  <!-- En caso de que tengamos que pasar un argumento al emit -->
  <h5>Usando un emit greet, con un argumento extra</h5>
  <button @click="$emit('greet', 'Diego')">Say hi Nombre</button>

  <button @click="diego()">Usando El Emit dentro de una funcion</button>

  <!-- ALEXIS ANSWER -->
  <button @click="$emit('alertEmit')">EMIT</button>
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

const emit = defineEmits(["sayHi", "greet", "diego", "alertEmit"]);

// FUNCION QUE ALERTA AL USUARIO CON UN "Hello!!" dentro del componente hijo!
const sayHiInternal = () => {
  alert("Hello!!");
};

const diego = () => {
  emit("diego");
};
</script>
