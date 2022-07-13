import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init();
createApp(App).use(router).mount('#app')


// const app = createApp(App);
// app.AOS = new AOS.init();
// app.use(AOS).use(router).mount('#app')