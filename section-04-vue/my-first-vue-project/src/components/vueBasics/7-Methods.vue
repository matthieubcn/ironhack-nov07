<template>
  <h1>Working with methods || Functions</h1>
  <div id="bigote-syntax">
    <h2>{{ 1000 * 2 }}</h2>
    <h2>{{ 200 + 50 - 400 }}</h2>
  </div>

  <div id="working-static-function">
    <h2>
      Using a static function called addStatic() - the result is :
      <span>{{ addStatic() }}</span>
    </h2>

    <h2>
      Using a static function called addStatic() - the result is :
      <span> {{ addStatic2() }}</span>
    </h2>
  </div>

  <div id="working-dynamic-function">
    <h2>
      Using a dynamic function called addDynamic() - the result is :
      <span> {{ addDynamic(300, 500, 700) }}</span>
    </h2>
    <h2>
      Using a dynamic function called multiply - the result is :
      <span> {{ multiply(5) }}</span>
    </h2>
  </div>

  <div id="clickEvents-function">
    <button @click="numberTest--">Decrement by 1</button>
    <h2>{{ numberTest }}</h2>
    <button @click="numberTest++">Increment by 1</button>
  </div>

  <div id="inline-events">
    <div id="inline-handler">
      <h2>{{ nameEvent }}</h2>
      <button @click="nameEvent = 'Eduardo Beaumont Piñas'">
        click me to change name of band member
      </button>
    </div>
    <div id="inline-handler">
      <h2>{{ nameEvent2 }}</h2>
      <div @mouseover="nameEvent2 = 'César Ramallo'">
        click me to change name of band member
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

//static function expression  without arguments/params
function addStatic() {
  return 200 + 50 - 400;
}

//static function declaration  without arguments/params
const addStatic2 = () => {
  return 200 + 50 - 400;
};

//dynamic function declaration  with arguments/params
const addDynamic = (num1, num2, num3) => {
  return num1 + num2 - num3;
};

// Dynamic Function declaration with arguments and dependant of a ref(number) stored inside a variable
let baseMultiplier = ref(5);
const multiply = (num) => {
  return num * baseMultiplier.value;
};

//Counter Example using a click method within a eventListener on vue
let numberTest = ref(0);

// Changing the name displayed inside the template
let nameEvent = ref("Kutxi Romero");
let nameEvent2 = ref("Kutxi Romero");
</script>

<style>
span {
  color: red;
}
h2 {
  margin: 1rem 0;
}

#clickEvents-function {
  display: flex;
  justify-content: space-between;
  margin: 0 5rem;
}

#inline-handler {
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
