<script setup>
import tea from '../assets/tea.jpg'
</script>

<template>
  <div id="aboutdiv">
    <div id="container">
      <img id="teapic" alt="teaaboutpg" :src="tea" />
      <section class="box2">
        <h1 class="text title">The Story of ChaCha</h1>
        <p class="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, eius officia. Eaque
          similique qui ducimus, iusto est nulla, beatae a quidem ad facilis dolores repudiandae hic
          optio modi id quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Lorem
          ipsum, dolor sit amet consectetur adipisicing elit. Fuga aut cumque repellendus, neque
          maiores laborum accusamus in temporibus atque minus sint et incidunt harum ex omnis
          numquam impedit voluptatibus sapiente. elit.
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
  height: 100dvh;
  display: flex;
  justify-content: center;
}

#container {
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;
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
    font-size: 23px;
}
</style>
