<script setup>
// import { useRouter } from 'vue-router'
import social from './components/SocialNav.vue'
// const router = useRouter()

// const scrollToAbout = () => {
//   const aboutSection = document.getElementById('about')
//   if (aboutSection) {
//     const offset = document.querySelector('header').offsetHeight
//     window.scrollTo({
//       top: aboutSection.offsetTop - offset,
//       behavior: 'smooth'
//     })
//     router.push({ hash: '#about' })
//   }
// }

// const redirectToAbout = () => {
//   router.push('/#about')
//   console.log('hello') // Navigate to the 'home' route with hash '#about'
//   scrollToAbout() // Call the scrolling function'
//   console.log('bye')
// }
</script>

<template>
  <header>
    <div class="headerDiv">
      <router-link to="/home"><h1 class="title">Cha-Cha</h1></router-link>
      <nav class="navBar">
        <router-link to="/menu">Menu</router-link>
        <!-- <a href="#about" @click="redirectToAbout" @click.prevent="scrollToAbout">Our Story</a> -->
        <router-link :to="{ path: '/', hash: '#about' }">About</router-link>
        <router-link to="/location">Visit Us</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
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
  display: flex;
  justify-content: center;
}

.headerDiv {
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-size: 2.5rem;
  font-weight: 500;
}

.navBar {
  font-size: 1.25rem;
  width: 35%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

main {
  flex-grow: 1; /* Grow to fill remaining space */
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
  font-size: 16px;
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
