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
  <section class="titleBox">
    <h1 class="menuTitle">Menu</h1>
  </section>
  <div class="menuDiv">
    <section>
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
    </section>
    <div class="menuCustom">
      <section class="menuCustomSec">
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
      <section class="menuCustomSec">
        <h1>Customization Options</h1>
        <ul>
          <li>Sugar Levels: 0%, 25%, 50%, 75%, 100%</li>
          <li>Ice Levels: No Ice, Less Ice, Regular Ice, Extra Ice</li>
          <li>Milk Alternatives: Whole Milk, Skim Milk, Almond Milk, Oat Milk</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<style scoped>
.titleBox {
  background-image: url('../assets/driedTea.jpg');
  background-size: cover;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.menuTitle {
  width: 80%;
  height: 18dvh;
  font-size: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.menuDiv {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}

.tabs {
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  width: 250px;
  height: 50px;
  font-size: 20px;
  padding: 10px;
  margin-right: 5px;
  cursor: pointer;
  border: none;
  transition: all 0.3s;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: white;
  border-radius: 15px;
}

button:hover {
  box-shadow: var(--hover-shadows);
}

button:active {
  transform: scale(0.95);
}

button.active {
  border: none;
  background-color: #bcbd8b;
  color: #eb5e28;
}

.tab-content {
  margin-top: 20px;
  height: 300px;
  border-radius: 25px;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}

.menuCustom {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  background-color: white;
  border-radius: 15px;
}

.menuCustomSec {
  width: 50%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
