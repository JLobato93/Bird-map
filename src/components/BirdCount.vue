<template>
  <span class="count-box">
    <span v-for="bird in $store.state.birds.checkedBirds" :key="bird">
      <span v-if="bird.toLowerCase() === 'gierzwaluw'">
        <b>{{ bird }}:</b> {{ gierzwaluwenCount }}
      </span>
        <span v-if="bird.toLowerCase() === 'boerenzwaluw'">
        <b>{{ bird }}:</b> {{ boerenzwaluwenCount }}
      </span>
        <span v-if="bird.toLowerCase() === 'huiszwaluw'">
        <b>{{ bird }}:</b> {{ huiszwaluwenCount }}
      </span>
        <span v-if="bird.toLowerCase() === 'huismus'">
        <b>{{ bird }}:</b> {{ huismussenCount }}
      </span>
        <span v-if="bird.toLowerCase() === 'spreeuw'">
        <b>{{ bird }}:</b> {{ spreeuwenCount }}
      </span>
      </span>
    <span><b>Total birds:</b> {{ totalBirdsCount }}</span>
  </span>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "BirdCount",
  computed: {
    ...mapGetters('birds', [
      'huismussenCount',
      'boerenzwaluwenCount',
      'gierzwaluwenCount',
      'huiszwaluwenCount',
      'spreeuwenCount',
      'totalBirdsCount'
    ])
  },
}
</script>

<style scoped>
.count-box {
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  position: absolute;
  width: 800px;
  height: 25px;
  bottom: 10px;
  right: 25%;
  border-radius: 5px;
  padding: 10px;
  color: black;
  font-size: 16px;
}
</style>