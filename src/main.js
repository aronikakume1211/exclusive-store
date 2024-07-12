import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import App from './App'
import router from './router';

// createApp(App).mount('#app')

const app = createApp(App);
app.use(router);

app.mount('#app');