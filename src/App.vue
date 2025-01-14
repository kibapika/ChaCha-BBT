<script setup>
import { ref } from 'vue'
import social from './components/SocialNav.vue'

const menuVisible = ref(false) // Track the visibility of the mobile menu

// Toggle menu visibility
const toggleMenu = () => {
  menuVisible.value = !menuVisible.value
}

// Close the menu when a link is clicked
const closeMenu = () => {
  menuVisible.value = false
}
</script>

<template>
  <header>
    <div class="headerDiv">
      <router-link to="/home"><h1 class="title">Cha-Cha</h1></router-link>
      <button class="menu-button" @click="toggleMenu" aria-label="Toggle Menu">
        <v-icon class="icon" hover scale="1.75" name="hi-solid-menu" />
      </button>
      <nav class="navBar" v-bind:class="{ 'navBar--visible': menuVisible }">
        <router-link @click="closeMenu" to="/menu">Menu</router-link>
        <router-link @click="closeMenu" :to="{ path: '/', hash: '#about' }">About</router-link>
        <router-link @click="closeMenu" to="/location">Visit Us</router-link>
        <router-link @click="closeMenu" to="/contact">Contact</router-link>
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
  position: relative; /* Ensure header doesn't overlap */
}

.headerDiv {
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px; /* Add padding for better spacing */

}

.title {
  font-size: 2.5rem;
  font-weight: 500;
}

.navBar {
  font-size: 1.25rem;
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
}

.navBar--visible {
  display: flex; /* Show the menu */
  position: absolute; /* Ensure it doesn’t push the page content */
  top: 100%; /* Position below the header */
  left: 0;
  width: 100%;
  background-color: white; /* Background for the dropdown */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a shadow for better visibility */
  z-index: 10; /* Ensure it stays above other content */
}

.navBar a {
  padding: 10px;
  text-decoration: none;
  display: block; /* Make links block elements for better mobile touch targets */
}

.menu-button {
  display: none; /* Hide the button on larger screens */
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  margin-left: auto; /* Align button to the right */
}

main {
  flex-grow: 1;
}

footer {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: space-around;
  margin: 10px;
}

.social {
  width: 50dvw;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: space-around;
  align-items: center;
  padding: 2px;
}

.footer-privacy {
  line-height: 2;
  font-size: 16px;
  text-align: center;
}

@media (max-width: 1024px) {
  .navBar {
    display: none; /* Hide the nav links by default on mobile */
    flex-direction: column;
    width: 100%;
    text-align: center;
  }

  .navBar--visible {
    display: flex; /* Show the menu */
  }

  .menu-button {
    display: block; /* Show the menu button on smaller screens */
  }
}

@media (min-width: 1024px) {
  header {
    height: 12vh;
  }

  footer {
    height: 12vh;
  }

  main {
    height: auto;
  }
}

@media (max-width: 768px) {
  .social {
    width: 70dvw;
  }
}
</style>
