<template>
  <div class="container" align="center">
    <input v-model="item" @keyup.enter="submit" type="text" placeholder="Hey! type here...">
    <input type="text" name="" id="">
    <button @click="submit" @mousedown.prevent>Add</button>
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

<style scoped>

.container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 10rem;
  align-items: center;
  animation: fade-in 1s ease-out forwards;
}

input {
  width: 50vw;
  height: 3rem;
  background-color: aliceblue;
  text-align: center;
  outline: none;
  border-radius: 5rem 0 0 5rem;
}

input:focus {
  background-color: paleturquoise;
}

input::placeholder {
  color: black;
}

input:focus::placeholder {
  color: transparent;
}

button {
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 600;
  background-color: aliceblue;
  border-radius: 0 5rem 5rem 0;
  height: 3rem;
  width: 5rem;
  background: linear-gradient(to right, paleturquoise 50%, aliceblue 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all .2s ease-out;
}

button:focus {
  outline: none;
}

button:hover {
  background-position: left bottom;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-50vh) scale(.1);
  }

  to {
    opacity: 1;
    transform: translateX(0) scale(1);
  }
}
</style>
