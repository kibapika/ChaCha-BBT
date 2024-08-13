<script>
import { defineComponent, ref } from 'vue'
import { GoogleMap, InfoWindow, Marker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker, InfoWindow },
  setup() {
    const center = { lat: 40.7128, lng: -74.006 }
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

    // const openInfoWindow = (store) => {
    //   console.log('clicked')
    //   selectedStore.value = store
    // }

    const openInfoWindow = (store) => {
      alert(JSON.stringify(store)) // Check if correct store data is passed
      selectedStore.value = store
    }

    return { center, stores, selectedStore, openInfoWindow }
  }
})
</script>

<template>
  <GoogleMap
    api-key="AIzaSyDZlnFNPmm6Ear2-Iot0wqb6htn3s_bZ7c"
    style="width: 50%; height: 500px"
    :center="center"
    :zoom="13"
  >
    <Marker
      v-for="(store, index) in stores"
      :key="index"
      :options="{ position: store.position, label: store.label }"
      @click="openInfoWindow(store)"
    />

    <InfoWindow :position="{ lat: 40.7128, lng: -74.006 }" @closeclick="selectedStore = null">
      <div>
        <h3>Static Store</h3>
        <p>This is a static position test.</p>
      </div>
    </InfoWindow>
  </GoogleMap>
</template>
