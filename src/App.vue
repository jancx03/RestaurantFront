<template>
  <TheInputbar />
  <Test />
</template>

<script>
import TheInputbar from 'components/TheInputBar.vue';
import Test from './components/test.vue';

export default {
  components: { TheInputbar, Test },
  data() {
    return {
      user: {
        name: 'Monkey D. Luffy',
        age: 17,
        power: 'Gomu Gomu no Mi',
      },
    };
  },
};
</script>

<style>
* {
  font-size: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body {
  box-sizing: border-box;
}
</style>
