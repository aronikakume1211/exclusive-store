import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App'
import router from './router';
import vuetify from './plugins/vuetify'

// createApp(App).mount('#app')
const pinia = createPinia();
const app = createApp(App);
app.use(vuetify);

app.use(pinia);
app.use(router);

app.mount('#app');