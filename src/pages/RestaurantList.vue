<template>
  <div class="flex justify-center pt-5">
    <TheSearchBar/>
  </div>
  <div class="main">
    <TheSideBar />
    <ul v-if="ready">
      <li v-for="(restaurant, index) in restaurants" :key="restaurant.name">
        <RestaurantCard :restaurant="restaurant" :index="index + 1" />
      </li>
    </ul>
    <ul v-else>
      <li v-for="n in 10" :key="n">
        <Skeleton />
      </li>
    </ul>
  </div>
</template>

<script>
import RestaurantCard from 'components/RestaurantCard.vue';
import Skeleton from 'components/Skeleton.vue';
import TheSearchBar from 'components/TheInputBar.vue';
import TheSideBar from 'components/SideBar.vue';

import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    RestaurantCard, Skeleton, TheSearchBar, TheSideBar,
  },
  computed: {
    ...mapGetters('restaurantStore', ['restaurants']),
    ready() {
      return !!this.restaurants.length;
    },
  },
  methods: {
    ...mapActions('restaurantStore', ['queryRestaurants']),
    async getRestaurants() {
      const { search, location } = this.$route.query;
      const payload = { search, location };
      await this.queryRestaurants(payload);
      return 0;
    },
  },
  async mounted() {
    await this.getRestaurants();
    return 0;
  },
};
</script>

<style scoped>

.main {
  width: 100vw;
  display: flex;
  justify-content:left;
  align-items: flex-start;

}
  /* display: inline-grid;
  grid-auto-rows: 1fr;
  grid-template-rows:  auto;
  transition: all .3s linear;
  justify-items: center;
  grid-template-columns: 20% 60% 20%; */
</style>
