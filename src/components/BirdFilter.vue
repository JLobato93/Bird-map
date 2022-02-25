<template>
  <div>
    <!--      TODO: zorgen dat de kleuren van de vogels overeen komen met de kleuren op de map-->
    <span v-for="bird in $store.state.birds.checkedBirds" :key="bird">
      <div v-if="bird.toLowerCase() === 'gierzwaluw'">
        <b>{{ bird }}:</b> {{ gierzwaluwenCount }}
      </div>
        <div v-if="bird.toLowerCase() === 'boerenzwaluw'">
        <b>{{ bird }}:</b> {{ boerenzwaluwenCount }}
      </div>
        <div v-if="bird.toLowerCase() === 'huiszwaluw'">
        <b>{{ bird }}:</b> {{ huiszwaluwenCount }}
      </div>
        <div v-if="bird.toLowerCase() === 'huismus'">
        <b>{{ bird }}:</b> {{ huismussenCount }}
      </div>
        <div v-if="bird.toLowerCase() === 'spreeuw'">
        <b>{{ bird }}:</b> {{ spreeuwenCount }}
      </div>
      </span>
    <div><b>Total birds:</b> {{ totalBirdsCount }}</div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "BirdFilter",
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

</style>