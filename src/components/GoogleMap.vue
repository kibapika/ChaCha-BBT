<script setup>
import { ref, watch } from 'vue'
import { GoogleMap, InfoWindow, Marker } from 'vue3-google-map'

// Props to receive the list of stores and the selected store
const props = defineProps({
  stores: Array,
  selectedStore: Object
})

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

// Local state to manage the map's center position
const mapCenter = ref({ lat: 40.7458, lng: -73.985 })

const emit = defineEmits(['store-selected'])

// Watch for changes in the selected store to update the map's center position
watch(
  () => props.selectedStore,
  (newVal) => {
    if (newVal) {
      mapCenter.value = newVal.position
    }
  }
)

// Emit event when a marker is clicked to update the selected store
const handleMarkerClick = (store) => {
  mapCenter.value = store.position
  // Emit the store-selected event to the parent component
  emit('store-selected', store)
}

const openDirections = (store) => {
  const { lat, lng } = store.position
  const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
  window.open(url, '_blank')
}
</script>

<template>
  <GoogleMap
    :api-key="apiKey"
    style="width: 100%; height: 500px"
    class="googleMap"
    :center="mapCenter"
    :zoom="12"
  >
    <Marker
      v-for="(store, index) in stores"
      :key="index"
      :options="{ position: store.position, label: store.label }"
      @click="handleMarkerClick(store)"
    />

    <InfoWindow
      v-if="selectedStore"
      :position="selectedStore.position"
      :options="{ position: selectedStore.position }"
    >
      <div class="infoDiv">
        <h3>{{ selectedStore.name }}</h3>
        <span>
          <v-icon class="icon" hover scale="1" name="hi-location-marker" />
          {{ selectedStore.address }}</span
        >
        <span
          ><v-icon class="icon" hover scale="1" name="bi-phone" /> {{ selectedStore.phone }}</span
        >
        <ul>
          <li v-for="(hours, index) in selectedStore.hours" :key="index">
            {{ hours }}
          </li>
        </ul>
        <section>
          <button class="btn1" @click.prevent="openDirections(selectedStore)">Directions</button>

          <router-link class="btn2" :to="'/location/' + selectedStore.id">View Store</router-link>
        </section>
      </div>
    </InfoWindow>
  </GoogleMap>
</template>

<style scoped>
.googleMap {
  margin-top: 0px;
}

::v-deep .gm-style .gm-style-iw-c {
  flex-direction: row-reverse !important;
}

.infoDiv {
  padding-top: 12px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.infoDiv h3 {
  font-weight: bold;
  font-size: 25px;
}

.infoDiv span {
  font-size: 15px;
}

ul {
  list-style: none;
  padding: 0;
  margin-left: 23px;
  font-size: 14px;
}

li {
  padding-bottom: 8px;
}

.icon {
  color: #ea591f;
}

.infoDiv section {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}

button,
.btn2 {
  font-size: 15px;
  color: #403d39;
  height: 33px;
  padding: 0px 23px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
}

button:active {
  transform: scale(0.95);
}

.btn2:active {
  transform: scale(0.95);
}

.btn1 {
  background: #fcca46;
}

.btn2 {
  background: #9fb1bc;
}

a:hover {
  color: #403d39;
}

@media (max-width: 768px) {
  .btn1,
  .btn2 {
    padding: 5px 15px;
  }
}
</style>
