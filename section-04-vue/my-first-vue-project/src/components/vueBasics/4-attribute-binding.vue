<template>
  <h1>
    Usando el directo "v-bind" para unificar ciertas elementos con nuestro js :)
  </h1>
  <div id="binding-attributes">
    <!-- Binding ID's -->
    <div id="binding-id">
      <!-- let's bind an ID :) - LONG SYNTAX VERSION  -->
      <h2 v-bind:id="headingId">
        Heading - con un ID bindeado dinamicamente desde el script tag - LONG
        VERSION
      </h2>
      <!-- let's bind an ID :) - SHORT SYNTAX VERSION  -->
      <h2 :id="headingId">
        Heading - con un ID bindeado dinamicamente desde el script tag - SHORT
        VERSION
      </h2>
    </div>
    <!-- Binding Reserved keywords -->
    <div id="binding-reserved-keywords">
      <!-- Case 1 - Bindeamos unn valor via una variable que es reactive y le pasamos un valos booleanico por defecto! -->
      <button :disabled="isDisabled">{{ buttonText }}</button>

      <!-- Cae 2 - El mismo binding de aca arriba pero tomamos en cuenta el casoOpuesto.  -->
      <button :disabled="!isDisabled">{{ buttonText }}</button>
    </div>
    <!-- Binding Class -->
    <div id="binding-classes">
      <!-- Binding one simple class -->
      <h2 v-bind:class="status">Underline Text - binding a class attribute</h2>
      <!-- Binding classes to elements that alreay have a class -->
      <h2 class="underline" v-bind:class="twoClassBinding">
        Underline Text - binding a class attribute to an element that has
        already a class
      </h2>

      <!-- Binding conditional Classes through conditionals -->
      <h1>Usando condicional para bindear una clase :)</h1>
      <h2 v-bind:class="isPromoted && 'promoted'">Promoted Movies</h2>

      <!-- Usando ternarios :) -->
      <h2 :class="isSoldOut ? 'sold-out' : 'available'">Road to Redemption</h2>
      <!-- Binding classes as arrays -->
      <h2 v-bind:class="['promoted', 'underline']">
        Binding an array of classes
      </h2>
      <!-- Binding conditional classes through combining logical expressions and ternarys within an array -->
      <h2
        v-bind:class="[
          isPromoted && 'promoted',
          isSoldOut ? 'sold-out' : 'available',
        ]"
      >
        Array of Conditional Classes
      </h2>
      <!-- Binding conditional classes through combining logical expressions and ternarys within an array -->
      <h2 v-bind:class="[isPromoted && 'promoted', !isSoldOut && 'available']">
        2Array of Conditional Classes
      </h2>
    </div>
    <!-- Binding Styles -->
    <div id="binding-style">
      <h1>Binding Styles</h1>
      <h2
        v-bind:style="{
          textDecoration: 'underline',
          color: textColor,
          fontSize: textSize + 'px',
        }"
      >
        Inline Styling through an object approach
      </h2>

      <h2 v-bind:style="objectArrayCase1">
        Object added to the script tag with some styling
      </h2>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

// ID Binding
const headingId = ref("my-super-duper-cool-id");

// Reserved Keyword binding
const isDisabled = ref(false);
const buttonText = ref("Click me");

// Class binding
const status = ref("danger");
const twoClassBinding = ref("bindingExtraClass");

//Class binding through boolean values
const isPromoted = ref(false);

//Class binding through boolean values with ternary opertors
const isSoldOut = ref(false);

// Inline Styling through individual ref's
const textColor = ref("#fafafa");
const textSize = ref(40);

//Inline Styline through an object
const objectArrayCase1 = reactive({
  color: "yellow",
  fontSize: "32px",
  textDecoration: "underline",
});
</script>

<style>
#my-super-duper-cool-id {
  color: white;
}

button {
  display: block;
}
.danger {
  text-decoration: underline;
  color: red;
}
.underline {
  text-decoration: underline;
}
.bindingExtraClass {
  color: yellow;
}
.promoted {
  color: blue;
  font-style: italic;
}
.sold-out {
  color: red;
  text-decoration: line-through;
}
.available {
  color: green;
  text-decoration: overline;
}
</style>
