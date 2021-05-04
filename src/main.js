import { createApp } from 'vue';
import router from '@/router.js';
import store from './store';
import vuetify from './plugins/vuetify';
import App from './App.vue';

const app = createApp(App);
app.use(store);
app.use(vuetify);
app.use(router);

app.mount('#app');
