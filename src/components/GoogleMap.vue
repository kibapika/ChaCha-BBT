<!-- <script>
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

    const openInfoWindow = (store) => {
      console.log('clicked')
      selectedStore.value = store
      console.log(selectedStore.value.position)
    }

    // const openInfoWindow = (store) => {
    //   alert(JSON.stringify(store)) // Check if correct store data is passed
    //   selectedStore.value = store
    // }

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

    <InfoWindow :options="{ position: { lat: 40.63061, lng: -73.935242 } }" />

    <InfoWindow
      v-if="selectedStore"
      :key="selectedStore.position"
      :options="{ position: selectedStore.position }"
      @closeclick="selectedStore = null"
    >
      <div>
        <h3>{{ selectedStore.name }}</h3>
        <p>{{ selectedStore.description }}</p>
      </div>
    </InfoWindow>
  </GoogleMap>
</template> -->

<script setup>
import { ref, watch } from 'vue'
import { GoogleMap, InfoWindow, Marker } from 'vue3-google-map'

const props = defineProps({
  stores: Array,
  selectedStore: Object
})

const mapCenter = ref({ lat: 40.7128, lng: -74.006 })

watch(
  () => props.selectedStore,
  (newVal) => {
    if (newVal) {
      mapCenter.value = newVal.position
    }
  }
)
</script>

<template>
  <GoogleMap
    api-key="YOUR_GOOGLE_MAPS_API_KEY"
    style="width: 100%; height: 500px"
    :center="mapCenter"
    :zoom="13"
  >
    <Marker
      v-for="(store, index) in stores"
      :key="index"
      :options="{ position: store.position, label: store.label }"
      @click="$emit('store-selected', store)"
    />
    <InfoWindow v-if="selectedStore" :position="selectedStore.position">
      <div>
        <h3>{{ selectedStore.name }}</h3>
        <p>{{ selectedStore.description }}</p>
      </div>
    </InfoWindow>
  </GoogleMap>
</template>
