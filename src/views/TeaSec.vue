<script setup>
// import specialTea from '../assets/specialTea.jpg'
import specialTea2 from '../assets/specialTea2.jpg'
import fruitTea from '../assets/fruitTea.jpg'
import milkTea from '../assets/milkTea.jpg'
</script>

<template>
  <div id="teaSecdiv">
    <h1 id="milkTeaTitle">Delicious Tea</h1>
    <div id="milkSec">
      <section class="milkTeaBtn">
        <router-link to="/menu">
          <img alt="specialTeaPic" :src="milkTea" />
          <h1 class="teasH1">Milk Teas</h1>
        </router-link>
      </section>
      <section class="milkTeaBtn">
        <router-link to="/menu">
          <img alt="specialTeaPic" :src="fruitTea" />
          <h1 class="teasH1">Fruit Teas</h1>
        </router-link>
      </section>
      <section class="milkTeaBtn">
        <router-link to="/menu">
          <img alt="specialTeaPic" :src="specialTea2" />
          <h1 class="teasH1">SpecialTeas</h1>
        </router-link>
      </section>
    </div>
  </div>
</template>

<style scoped>
#teaSecdiv {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 85dvh;
}

#milkTeaTitle {
  text-align: center;
  font-size: 40px;
  font-weight: bolder;
}

#milkSec {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.milkTeaBtn {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.milkTeaBtn,
.milkTeaBtn img {
  position: relative;
}

.milkTeaBtn img {
  width: 225px;
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  transition: transform 0.3s;
}

.milkTeaBtn img:hover {
  transform: scale(1.05);
}

.teasH1 {
  width: 80%;
  border-top-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
  position: absolute;
  top: 89%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 25px;
  background-color: #ccc7b9;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}
</style>
