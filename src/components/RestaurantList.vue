<template>
  <ul>
    <li v-for="restaurant in restaurants" :key="restaurant.name">
      <div class="card">
        <div class="image">
          <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="restaurant_image">
        </div>
        <div class="main">
          <p class="title">{{restaurant.restaurant}}</p>
          <i v-for="star in restaurant.star_rate" :key="star" class="fas fa-star fill"></i>
          <i v-for="star in 5 - restaurant.star_rate" :key="star" class="fas fa-star unfill"></i>
          <p class="normal">
            <span>{{restaurant.cost}}</span>
            <span class="dot">&middot;</span>
            <span>{{restaurant.type}}</span></p>
          <p class="normal">
            <span class="check" v-if="sToB(restaurant.reserve)"><i class="fas fa-check"></i></span>
            <span class="close" v-else><i class="fas fa-times"></i></span>
            <span class="feature">Reserve</span>
            <span class="check"
              v-if="sToB(restaurant.kid_friendly)">
              <i class="fas fa-check"></i>
            </span>
            <span v-else><i class="fas fa-times"></i></span>
            <span class="feature">Kid Friendly</span>
          </p>
        </div>
        <div class="info">
          <p>{{restaurant.address}}</p>
          <p>{{restaurant.contact}}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['restaurants'],
  methods: {
    /** Convert string no or yes to boolean */
    sToB(/* string */ value) {
      let result = false;

      switch (value) {
        case 'Yes':
          result = true;
          break;
        default:
          result = false;
          break;
      }

      return /* boolean */ result;
    },
  },
};
</script>

<style scoped>
img {
  width: 9rem;
  height: 9rem;
  border-radius: .2rem;
}

.card {
  position: relative;
  /* display: inline-grid;
  grid-auto-rows: 1fr;
  grid-template-rows:  auto;
  grid-template-columns:  repeat(2, 1fr);
  grid-column-gap: 0rem; */
  display: flex;
  justify-content:left;
  align-items: flex-start;
  transition: all .3s linear;
  border: 1px solid rgba(0,0,0,0.1);
  border-radius: .2rem;
  margin: 1rem 1rem;
  padding: 1rem;
  min-width: 30%;
}

.card:hover {
  -webkit-box-shadow: -.2rem 0 .5rem rgba(0, 0, 0, 0.1), .2rem .2rem .5rem rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -.2rem 0 .5rem rgba(0, 0, 0, 0.1), .2rem .2rem .5rem rgba(0, 0, 0, 0.1);
  box-shadow: -.2rem 0 .5rem rgba(0, 0, 0, 0.1), .2rem .2rem .5rem rgba(0, 0, 0, 0.1);
}

.info {
  font-size: .7rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.main {
  margin-left: 1rem;
}

.title {
  font-weight: 700;
}

.normal {
  font-weight: 300;
  font-size: .9rem;
}

.fill {
  color: white;
  background-color: red;
  font-size: .7rem;
  padding: .3rem;
  margin-right: .2rem;
  border-radius: .4rem;
}

.unfill {
  color: white;
  background-color: lightgrey;
  font-size: .7rem;
  padding: .3rem;
  margin-right: .2rem;
  border-radius: .4rem;
}

.dot {
  font-weight: bold;
  margin: 0 .5rem;
}

.check {
  color: green;
  font-weight: 200;
}

.close {
  color: black;
  font-weight: 200;
}

.feature {
  margin: 0 .7rem;
}
</style>
