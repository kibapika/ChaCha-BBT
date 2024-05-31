// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import { OhVueIcon, addIcons } from 'oh-vue-icons'

// import { BiFacebook } from "oh-vue-icons/icons";

// addIcons(BiFacebook);

// createApp(App).use(router).mount('#app').component('v-icon', OhVueIcon);

import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiFacebook, BiTwitter, BiInstagram, BiTiktok, HiMail,RiBearSmileLine, BiHeart } from "oh-vue-icons/icons";

addIcons(BiFacebook, BiTwitter, BiInstagram, BiTiktok, HiMail, RiBearSmileLine, BiHeart);

const app = createApp(App);

app.component('v-icon', OhVueIcon);

app.use(router);

app.mount('#app');
