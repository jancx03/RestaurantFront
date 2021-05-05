<template>
  <ul>
    <li v-for="restaurant in restaurants" :key="restaurant.name">
      <RestaurantCard :restaurant="restaurant" :image="image" />
    </li>
  </ul>
</template>

<script>
import RestaurantCard from 'components/RestaurantCard.vue';
import { mapGetters } from 'vuex';

export default {
  components: { RestaurantCard },
  data() {
    return {
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    };
  },
  computed: {
    ...mapGetters('restaurantStore', ['restaurants']),
  },
};
</script>
