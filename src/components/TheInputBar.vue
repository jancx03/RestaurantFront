<template>
  <form>
    <div class="flex justify-center w-full">
      <div class="">
        <div class="pt-14">
          <label> Find </label>
          <input class="max-w-full h-8 pl-20" />
        </div>
      </div>
      <div class="pt-14">
        <div class="text-left">
          <label> Near </label>
          <input
            placeholder="address, neighborhood,city,state or zip"
            class="text-left max-w-full h-8 pl-20"
          />
        </div>
      </div>
      <div class="pt-14 pb-13 shadow-none">
        <button class="bg-red-700 rounded-sm h-8">Search</button>
      </div>
    </div>
  </form>
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
