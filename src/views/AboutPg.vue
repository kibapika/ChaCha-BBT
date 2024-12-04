<script setup>
import tea from '../assets/tea.jpg'
</script>

<template>
  <div id="aboutdiv">
    <div id="container">
      <img id="teapic" alt="teaaboutpg" :src="tea" />
      <section class="box2">
        <h1 class="title">The Story of ChaCha</h1>
        <p class="text">
          Chacha is a fictional bubble tea shop created for a mock website project showcasing web
          development skills. All content, including locations, phone numbers, and details, is
          entirely fictional and intended for demonstration purposes only. This site does not
          represent a real business or service.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
#teapic {
  max-width: 28dvw;
  width: 28dvw;
  border-radius: 100%;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  position: absolute;
  top: 20px;
  left: 125px;
}

#aboutdiv {
  height: 95dvh;
  display: flex;
  justify-content: center;
}

#container {
  margin-top: 0.5rem;
  width: 85%;
  position: relative;
}

.box2 {
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  width: 35dvw;
  max-width: 35dvw;
  color: black;
  top: 250px;
  right: 140px;
  position: absolute;
  background: rgba(255, 255, 255, 1);
}

.title {
  font-weight: bolder;
  line-height: 2;
  font-size: 25px;
}

@media (max-width: 1024px) {

  #aboutdiv {
    height: max-content;
  }


  #container {
    display: flex;
    flex-direction: column;
    align-items: center; /* Align items vertically */
    justify-content: space-evenly; /* Center content horizontally */
  }

  #teapic {
    position: relative;
    top: 0;
    left: 0;
    max-width: none;
    width: 40dvw;
  }

  .box2 {
    position: relative;
    top: 0;
    right: 0;
    max-width: none;
    width: 100%;
  }
}

</style>
