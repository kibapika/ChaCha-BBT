<script setup>
import GoogleMap from '../components/GoogleMap.vue'
</script>

<template>
  <section class="titleBox">
    <h1 class="menuTitle">Locations</h1>
  </section>
  <section>
    <GoogleMap />
  </section>
</template>

<style scoped>
.titleBox {
  background-image: url('../assets/driedTea.jpg');
  background-size: cover;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.menuTitle {
  width: 80%;
  height: 18dvh;
  font-size: 55px;
  display: flex;
  align-items: center;
  color: white;
}
</style>
