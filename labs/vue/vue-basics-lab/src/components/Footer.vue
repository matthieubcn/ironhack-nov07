<template>
  <nav>
    <!-- Referencia Logo -->
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Patagonia_%28Unternehmen%29_logo.svg/2560px-Patagonia_%28Unternehmen%29_logo.svg.png"
      alt=""
    />
    <!-- Links de navegacion -->
    <ul>
      <li><a href="">Link 1</a></li>
      <li><a href="">Link 2</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  /* position: absolute;
  bottom: 0; */
  background: black;
}

a {
  color: white;
}
ul {
  display: flex;
  justify-content: space-between;
}

li {
  list-style: none;
  padding: 0 1.5rem;
}

img {
  width: 20%;
}
</style>
