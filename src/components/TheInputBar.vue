<template>
  <form action="">
  <div class="flex justify-center pt-14 pr-20 pb-13">
    <div>
      <span class="mr-12 text-gray-600">Find</span>
      <span class="">
        <input type="text" placeholder="restaurants" class="font-normal" />
      </span>
    </div>
    <div class="font-medium">
      <label for="near" >Near</label>
      <input
        type="text"
        placeholder="address, neighborhood, city, state or zip"
      />
    </div>
    <div class="">
      <button class="bg-red-700" >search</button>
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
