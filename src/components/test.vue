<template>
  <section>
    <h2>{{ charname }}</h2>
    <h3>{{ charage }} Years</h3>
    <h3>{{ charpower }} Years</h3>
  </section>
</template>

<script>
export default {
  props: {
    username: {
      type: String,
    },
    userage: {
      type: String,
    },
    usermail: {
      type: String,
    },
  },
};
</script>

<style>
</style>
