<template>
  <section>
    <h1 v-for="item in items" :key="item">{{ item }}</h1>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["items"]),
  },
};
</script>

<style>
</style>
