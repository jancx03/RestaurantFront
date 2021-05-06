<template>
  <div class="image">
    <div>
         <TheSearchBar />
    </div>

  </div>
</template>

<script>
import TheSearchBar from 'components/TheInputBar.vue';
import Skeleton from 'components/Skeleton.vue';
import { mapActions } from 'vuex';

export default {
  components: { TheSearchBar, Skeleton },
  methods: {
    ...mapActions('restaurantStore', ['queryRestaurants']),
  },
};
</script>
<style scoped>

.image {
  background-image: url("https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80");
  width: 100;
  height: 100vh;
  background-repeat: no-repeat;
  display: flex;
  background-position: left top;
  justify-content: center;
  align-items: center;
  /* margin-top: 10rem; */
}

</style>
