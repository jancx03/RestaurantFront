import { createRouter, createWebHistory } from 'vue-router';
import RestaurantsIndex from '@/pages/RestaurantsIndex.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'index', path: '/', redirect: '/restaurants' },
    { name: 'restaurants', path: '/restaurants', component: RestaurantsIndex },
  ],
});
