<script setup>
import { ref, watch } from 'vue'
import { GoogleMap, InfoWindow, Marker } from 'vue3-google-map'

// Props to receive the list of stores and the selected store
const props = defineProps({
  stores: Array,
  selectedStore: Object
})

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
</script>

<template>
  <GoogleMap
    api-key="AIzaSyDZlnFNPmm6Ear2-Iot0wqb6htn3s_bZ7c"
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
      <div>
        <h3>{{ selectedStore.name }}</h3>
        <span>{{ selectedStore.phone }}</span>
        <ul>
          <li v-for="(hour, index) in selectedStore.hours" :key="index">
            {{ hour }}xw
          </li>
        </ul>
      </div>
    </InfoWindow>
  </GoogleMap>
</template>

<style scoped>
.googleMap {
    margin-top: 10px;
}
</style>
