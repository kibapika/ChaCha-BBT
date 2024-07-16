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
import { BiFacebook, BiTwitter, BiInstagram, BiTiktok, HiMail,RiBearSmileLine, BiHeart, CoSad } from "oh-vue-icons/icons";
import { VueRecaptchaPlugin } from 'vue-recaptcha';


addIcons(BiFacebook, BiTwitter, BiInstagram, BiTiktok, HiMail, RiBearSmileLine, BiHeart, CoSad);

const app = createApp(App);

app.component('v-icon', OhVueIcon);

app.use(router);

app.use(VueRecaptchaPlugin, {
    v2SiteKey: 'YOUR_V2_SITEKEY_HERE',
    v3SiteKey: 'YOUR_V3_SITEKEY_HERE',
  });


app.mount('#app');