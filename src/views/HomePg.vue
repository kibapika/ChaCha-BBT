<script setup>
// import video form '../assets/teaVid.mp4';
import video from '../assets/teaVid.mp4'
</script>

<template>
  <h1>Home</h1>
  <video width="320" height="240" controls>
    <source :src="video" type="video/mp4">
  </video>
</template>
