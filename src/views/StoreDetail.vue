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
</script>

<template>
  <section v-if="store">
    <h1>StoreDetail Page</h1>
    <h1>{{ store.name }}</h1>
    <p>{{ store.address }}</p>
    <p>{{ store.phone }}</p>
    <ul>
      <li v-for="(hour, index) in store.hours" :key="index">{{ hour }}</li>
    </ul>
    <router-link class="btn" to="/location"><span>Back to Locations</span></router-link>
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
.btn {
  width: 15%;
  font-size: 15px;
  color: #403d39;
  background-color: #fcca46;
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
</style>
