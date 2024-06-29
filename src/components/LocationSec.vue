<script setup></script>

<template>
  <div class="locationSecDiv">
    <section class="locationSecPic">
      <div class="locationSecInfo">
        <h1>Cha Cha on over to our shop for delightful bubble tea sips!</h1>
        <router-link to="/location" class="router-link"> Cha Cha Locate! </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.locationSecPic {
  background-image: url('../assets/cafe.jpg');
  background-size: cover;
  padding: 20px;
  height: 65dvh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.locationSecInfo {
  width: 85%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

h1 {
  color: white;
  font-weight: bolder;
  font-size: 50px;
  -webkit-text-stroke: 2px black;
}

.router-link {
  color: black;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bolder;
  width: 22%;
  height: 20%;
  border-radius: 10px;
  background-color: #c49f82;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

.router-link:hover {
  transform: scale(1.03);
  color: #fffcf2;
}
</style>
