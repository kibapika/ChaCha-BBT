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
            <li class="storeName">{{ store.name }}</li>
            <li class="storeAddress">
              <v-icon class="icon" hover scale="1" name="hi-location-marker" /> {{ store.address }}
            </li>
            <li><v-icon class="icon" hover scale="1" name="bi-phone" />{{ store.phone }}</li>
            <li class="hoursLI">
              <v-icon class="icon" hover scale="1" name="md-accesstime" />
              <ul>
                <li v-for="(hour, idx) in store.hours" :key="idx">
                  {{ hour }}
                </li>
              </ul>
            </li>
            <section>
              <button class="btn1" @click.prevent="openDirections(store)">Directions</button>
              <button class="btn2">
                <router-link :to="'/location/' + encodeURIComponent(store.name)">{{
                  store.name
                }}</router-link>
              </button>
            </section>
          </ul>
        </a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
}

.storeSec {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.storeList {
  height: 500px;
  border: 2px solid #ccc5b9;
  padding: 0;
  overflow: hidden;
  overflow-y: scroll;
}

.eachStore {
  border-bottom: 1px solid #ccc5b9;
  padding: 0px 18px 0px 18px;
}

.eachStore:hover {
  background-color: rgba(204, 197, 185, 0.3);
  transition: 0.3s ease;
}

.eachStore a:hover {
  color: #403d39;
}
.storeInfo {
  padding: 0;
}

.storeInfo li {
  padding-bottom: 8px;
}

.storeInfo section {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-around;
}

.storeName {
  font-size: 22px;
  font-weight: 500;
  color: #ea591f;
}

.storeAddress {
  font-weight: 600;
}

.hoursLI {
  display: flex;
  flex-direction: row;
}

.hoursLI ul {
  padding: 0;
  margin-left: 5px;
}

button {
  font-size: 15px;
  color: #403d39;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
}

button:active {
  transform: scale(0.95);
}

.btn1 {
  background: #fcca46;
}

.btn2 {
  background: #9fb1bc;
}
</style>
