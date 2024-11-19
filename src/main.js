// import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import { OhVueIcon, addIcons } from 'oh-vue-icons'

// import { BiFacebook } from "oh-vue-icons/icons";

// addIcons(BiFacebook);

// createApp(App).use(router).mount('#app').component('v-icon', OhVueIcon);

import './assets/main.css'; // Make sure this path is correct

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { BiFacebook, BiTwitter, BiInstagram, BiTiktok, HiMail, RiBearSmileLine, BiHeart, CoSad, BiSendFill, HiLocationMarker, BiPhone, MdAccesstime, FaWheelchair, MdPets, FaChair, CoBuyMeACoffee, HiGift, FaWifi, HiSolidMenu } from "oh-vue-icons/icons";

// Add the icons
addIcons(BiFacebook, BiTwitter, BiInstagram, BiTiktok, HiMail, RiBearSmileLine, BiHeart, CoSad, BiSendFill, HiLocationMarker, BiPhone, MdAccesstime, FaWheelchair, MdPets, FaChair, CoBuyMeACoffee, HiGift, FaWifi, HiSolidMenu );

const app = createApp(App);

// Register OhVueIcon globally
app.component('v-icon', OhVueIcon);

app.use(router);

app.mount('#app');
