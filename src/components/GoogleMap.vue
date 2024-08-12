<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 40.7128, lng: -74.0060 }
    const stores = [
      { position: { lat: 40.73061, lng: -73.935242 }, name: 'Store 1' },
      { position: { lat: 40.712776, lng: -74.005974 }, name: 'Store 2' },
      { position: { lat: 40.758896, lng: -73.98513 }, name: 'Store 3' }
    ]

    return { center, stores }
  }
})
</script>

<template>
  <GoogleMap
    api-key="AIzaSyDZlnFNPmm6Ear2-Iot0wqb6htn3s_bZ7c"
    style="width: 50%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <Marker v-for="(store, index) in stores" :key="index" :options="{ position: store.position }" />
  </GoogleMap>
</template>
