<script setup>
import video from '../assets/teaVid.mp4'
import about from '../views/AboutPg.vue'
import teaSec from '../views/TeaSec.vue'
</script>

<template>
  <section class="homepage-video">
    <video width="100%" muted loop autoplay>
      <source :src="video" type="video/mp4" />
    </video>
    <div class="text-over-video">
      <h1 id="hometitle">Welcome to ChaCha</h1>
    </div>
  </section>
  <section id="about">
    <about />
  </section>
  <teaSec />
</template>

<style scoped>
#hometitle {
  font-size: 55px;
  font-weight: bold;
  color: white;
  -webkit-text-stroke: 2px black;
}

.homepage-video,
.homepage-video video {
  position: relative;
}
.homepage-video video {
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: 50% !important;
}

.text-over-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: black;
}
</style>
