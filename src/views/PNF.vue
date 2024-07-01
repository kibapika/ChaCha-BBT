<script setup></script>

<template>
  <section class="pnfSec">
    <div class="oops">
      <h1>Oops!</h1>
      <v-icon class="icon" scale="3" animation="wrench" name="co-sad" />
    </div>
    <h1>This Page is Lost in the Bubbles. Let's ChaCha Back to Home!</h1>
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

.oops {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 15%;
  align-items: center;
  text-align: center;
}
</style>
