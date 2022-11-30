<template>
  <div>
    <div>
      <BandImage :bandImage="bandInfo.image" />
      <BandInfo :bandInfo="bandInfo" />
      <div>
        <BandSong :bandSong="bandSong" />
        <BandSongInfo :bandSongInfo="bandSongInfo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BandImage from "./BandImage.vue";
import BandInfo from "./BandInfo.vue";
import BandSong from "./BandSong.vue";
import BandSongInfo from "./BandSongInfo.vue";

const props = defineProps({
  bandImage: String,
  bandInfo: Object,
  bandSong: String,
  bandSongInfo: String,
});
</script>

<style></style>
