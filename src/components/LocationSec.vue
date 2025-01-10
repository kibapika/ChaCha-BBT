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
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5); /* Add a semi-transparent background */
  border-radius: 15px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5); /* Add subtle shadow */
}

h1 {
  color: white;
  font-weight: bolder;
  font-size: 50px;
  -webkit-text-stroke: 2px black;
  text-shadow:
    0 0 10px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(255, 255, 255, 0.5);
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
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  background: linear-gradient(135deg, #c49f82, #eacda3);
  transition:
    transform 0.3s,
    background-color 0.3s,
    box-shadow 0.3s;
}

.router-link:hover {
  transform: scale(1.03);
  color: #fffcf2;
}

@media (max-width: 768px) {
  h1 {
    font-size: 35px;
    text-align: center;
  }

  .router-link {
    width: 50%;
    height: 15%;
    font-size: 16px;
  }

  .locationSecInfo {
    width: 90%;
    height: 90%;
    align-items: center;
  }

  .locationSecPic {
    height: 50dvh;
  }
}
</style>
