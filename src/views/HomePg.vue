<script setup>
// import video form '../assets/teaVid.mp4';
import video from '../assets/teaVid.mp4'
</script>

<template>
  <div class="homepage-video">
    <video width="100%" muted loop autoplay>
      <source :src="video" type="video/mp4" />
    </video>
    <div class="text-over-video">
      <h1>Welcome to ChaCha</h1>
    </div>
  </div>
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
