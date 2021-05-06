<template>
  <div class="image">
    <div>
      <h1 class="">Restaurant Finder</h1>
      <TheSearchBar @search-restaurant="searchRestaurant" />
    </div>
  </div>
</template>

<script>
import TheSearchBar from 'components/TheInputBar.vue';
import { mapActions } from 'vuex';

export default {
  components: { TheSearchBar },
  methods: {
    ...mapActions('restaurantStore', ['queryRestaurants']),

    searchRestaurant(search) {
      return this.$router.push({ name: 'restaurants', query: { search } });
    },
  },
};
</script>
<style scoped>

.image {
  background-image: url("https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80");
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  background-position: bottom;
  justify-content: center;
  align-items: center;
}

h1{
  font-size: 300%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: brown;

}
</style>
