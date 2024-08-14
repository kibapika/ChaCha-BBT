<!-- <script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    stores: {
      type: Array,
      required: true,
    }
  },
  setup(props, { emit }) {
    const selectStore = (store) => {
      emit('store-selected', store)
    }

    return { selectStore }
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
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.storeSec {
  width: 50%;
}
</style> -->

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    stores: {
      type: Array,
      required: true,
    }
  },
  setup(props, { emit }) {
    const selectStore = (store) => {
      emit('store-selected', store)
    }

    return { selectStore }
  }
})
</script>

<template>
  <section class="storeSec">
    <div class="store-list">
      <ul>
        <li v-for="(store, index) in stores" :key="index">
          <a href="#" @click.prevent="selectStore(store)">{{ store.name }}</a>
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
