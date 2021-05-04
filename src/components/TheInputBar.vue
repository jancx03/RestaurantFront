<template>
  <form>
    <div class="flex justify-center w-full">
      <div class="">
        <div class="pt-14 ">
          <label> Find </label>
           <input class="" />
        </div>
      </div>
      <div class="pt-14">
        <div>
          <label> Near </label>
           <input class="" />
        </div>
      </div>
      <!-- <div class="pt-14 pl-20 pb-13 shadow-none ">
        <button class="bg-red-700 rounded-sm">Search</button>
      </div> -->
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
