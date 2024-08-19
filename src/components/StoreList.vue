<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    stores: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    const selectStore = (store) => {
      emit('store-selected', store)
    }

    const getDirectionsUrl = (store) => {
      const { lat, lng } = store.position
      return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
    }

    return { selectStore, getDirectionsUrl }
  }
})
</script>

<template>
  <section class="storeSec">
    <h1>Store List</h1>
    <div class="store-list">
      <ul>
        <li v-for="(store, index) in stores" :key="index">
          <a href="#" @click.prevent="selectStore(store)">{{ store.name }}</a>
          <button @click.prevent="window.open(getDirectionsUrl(store), '_blank')">
            Directions
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.storeSec {
  width: 50%;
}
</style>
