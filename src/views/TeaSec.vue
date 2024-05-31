<script setup></script>

<template>
  <div id="teaSec">
    <h1 id="milkTeaTitle">Delicious Tea</h1>
    <div id="milkSec">
      <section>
        <router-link to="/menu"><h1>Milk Teas</h1></router-link>
      </section>
      <section>
        <router-link to="/menu"><h1>Fruite Teas</h1></router-link>
      </section>
      <section>
        <router-link to="/menu"><h1>Specialty Teas</h1></router-link>
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
  align-items: center;

}
</style>
