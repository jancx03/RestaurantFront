<template>
  <ul>
    <li v-for="restaurant in restaurants" :key="restaurant.name">
      <div class="card">
        <div class="image">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="restaurant_image">
        </div>
        <div class="main">
          <p>{{restaurant.name}}</p>
          <p>{{restaurant.star_rate}}</p>
          <p><span>{{restaurant.cost}}</span><span>{{restaurant.type}}</span></p>
          <p><span>{{restaurant.reserve}}</span><span>{{restaurant.kid_friendly}}</span></p>
        </div>
        <div class="info">
          <p>{{restaurant.address}}</p>
          <p>{{restaurant.contact}}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
export default {
  props: ['restaurants'],
};
</script>

<style scoped>
.card {
  display: inline-grid;
  grid-auto-rows: 1fr;
  grid-template-rows:  auto;
  grid-template-columns:  repeat(3, 1fr);
  transition: all .3s linear;
  width: 70%;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: .2rem;
  margin: 1rem 1rem;
  padding: 1rem;
}

.card:hover {
  -webkit-box-shadow: -.2rem 0 .5rem rgba(0, 0, 0, 0.1), .2rem .2rem .5rem rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -.2rem 0 .5rem rgba(0, 0, 0, 0.1), .2rem .2rem .5rem rgba(0, 0, 0, 0.1);
  box-shadow: -.2rem 0 .5rem rgba(0, 0, 0, 0.1), .2rem .2rem .5rem rgba(0, 0, 0, 0.1);
}

img {
  width: 10rem;
  border-radius: .2rem;
}

</style>
