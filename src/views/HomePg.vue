<script setup>
import video from '../assets/teaVid.mp4'
import aboutPg from '../views/AboutPg.vue'
import teaSec from '../components/TeaSec.vue'
import locatSec from '../components/LocationSec.vue'
import homeMarquee from '../components/HomeMarquee.vue'
</script>

<template>
  <section class="homepage-video">
    <video width="100%" muted loop autoplay>
      <source :src="video" type="video/mp4" />
    </video>
    <h1 class="text-over-video" id="hometitle">Welcome to ChaCha</h1>
  </section>
  <homeMarquee
    updatedMsg="[Breaking News] Soft Opening Day June 24 , 2024 ~ For more info, check out later this month! Thank you for all the support and can't wait to see everyone~"
  />
  <section id="about">
    <aboutPg />
  </section>
  <teaSec />
  <locatSec />
</template>

<style scoped>
#hometitle {
  width: 100%;
  font-size: 80px;
  font-weight: 700;
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
