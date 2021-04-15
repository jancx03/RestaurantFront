<template>
  <section v-for="item in items">
    <h1>{{ item }}</h1>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed(){
        ...mapGetters(['items']),
        
    }
};
</script>

<style>
</style>
