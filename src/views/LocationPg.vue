<script setup>
import { defineComponent, ref } from 'vue'
import GoogleMap from '../components/GoogleMap.vue'
import StoreList from '../components/StoreList.vue'



</script>

<template>
  <section class="titleBox">
    <h1 class="menuTitle">Locations</h1>
  </section>
  <section class="googleMaps">
    <StoreList />
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

.googleMaps {
    display: flex;
    flex-direction: row;

}
</style>
