<script setup>
import { ref } from 'vue'
import GoogleMap from '../components/GoogleMap.vue'
import StoreList from '../components/StoreList.vue'
import { stores } from '../components/storeData'

// const stores = [
//   {
//     id: 1,
//     position: { lat: 40.73061, lng: -73.935242 },
//     name: 'Bubble Bay Plaza',
//     phone: '(555) 123-4567',
//     hours: [
//       'Mon - Thurs: 12:00 PM - 9:30 PM',
//       'Fri - Sat: 10:00 AM - 11:00 PM',
//       'Sun 10:00: AM - 10:00 PM'
//     ],
//     address: '789 Jasmine Street, Brewtown, NY 10001',
//     label: {
//       text: 'S1',
//       fontSize: '14px',
//       fontWeight: 'bold'
//     }
//   },
//   {
//     id: 2,
//     position: { lat: 40.712776, lng: -74.005974 },
//     name: 'Tea Garden Center',
//     phone: '(555) 234-5678',
//     hours: ['TBD'],
//     address: '789 Jasmine Street, Brewtown, NY 10001',
//     label: {
//       text: 'S2',
//       fontSize: '14px',
//       fontWeight: 'bold'
//     }
//   },
//   {
//     id: 3,
//     position: { lat: 40.758896, lng: -73.98513 },
//     name: 'Oolong Oasis Mall',
//     phone: '(555) 345-6789',
//     hours: ['TBD'],
//     address: '321 Matcha Lane, Tea Ville, TX 73301',
//     label: {
//       text: 'S3',
//       fontSize: '14px',
//       fontWeight: 'bold'
//     }
//   },
//   {
//     id: 4,
//     position: { lat: 40.778896, lng: -73.98513 },
//     name: 'Oolong Oasis Mall',
//     phone: '(555) 345-6789',
//     hours: ['TBD'],
//     address: '321 Matcha Lane, Tea Ville, TX 73301',
//     label: {
//       text: 'S4',
//       fontSize: '14px',
//       fontWeight: 'bold'
//     }
//   }
// ]

const selectedStore = ref(null)

const handleStoreSelected = (store) => {
  selectedStore.value = store
  console.log(selectedStore.value)
}
</script>

<template>
  <section class="titleBox">
    <h1 class="menuTitle">Locations</h1>
  </section>
  <section class="googleMaps">
    <StoreList :stores="stores" @store-selected="handleStoreSelected" />
    <GoogleMap
      :stores="stores"
      :selectedStore="selectedStore"
      @store-selected="handleStoreSelected"
    />
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
  flex-direction: row-reverse;
}

@media (max-width: 768px) {
  .menuTitle {
    justify-content: center;
  }
  .googleMaps {
    flex-direction: column;
  }
}
</style>
