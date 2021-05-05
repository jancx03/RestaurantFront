<template>
  <TheSearchBar />
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
