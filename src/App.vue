<script setup>
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <h1>ChaCha</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>

header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    height: 10%;
    display: flex;
    flex-direction: row;
    place-items: center;
    justify-content: space-around;
  }
}
</style>
