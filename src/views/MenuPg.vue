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
    <section class="menuSec">
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
        <component class="menuComp" :is="tabs[activeTab].component"></component>
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
          <li><strong>Sugar Levels:</strong><span> 0%, 25%, 50%, 75%, 100%</span></li>
          <li>
            <strong>Ice Levels:</strong><span> No Ice, Less Ice, Regular Ice, Extra Ice</span>
          </li>
          <li>
            <strong>Milk Alternatives:</strong>
            <span> Whole Milk, Skim Milk, Almond Milk, Oat Milk</span>
          </li>
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

.menuSec {
  width: 75%;
}

.tabs {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
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
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  background-color: #f3f4ed;
}

button:active {
  transform: scale(0.95);
}

button.active {
  border: none;
  background-color: #bcbd8b;
  color: #eb5e28;
  font-weight: bolder;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.tab-content {
  height: auto;
  border-radius: 25px;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}

.menuComp {
  height: 80%;
  width: 70%;
  margin: 20px 0;
}

.menuCustom {
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 20px 0;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  background-color: white;
  border-radius: 15px;
}

.menuCustomSec {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 45%;
}

.menuCustomSec h1 {
  margin-bottom: 10px;
  font-size: 25px;
}

.menuCustomSec ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menuCustomSec li {
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 1.5;
}

strong {
  font-weight: bold;
}

span {
  color: #555;
}

@media (max-width: 768px) {
  .menuSec {
    width: 90%;
  }

  .menuDiv {
    margin-top: 10px;
  }

  .tabs {
    margin-bottom: 15px;
  }

  button {
    width: 100%;
    height: auto;
  }

  .menuCustom {
    width: 90%;
    flex-direction: column;
    text-align: center;
  }

  .menuCustomSec {
    width: 90%;
    margin-bottom: 20px;
  }
}
</style>
