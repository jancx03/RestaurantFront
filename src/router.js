import { createRouter, createWebHistory } from 'vue-router';
import TheIndex from '@/pages/TheIndex.vue';
import RestaurantList from '@/pages/RestaurantLists';
import NotFound from '@/pages/NotFound.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { name: 'index', path: '/', component: TheIndex },
    { name: 'restaurants', path: '/restaurants', component: RestaurantList },
    { name: 'catch', path: '/:catch-all', component: NotFound },
  ],
});
