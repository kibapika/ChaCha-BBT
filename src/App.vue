<script setup>
import { useRouter } from 'vue-router'
import social from './components/SocialNav.vue'

const router = useRouter()

const scrollToAbout = () => {
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    const offset = document.querySelector('header').offsetHeight
    window.scrollTo({
      top: aboutSection.offsetTop - offset,
      behavior: 'smooth'
    })
    router.push({ hash: '#about' })
  }
}

const redirectToAbout = () => {
  router.push('/#about')
  console.log('hello') // Navigate to the 'home' route with hash '#about'
  scrollToAbout() // Call the scrolling function'
  console.log('bye')
}
</script>

<template>
  <header>
    <router-link class="title" to="/home"><h1>Cha-Cha</h1></router-link>
    <nav class="navBar">
      <router-link to="/menu">Menu</router-link>
      <a href="#about" @click="redirectToAbout" @click.prevent="scrollToAbout">Our Story</a>
      <router-link to="/location">Visit Us</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <social class="social" />
    <h2 class="footer-privacy">
      © 2024 Cha-Cha. All Rights Reserved. |
      <router-link to="/privacy-policy">Privacy Policy</router-link>
    </h2>
  </footer>
</template>

<style scoped>
header {
  line-height: 2;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: space-around;
}

.title {
  font-size: large;
}

.navBar {
  font-size: large;
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

footer {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-around;
  margin: 10px;
}

.social {
  width: 25dvw;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: space-around;
  padding: 2px;
}

.footer-privacy {
  line-height: 2;
  font-size: medium;
}

@media (min-width: 1024px) {
  header {
    height: 10%;
  }
  footer {
    height: 10%;
  }

  main {
    height: auto;
  }
}
</style>
