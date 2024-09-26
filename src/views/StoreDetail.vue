<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const storeName = decodeURIComponent(route.params.storeName)

const store = computed(() => stores.find(s => s.name === storeName))
</script>

<template>
    <div v-if="store">
        <h1>{{ store.name }}</h1>
        <p>{{ store.address }}</p>
        <p>{{ store.phone }}</p>
        <ul>
          <li v-for="(hour, index) in store.hours" :key="index">{{ hour }}</li>
        </ul>
      </div>
      <div v-else>
        <p>Store not found!</p>
      </div>
</template>

<style scoped></style>
