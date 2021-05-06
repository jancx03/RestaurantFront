<template>
  <div class="field has-addons">
    <p class="control">
      <button id="input-color" class="button is-static is-medium">Find</button>
    </p>
    <p class="control">
      <input
        id="input-side"
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
    <div id="red" class="button is-medium search-button">
      <span @click.prevent="submitData" id="white" class="icon is-small"
        ><i class="fas fa-search"></i
      ></span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  emits: ['search-restaurants'],
  data() {
    return {
      item: '',
      search: '',
    };
  },
  methods: {
    ...mapMutations(['addItem']),
    submit() {
      this.addItem(this.item.trim());
      this.item = '';
    },
    submitData() {
      this.$emit('search-restaurants', this.search);
    },
    // async finder() {
    //   // await quewe
    // },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
}
.input-control {
  min-width: 320px;
  outline: none;
}

#red {
  background-color: #bd1f1f;
  border: none;
}
#white {
  color: white;
}
#input-color {
  background-color: white;
}
#input-side {
  border: none;
  border-style: none;
}
#input-right {
  border: none;
  border-left: 1px solid black;
}
.field.has-addons .control:not(:first-child):not(:last-child) .button,
.field.has-addons .control:not(:first-child):not(:last-child) .input,
.field.has-addons .control:not(:first-child):not(:last-child) .select select {
  border: none;
}
/* :global(.icon){
  color: white;
} */
</style>
