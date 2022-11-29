<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import MyFirstComponent from "./components/vueBasics/0-MyFirstComponent.vue";
import TextDirective from "./components/vueBasics/2-TextDirective.vue";
import HtmlDirective from "./components/vueBasics/3-HtmlDirective.vue";
import AttributeBinding from "./components/vueBasics/4-attribute-binding.vue";
import ConditionalRendering from "./components/vueBasics/5-ConditionalRendering.vue";
import IteratingElements from "./components/vueBasics/7-IteratingElements.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Vue Basics Class" />
    </div>
  </header>

  <main>
    <!-- <MyFirstComponent /> -->
    <!-- <hr /> -->
    <!-- <TextDirective /> -->
    <!-- <hr /> -->
    <!-- <HtmlDirective /> -->
    <!-- <hr />
    <AttributeBinding /> -->
    <!-- <hr />
    <ConditionalRendering /> -->
    <hr />
    <IteratingElements />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
