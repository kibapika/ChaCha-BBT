<script>
import ClassicTeas from '../components/BubbleMenu/ClassicTeas.vue'
import FruitTeas from '../components/BubbleMenu/FruitTeas.vue'
import SpecialTeas from '../components/BubbleMenu/SpecialTeas.vue'

export default {
  components: {
    ClassicTeas,
    FruitTeas,
    SpecialTeas
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        { name: 'Classic Teas', component: 'ClassicTeas' },
        { name: 'Fruit Teas', component: 'FruitTeas' },
        { name: 'Specialty Teas', component: 'SpecialTeas' }
      ]
    }
  },
  methods: {
    selectTab(index) {
      this.activeTab = index
    }
  }
}
</script>

<template>
  <div>
    <div class="tabs" role="tablist">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="selectTab(index)"
        :class="{ active: activeTab === index }"
        role="tab"
        :aria-selected="activeTab === index"
        :aria-controls="'tab-' + index"
        :id="'tab-btn-' + index"
      >
        {{ tab.name }}
      </button>
    </div>
    <div class="tab-content">
      <component :is="tabs[activeTab].component"></component>
    </div>
    <section>
      <h1>Toppings</h1>
      <ul>
        <li>Tapioca Peals</li>
        <li>Popping Boba (various flavor)</li>
        <li>Aloe Vera</li>
        <li>Pudding</li>
        <li>Grass Jelly</li>
        <li>Lychee Jelly</li>
        <li>Mango Jelly</li>
        <li>Coconut Jelly</li>
        <li>Red Bean</li>
      </ul>
    </section>
    <section>
      <h1>Customizaion Options</h1>
      <ul>
        <li>Sugar Levels: 0%, 25%, 50%, 75%, 100%</li>
        <li>Ice Levels: No Ice, Less Ice, Regular Ice, Extra Ice</li>
        <li>Milk Alternatives: Whole Milk, Skim Milk, Almond Milk, Oat Milk</li>
      </ul>
    </section>
  </div>
</template>

<style>
.tabs {
  display: flex;
}

button {
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
}

button.active {
  background-color: #42b983;
  color: white;
}

.tab-content {
  margin-top: 20px;
}
</style>
