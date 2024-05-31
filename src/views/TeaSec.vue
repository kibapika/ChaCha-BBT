<script setup>
import specialTea from '../assets/specialTea.jpg'
import specialTea2 from '../assets/specialTea2.jpg'
import fruitTea from '../assets/fruitTea.jpg'
import milkTea from '../assets/milkTea.jpg'
</script>

<template>
  <div id="teaSecdiv">
    <h1 id="milkTeaTitle">Delicious Tea</h1>
    <div id="milkSec">
      <section class="milkTeaBtn">
        <img width="150px" alt="specialTeaPic" :src="milkTea" />
        <router-link to="/menu"><h1>Milk Teas</h1></router-link>
      </section>
      <section class="milkTeaBtn">
        <img width="150px" alt="specialTeaPic" :src="fruitTea" />
        <router-link to="/menu"><h1>Fruite Teas</h1></router-link>
      </section>
      <section class="milkTeaBtn">
        <img width="150px" alt="specialTeaPic" :src="specialTea2" />
        <router-link to="/menu"><h1>SpecialTeas</h1></router-link>
      </section>
    </div>
  </div>
</template>

<style scoped>
#teaSecdiv{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80dvh;
}

#milkTeaTitle {
  text-align: center;
}

#milkSec {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.milkTeaBtn {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
