<script setup>
import video from '../assets/teaVid.mp4'
import about from '../views/AboutPg.vue'
</script>

<template>
  <section class="homepage-video">
    <video width="100%" muted loop autoplay>
      <source :src="video" type="video/mp4" />
    </video>
    <div class="text-over-video">
      <h1>Welcome to ChaCha</h1>
    </div>
  </section>
  <section id="about">
    <about />
  </section>
  <section>
    <h1>Delicious Tea</h1>
    <div>
      <h2>Milk Tea</h2>
    </div>
  </section>
</template>

<style scoped>
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
