<template>
<div class="bg-blue-500">This is checking</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      item: '',
    };
  },
  methods: {
    ...mapMutations(['addItem']),
    submit() {
      this.addItem(this.item.trim());
      this.item = '';
    },
  },
};
</script>

<style>

</style>
