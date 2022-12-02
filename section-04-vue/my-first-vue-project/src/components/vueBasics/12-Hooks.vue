<template>
  <header class="center">
    <h1>Hook example</h1>
    <br />
    <p>What would the world be like without Captain Hook?</p>
    <br />
    <img
      class="cpt-hook"
      src="https://leonardodavincigencana.files.wordpress.com/2016/01/captain-hook.jpg"
      alt="captain hook"
    />
    <br />
  </header>

  <!-- El ejemplo empieza aquí, lo de arriba es solo para sacarte una sonrisa -->
  <div ref="el" class="center">Hola Peter</div>
  <br /><br />
  <button @click="fakeRefresh">Fake refresh</button>
  <br /><br /><br />
  <div>{{ count }}</div>
  <br />
</template>

<style>
.cpt-hook {
  width: 200px;
  height: 200px;
}
</style>

<script setup>
import { ref, onMounted, onUpdated, onUnmounted } from "vue";
/*Como ves hay muchos life cycle methods. ¡Y aquí no están todos! Pero... ¿Para qué sirven y cómo funcionan?
  Durante el mid-term project a algunos os pasó que intentábais acceder a elementos del DOM antes de que estos se cargasen, por ejemplo.
  En otras ocasiones, sabemos que queremos que un script se ejecute antes de que un componente deje de funcionar (para guardar un estado o tener un contador de segundos de cuánto tiempo ha estado activo el componente, por ejemplo).
  Los life cycle hook methods sirven para este tipo de cosas.
  En composition API, es decir, cuando ponemos script setup, estamos trabajando por defecto en el setup que el el life cycle method primero que se lanza. Lo que no significa que siempre tengamos que usar el setup.
  Veamos cómo funcionan los life cycle methods con unos ejemplos sencillos.
  */
const el = ref();
const count = ref(0);

//Con este método podemos almacenar en una variable una parte de nuestro HTML. En este caso vamos a almacenar en la variable "el" el div de la línea 16!
onMounted(() => {
  //el.value; // <div>
  console.log(el.value);
});

//onUpdated se lanza cuando la página actualiza alguno de sus elementos internos. Vamos a forzar el updated usando un fake refresh.
onUpdated(() => {
  el.value.innerHTML = "¿Qué tal, Peter?";
});

//Veremos que al forzar la actualización de un elemento de la página la función onUpdated tiene lugar.
function fakeRefresh() {
  console.log("fake refreshed!");
  count.value += 1;
}

//Al cerrar el componente se ejecuta una última función. Para ver cómo cerrar un componente deberíamos ver primero routers. Ahora mismo basta con que sepas hasta aquí :) si quieres saber más ¡échale un vistazo tú mismo usando los ejemplos!
onUnmounted(() => {
  el.value.innerHTML = "Adios, Peter";
  console.log("Adios, Peter");
});
</script>
