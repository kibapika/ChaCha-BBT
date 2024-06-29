<script setup>
defineProps({
  updatedMsg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="wrapper">
    <div class="marquee">
      <p>
        {{ updatedMsg }}
        <v-icon hover scale="1.25" animation="float" name="bi-heart" />
        <v-icon hover scale="1.25" animation="float" name="ri-bear-smile-line" />
        <v-icon hover scale="1.25" animation="float" name="bi-heart" />
      </p>
      <p>
        {{ updatedMsg }}
        <v-icon hover scale="1.25" animation="float" name="bi-heart" />
        <v-icon hover scale="1.25" animation="float" name="ri-bear-smile-line" />
        <v-icon hover scale="1.25" animation="float" name="bi-heart" />
      </p>
    </div>
  </section>
</template>

<style scoped>
.wrapper {
  max-width: 100%;
  overflow: hidden;
}

.marquee {
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: marquee 20s linear infinite;
  margin-top: 15px;
}

.marquee p {
  display: inline-block;
  font-size: 23px;
  letter-spacing: 1px;
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
</style>
