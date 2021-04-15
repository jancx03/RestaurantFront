<template>
  <TheInputbar />
</template>

<script>
import TheInputbar from "components/TheInputBar.vue";
import test from "./components/test.vue";

export default {
  components: { TheInputbar, test },
  data() {
    return {
      user: {
        name: "Monkey D. Luffy",
        age: 17,
        power: "Gomu Gomu no Mi",
      },
    };
  },
};
</script>

<style>
* {
  font-size: 65%;
  font-family: "Pacifico", cursive;
}
body {
  box-sizing: border-box;
}
</style>
