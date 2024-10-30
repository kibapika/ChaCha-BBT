<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { stores } from '../components/storeData'

const route = useRoute()
const storeId = route.params.storeId

// Find the store based on the `storeId` from the route parameter
const store = computed(() => stores.find(store => store.id === parseInt(storeId)))

console.log("Stores Array:", stores)
console.log("Selected Store:", store.value)
</script>

<template>
  <h1>StoreDetail Page</h1>
  <div v-if="store">
    <h1>{{ store.name }}</h1>
    <p>{{ store.address }}</p>
    <p>{{ store.phone }}</p>
    <ul>
      <li v-for="(hour, index) in store.hours" :key="index">{{ hour }}</li>
    </ul>
  </div>
  <p v-else>Store not found.</p>
</template>

<style scoped></style>
