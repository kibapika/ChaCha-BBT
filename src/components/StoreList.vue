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

    const openDirections = (store) => {
      const { lat, lng } = store.position
      const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
      window.open(url, '_blank')
    }

    return { selectStore, openDirections }
  }
})
</script>

<template>
  <section class="storeSec">
    <ul class="storeList">
      <li class="eachStore" v-for="(store, index) in stores" :key="index">
        <a href="#" @click.prevent="selectStore(store)">
          <ul class="storeInfo">
            <li>{{ store.name }}</li>
            <li>{{ store.address }}</li>
            <li>{{ store.phone }}</li>
            <li><button @click.prevent="openDirections(store)">Directions</button></li>
          </ul>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.storeSec {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.storeList {
  height: 500px;
  list-style: none;
  border: 1.5px solid #ccc5b9;
  border-radius: 10px 10px 0px 0px;
  margin: 10px 10px 0px 10px;
  padding: 0;
  overflow: hidden;
  overflow-y: scroll;
}

.eachStore {
  border-bottom: 1px solid #ccc5b9;
  padding: 10px 10px 10px 10px;
  height: 150px;
}

.storeInfo {
  list-style: none;
  padding: 0;
}
</style>
