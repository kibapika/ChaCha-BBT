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
  <section class="wrapper">
    <div class="marquee">
      <p>
        [Breaking News] Soft Opening Day June 24 , 2024 ~ For more info, check out later this month!
        Thank you for all the support and can't wait to see everyone~
        <v-icon hover scale="1.25" animation="float" name="bi-heart" />
        <v-icon hover scale="1.25" animation="float" name="ri-bear-smile-line" />
        <v-icon hover scale="1.25" animation="float" name="bi-heart" />
      </p>
      <p>
        [Breaking News] Soft Opening Day June 24 , 2024 ~ For more info, check out later this month!
        Thank you for all the support and can't wait to see everyone~
        <v-icon hover scale="1.25" animation="float" name="bi-heart" />
        <v-icon hover scale="1.25" animation="float" name="ri-bear-smile-line" />
        <v-icon hover scale="1.25" animation="float" name="bi-heart" />
      </p>
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

.wrapper {
  max-width: 100%;
  overflow: hidden;
}

.marquee {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: marquee 15s linear infinite;
  margin-top: 15px;
}

.marquee p {
  display: inline-block;
  font-size: 23px;
  letter-spacing: 1px;
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
