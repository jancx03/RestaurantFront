<template>
  <div class="image">
    <div>
      <TheSearchBar />
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
  },
};
</script>
<style scoped>

.image {
  background-image: url("https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80");
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
