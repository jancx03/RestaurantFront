<template>
  <div class="">
    <div class="flex flex-col w-full md:w-64 text-gray-700 bg-white
                dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0"
      x-data="{ open: false }">
      <div class="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
        <a href="#" class="text-lg font-semibold tracking-widest text-gray-900 uppercase
                          rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
          Filters
        </a>
      </div>
      <nav :class="{ block: open, hidden: !open }"
        class="flex-grow md:block px-4 pb-4 md:pb-0 md:overflow-y-auto"
      >
        <a
          class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900"
          href="#"
          >

          <div class="flex bg-gray-100 rounded-full border-2 border-gray-300">
          <div class="w-full text-center  hover:bg-gray-300">
            <button @click="costMethod('$')" class="w-full border-fuchsia-600">$</button>
          </div>
          <div class="w-full text-center  hover:bg-gray-300">
            <button @click="costMethod('$$')" class="w-full border-l-2 border border-fuchsia-600">
              $$
            </button>
          </div>
          <div class=" w-full text-center  hover:bg-gray-300">
            <button @click="costMethod('$$$')" class="w-full border-fuchsia-600 ">$$$</button>
          </div>
          </div>
            </a
        >
        <a class="block px-4 py-2 mt-2 text-sm
                  font-semibold text-gray-900 bg-transparent rounded-lg "
          href="#"
        >
         <!-- Restaurant Rating -->
        <hr>
        <p class="feature-title">Rating</p>
          <ul class="pb-1">
            <div @click="ratingMethod(4)">
              <i v-for="star in 4" :key="star" class="fas fa-star fill"></i>
              <i v-for="star in 1" :key="star" class="fas fa-star unfill"></i><span>& Up</span>
            </div>
          </ul>
          <ul class="pb-1">
           <div @click="ratingMethod(3)">
              <i v-for="star in 3" :key="star" class="fas fa-star fill"></i>
              <i v-for="star in 2" :key="star" class="fas fa-star unfill"></i><span>& Up</span>
            </div>
          </ul>
          <ul class="pb-1">
          <div @click="ratingMethod(2)">
              <i v-for="star in 2" :key="star" class="fas fa-star fill"></i>
              <i v-for="star in 3" :key="star" class="fas fa-star unfill"></i><span>& Up</span>
            </div>
          </ul>
          <ul class="pb-1">
           <div @click="ratingMethod(1)">
              <i v-for="star in 1" :key="star" class="fas fa-star fill"></i>
              <i v-for="star in 4" :key="star" class="fas fa-star unfill"></i><span>& Up</span>
            </div>
          </ul>
        </a>

        <!-- Features -->
        <hr>
        <p class="feature-title">Features</p>
        <div>
          <input v-model="kidFriendly" class="check" type="checkbox" />
          <span class="feature">Kid Friendly</span>
        </div>
        <div>
          <input v-model="reserve" class="check" type="checkbox" />
          <span class="feature">Reserve</span>
        </div>
        <div>
          <input v-model="accessability" class="check" type="checkbox" />
          <span class="feature">Accessability</span>
        </div>

        <!-- Sanitary -->
        <hr>
        <p class="feature-title">Sanitary</p>
        <select v-model="sanitary" name="sanitary">
          <option value="A">A rated</option>
          <option value="B">B rated</option>
          <option value="C">C rated</option>
          <option value="all" selected>All</option>
        </select>

      <!-- Wait Time -->
        <hr>
        <p class="feature-title">Wait Time</p>
        <div>
          <input name="wait" v-model="waitTime" class="check" type="radio"  value="15"/>
          <span class="feature">Less than 15 minutes</span>
        </div>
        <div>
          <input name="wait" v-model="waitTime" class="check"
          type="radio"  value="30"/>
          <span class="feature">Less than 30 minutes</span>
        </div>
        <div>
          <input name="wait" v-model="waitTime" class="check"
          type="radio" value="all" checked/>
          <span class="feature">No Preference</span>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kidFriendly: null,
      reserve: null,
      accessability: null,
      paymentMethod: 'both',
      sanitary: 'all',
      waitTime: 'none',
    };
  },
  watch: {
    kidFriendly() {
      const kidfriendly = this.kidFriendly;
      return this.$router.push({
        name: 'restaurants',
        query: { ...this.$route.query, kidfriendly },
      });
    },
    reserve() {
      const { reserve } = this;
      return this.$router.push({ name: 'restaurants', query: { ...this.$route.query, reserve } });
    },
    accessability() {
      const { accessability } = this;
      return this.$router.push({
        name: 'restaurants',
        query: { ...this.$route.query, accessability },
      });
    },
    paymentMethod() {
      console.log(this.paymentMethod);
    },
    sanitary() {
      const { sanitary } = this;
      return this.$router.push({ name: 'restaurants', query: { ...this.$route.query, sanitary } });
    },
    waitTime() {
      const wait = this.waitTime;
      return this.$router.push({ name: 'restaurants', query: { ...this.$route.query, wait } });
    },
  },
  methods: {
    costMethod(cost) {
      return this.$router.push({ name: 'restaurants', query: { ...this.$route.query, cost } });
    },
    ratingMethod(rating) {
      return this.$router.push({ name: 'restaurants', query: { ...this.$route.query, rating } });
    },
  },
};
</script>

<style>
.feature-title {
  margin-bottom: .4rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: black;
}

.feature {
  padding-left: .6rem;
}

.check
{
  /* Double-sized Checkboxes */
  -ms-transform: scale(1.7); /* IE */
  -moz-transform: scale(1.7); /* FF */
  -webkit-transform: scale(1.7); /* Safari and Chrome */
  -o-transform: scale(1.7); /* Opera */
  transform: scale(1.7);
}

.unfill {
  color: white;
  background-color: lightgrey;
  font-size: .7rem;
  padding: .3rem;
  margin-right: .2rem;
  border-radius: .4rem;
}

.fill {
  color: white;
  background-color: red;
  font-size: .7rem;
  padding: .3rem;
  margin-right: .2rem;
  border-radius: .4rem;
}
</style>
