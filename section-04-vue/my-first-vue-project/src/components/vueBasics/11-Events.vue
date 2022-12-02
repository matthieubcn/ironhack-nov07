<template>
  <div>
    <!-- Una situación muy común cuando se monta una aplicación es que querremos ser capaces de ejecutar JavaScript después de un evento en el DOM (click, submit, etc.). -->
    <!-- Hay dos tipos de manejadores de eventos (handlers), los inline y pasarlos como funcines :) . -->

    <!-- Ejemlo de evento click con logica directa dentro del template! -->
    <button v-on:click="countInline++">
      Suma +1 - usando directivo completo
    </button>
    <button @click="countInline++">Suma +1 - usando el shortHand</button>
    <button @dblclick="countInline++">Suma +1 - usando el shortHand</button>
    <p>La Cuenta actual es: {{ countInline }}</p>
    <hr />
    <!-- Ejemlo de evento click con logica directa fuera del template! -->
    <button @click="addPlusOne()">
      Suma +1 - usando el shortHand - dependiento de logica en el script tag
    </button>
    <p>La Cuenta actual es: {{ countOutside }}</p>
    <hr />
    <!-- Ejemplo de un evento que asociamos una funcion chicos que acepte un paramtero que nos diga hola dentro de una alerta, aca refrescamos un poco de js :) -->
    <button @click="holaClase('Hola chicos!')">Dile hola a la consola</button>

    <!-- Event modifiers -->
    <!-- A menudo es necesario modificar el comportamiento default de los eventos DOM. Esto nos puede ser útil a la hora de evitar refrescar la página cuando le damos al botón submit de un formulario, por ejemplo. Para hacerlo podemos usar los event modifiers, que llamarán por nosotros a métodos como preventDefault() -->
    <!-- Parando la propagation del click event -->
    <!-- Modificador que se encarga de parar la propagacion de un evento en este caso es un evento tipo "click" -->
    <button @click.stop="stopThis()">Stop Modifier</button>

    <!-- Modificador que se encarga de que un formulario no se envie,  en este caso es un evento tipo "submit" -->
    <form @submit.prevent="onSubmit()"></form>

    <!-- Encadenado Modificadores -->
    <button @click.stop.prevent>Encandenando Mods</button>

    <form @submit.prevent.stop="(event) => handleSubmit(event)">
      <input type="text" />
      <input type="text" />
      <button type="submit">send!!!</button>
    </form>
  </div>

  <!-- CUSTOM EVENTS -->
  <!-- Aunque es muy útil tener eventos nativos de Vue.js incorporados para hacer frente a los sucesos del día a día, a menudo se da el caso de que tenemos que hacer frente a cosas personalizadas que suceden fuera del ámbito de estos. Cuando esto sucede, podemos utilizar los custom events (eventos personalizados) como una forma de que nuestros componentes se comuniquen entre sí. Los eventos personalizados permiten que un componente hijo envíe un evento a un componente padre y que éste actúe sobre el evento. -->
  <CustomEventsEmits @sayHi="alertHi" />
  <CustomEventsEmits @sayHi="alertBye" />
</template>

<script setup>
import { ref } from "vue";
import CustomEventsEmits from "./11-5-EventsChild.vue";
const countInline = ref(0);
const countOutside = ref(0);

const addPlusOne = () => {
  countOutside.value++;
};

// Ejemplo
// Ejemplo de un evento que asociamos una funcion chicos que acepte un paramtero que nos diga hola dentro de una alerta, aca refrescamos un poco de js :)

const holaClase = (stringQueLePasaremosDentro) => {
  alert(stringQueLePasaremosDentro);
};

// Usando modificadores EJEMPLO
const handleSubmit = (e) => {
  //e.preventDefault();
  console.log("El form se envio!!!!");
};

// Funcion que usamos con nuestro primer emit sayHi del child component 11.5EventsChild.vue :)
const alertHi = () => {
  alert("Hello!!");
};

const alertBye = () => {
  alert("Good Bye!!");
};

/// EJERCICIO 001 - CUSTOM EVENT
// Ej. 1: Crean una carpeta dentro del components folder y creamos un componente ParentComponent.vue y otro componente ChildComponent.vue. El template de ChildComponent debe ser un botón con el texto 'Emit'. En el template de ParentComponent poned lo que queráis (un h1 p.ej.). Después debéis llamar al ChildComponent. EN EL SCRIPT DE PARENT creamos una función que tire una alerta de 'Emit realizado con éxito! :)'. Ahora lo que tenemos que hacer es que cuando le demos al botón de ChildComponent se llame la función de ParentComponent.
</script>

<style>
button {
  margin: 1 2rem;
}
</style>
