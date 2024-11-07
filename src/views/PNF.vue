<script setup></script>

<template>
  <section class="pnfSec">
    <div class="oops">
      <h1>Oops!</h1>
      <v-icon class="icon" scale="3" animation="wrench" name="co-sad" />
    </div>
    <h1>
      This Page is Lost in the Bubbles. Let's ChaCha Back to
      <router-link to="/home" class="link">Home</router-link>!
    </h1>
  </section>
</template>

<style scoped>
.pnfSec {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1 {
  font-size: 45px;
  font-weight: 500;
  width: 70%;
  text-align: center;
  letter-spacing: 1px;
}

.link {
  text-decoration: underline;
  font-size: 45px;
  font-weight: 500;
}

.oops {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
