<script setup>
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'

const stores = inject('stores', [])
const message = inject('message')

console.log('Injected stores:', stores)
console.log('Injected message:', message)

const route = useRoute()
const storeId = route.params.storeId

const store = computed(() => stores.find((store) => store.id === parseInt(storeId)))
</script>

<template>
  <h1>StoreDetail Page</h1>
  <span>{{ message }}</span>
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
