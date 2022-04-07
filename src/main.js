import { createApp } from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vCalendar from 'v-calendar';

const app = createApp(App);
app.use(router, axios).mount('#app');
app.use(vCalendar, {});