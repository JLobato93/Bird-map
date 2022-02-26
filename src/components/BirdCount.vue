<template>
  <span class="count-box">
    <span v-for="bird in birds" :key="bird.singularName">
      <span v-if="bird.checked" class="bird-counts"><b>{{ bird.pluralName }}:</b> {{ bird.count }}</span>
      </span>
    <span><b>Total birds:</b> {{ totalBirdsCount }}</span>
  </span>
</template>

<script>
import {mapGetters,mapState} from "vuex";

export default {
  name: "BirdCount",
  computed: {
    ...mapGetters('birds', [
      'allBirds',
      'totalBirdsCount'
    ]),
    ...mapState('birds', ['birds'])
  },
}
</script>

<style scoped>
.count-box {
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  position: absolute;
  width: 850px;
  height: 25px;
  bottom: 10px;
  right: 25%;
  border-radius: 5px;
  padding: 10px;
  color: black;
  font-size: 16px;
}
.bird-counts{
  margin: 5px;
}
</style>