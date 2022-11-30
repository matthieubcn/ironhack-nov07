<script setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import MyBio from "./components/Mybio.vue";
import BandCard from "./components/bandCardComps/BandCard.vue";

const bands = ref([
  {
    bandInfo: {
      name: "The Doors",
      image:
        "https://ballesterockmusicdotcom.files.wordpress.com/2016/04/the-doors-logo.jpeg?w=640",
      genre: "Rock n Roll",
    },
    popularSong: "L.A Woman",
    popularSongInfo:
      "L.A. Woman is the sixth studio album by the American rock band the Doors, released on April 19, 1971, by Elektra Records. It is the last to feature lead singer Jim Morrison during his lifetime due to his death three months after the album's release, though he would posthumously appear on the 1978 album An American Prayer. Even more so than its predecessors, the album is heavily influenced by blues. It was recorded without record producer Paul A. Rothchild after he fell out with the group over the perceived lack of quality of their studio performances. Subsequently, the band co-produced the album with longtime sound engineer Bruce Botnick.",
  },
  {
    bandInfo: {
      name: "Led Zeppelin",
      image: "http://cdn-7.famouslogos.us/images/led-zeppelin-logo.jpg",
      genre: "Rock n Roll",
    },
    popularSong: "Whole Lotta love",
    popularSongInfo:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa, consequuntur provident blanditiis facere, aliquid, est nemo repellendus et laudantium tempora iste. Aperiam, ab quasi fugiat dignissimos incidunt quae maxime!",
  },
]);
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="Prop's Class" />
    </div>
  </header>

  <main>
    <MyBio name="Aleix Abuli" />

    <hr />
    <BandCard
      class="card-band"
      v-for="(band, index) in bands"
      :key="index"
      :bandInfo="band.bandInfo"
      :bandSong="band.popularSong"
      :bandSongInfo="band.popularSongInfo"
    />
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
