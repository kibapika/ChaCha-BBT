<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { stores } from '../components/storeData'

const route = useRoute()
const storeId = route.params.storeId

// Find the store based on the `storeId` from the route parameter
const store = computed(() => stores.find((store) => store.id === parseInt(storeId)))

console.log('Stores Array:', stores)
console.log('Selected Store:', store.value)
console.log('img', store.value.cafeImg)
</script>

<template>
  <section v-if="store" class="storeDetailSec">
    <div class="storeDetailDiv">
      <h1>{{ store.name }}</h1>
      <div class="addressPhone">
        <a
          :href="`https://www.google.com/maps/dir/?api=1&destination=${store.position.lat},${store.position.lng}`"
          target="_blank"
          class="storeAddress"
        >
          <v-icon class="icon" hover scale="1.5" name="hi-location-marker" /> {{ store.address }}</a
        >
        <a :href="'tel:' + store.phone" class="storePhone"
          ><v-icon class="icon" hover scale="1.5" name="bi-phone" /> {{ store.phone }}</a
        >
      </div>
      <h2>Store Hours:</h2>
      <ul>
        <li v-for="(hour, index) in store.hours" :key="index">{{ hour }}</li>
      </ul>
      <h2>Ammenities:</h2>
      <div>
        <div class="amenities" v-for="(amenity, index) in store.amenities" :key="index">
          <v-icon :class="'icon'" :name="amenity.name" hover scale="1.5" />
          <span>{{ amenity.label }}</span>
        </div>
      </div>

      <router-link class="btn" to="/location"><span>Back to Locations</span></router-link>
    </div>
    <img id="cafeInteriorPic" alt="cafeInteriorPic" :src="store.cafeImg" />
  </section>
  <section v-else class="storeNFSec">
    <div class="storeNF">
      <h1>Uh-oh!</h1>
      <v-icon class="icon" scale="3" animation="wrench" name="co-sad" />
    </div>
    <h1>
      We Couldn't Find This Store. Let's ChaCha Back to
      <router-link to="/location" class="storeNFLink">Locations</router-link>!
    </h1>
  </section>
</template>

<style scoped>
.storeDetailSec {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.storeDetailDiv {
  max-width: 50%;
  width: 50%;
  margin: 25px 50px 25px 50px;
}

.storeDetailDiv h1 {
  font-size: 55px;
  font-weight: 600;
}

.addressPhone {
  display: flex;
  flex-direction: column;
}

.storeAddress {
  font-size: 20px;
}

.storePhone {
  font-size: 20px;
  font-weight: 600;
  color: #ea591f;
}

.storePhone:hover {
  color: #fcca46;
}

#cafeInteriorPic {
  max-width: 50%;
  width: 50%;
}

.btn {
  width: 40%;
  font-size: 15px;
  color: #403d39;
  background-color: #fcca46;
  margin-top: 10px;
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
}

.btn:active {
  transform: scale(0.95);
}

.storeNFSec {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.storeNFSec h1 {
  font-size: 45px;
  font-weight: 500;
  width: 70%;
  text-align: center;
  letter-spacing: 1px;
}

.storeNF {
  display: flex;
  align-items: center;
  gap: 10px;
}

.storeNFLink {
  text-decoration: underline;
  font-size: 45px;
  font-weight: 500;
}

ul {
  list-style: none;
  padding: 0;
}

h2 {
  padding-top: 10px;
  padding-bottom: 15px;
  font-size: 20px;
  text-decoration: underline;
  text-underline-offset: 4px;
}

li {
  font-size: 20px;
  padding: 15px 5px 15px 5px;
  border-top: rgba(204, 197, 185, 0.4) 1px solid;
  border-bottom: rgba(204, 197, 185, 0.4) 1px solid;
}

.amenities {
    padding-bottom: 15px;
}

.amenities span {
    padding-left: 15px;
    font-size: 20px;
}
</style>
