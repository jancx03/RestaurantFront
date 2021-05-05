<template>
  <div class="field has-addons">
    <p class="control">
      <button class="button is-static is-medium">Find</button>
    </p>
    <p class="control">
      <input
        class="input is-medium input-control"
        type="text"
        placeholder="italian, mexican, chinese..."
      />
    </p>
    <p class="control">
      <button class="button is-static is-medium">Near</button>
    </p>
    <p class="control">
      <input
        class="input is-medium input-control"
        type="text"
        placeholder="addess, neighborhood, city, state or zip"
      />
    </p>
    <div class="button is-medium search-button">
      <span class="icon is-small"><i class="fas fa-search"></i></span>
    </div>
  </div>
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
.input-control{
  min-width: 320px;
}

:global(.button).search-button
{
  background: #bd1f1f;
}

:global(.icon){
  color: white;
}
</style>
