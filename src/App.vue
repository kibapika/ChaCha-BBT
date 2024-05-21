<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import social from './components/SocialNav.vue'
</script>

<template>
  <header>
    <RouterLink to="/home"><h1>Cha-Cha</h1></RouterLink>
    <nav>
      <RouterLink to="/menu">Menu</RouterLink>
      <RouterLink to="/about">Our Story</RouterLink>
      <RouterLink to="/location">Visit Us</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <social class="social" />
    <h3 class="footer-privacy">
      © 2024 Cha-Cha. All Rights Reserved. |
      <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
    </h3>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: space-around;
}

footer {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-around;
}

.social {
  width: 25dvw;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: space-around;
}

.footer-privacy {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    height: 10%;
  }
  footer {
    height: 15%;
  }

  main {
    height: auto;
  }
}
</style>
