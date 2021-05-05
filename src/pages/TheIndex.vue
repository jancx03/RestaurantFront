<template>
  <TheSearchBar />
  <Skeleton />
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
