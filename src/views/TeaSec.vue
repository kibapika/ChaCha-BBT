<script setup>
import specialTea from '../assets/specialTea.jpg'
</script>

<template>
  <div>
    <h1 id="milkTeaTitle">Delicious Tea</h1>
    <div id="milkSec">
      <section class="milkTeaBtn">
        <img width="50%" alt="specialTeaPic" :src="specialTea" />
        <router-link to="/menu"><h1>Milk Teas</h1></router-link>
      </section>
      <section class="milkTeaBtn">
        <img width="50%" alt="specialTeaPic" :src="specialTea" />
        <router-link to="/menu"><h1>Fruite Teas</h1></router-link>
      </section>
      <section class="milkTeaBtn">
        <img width="50%" alt="specialTeaPic" :src="specialTea" />
        <router-link to="/menu"><h1>SpecialTeas</h1></router-link>
      </section>
    </div>
  </div>
</template>

<style scoped>
#milkTeaTitle {
  text-align: center;
}

#milkSec {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.milkTeaBtn {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
