<script setup>
import { ref } from 'vue'
import GoogleMap from '../components/GoogleMap.vue'
import StoreList from '../components/StoreList.vue'

const stores = [
  {
    position: { lat: 40.73061, lng: -73.935242 },
    name: 'Store 1',
    description: 'This is Store 1 located in New York City.',
    label: {
      text: 'S1',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  },
  {
    position: { lat: 40.712776, lng: -74.005974 },
    name: 'Store 2',
    description: 'This is Store 2 located in New York City.',
    label: {
      text: 'S2',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  },
  {
    position: { lat: 40.758896, lng: -73.98513 },
    name: 'Store 3',
    description: 'This is Store 3 located in New York City.',
    label: {
      text: 'S3',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }
]

const selectedStore = ref(null)

const handleStoreSelected = (store) => {
  selectedStore.value = store
}
</script>

<template>
  <section class="titleBox">
    <h1 class="menuTitle">Locations</h1>
  </section>
  <section class="googleMaps">
    <StoreList :stores="stores" @store-selected="handleStoreSelected" />
    <GoogleMap :stores="stores" :selectedStore="selectedStore" />
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
