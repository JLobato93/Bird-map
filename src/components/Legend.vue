<template>
  <div class="legend">
    <div v-for="bird in birds" :key="bird.singularName">
      <div class="circle" :style="{backgroundColor:bird.color}"></div>
      <input type="checkbox" :value="bird.checked" v-model="bird.checked">
      <label>{{ bird.pluralName }}</label>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "Legend",
  computed: {
    ...mapState('birds', ['birds', 'birdsGeoSet']),
    ...mapState('map', ['map', 'mapLoaded'])
  },
  methods: {
    ...mapActions('birds', ['calculateTotalBirds']),
    getCheckedBirds() {
      let checkedBirds = []
      this.birds.forEach(bird => {
        if (bird.checked) checkedBirds.push(bird.singularName)
      })
      return checkedBirds
    },
    filteredBirds() {
      return {
        type: 'FeatureCollection',
        name: 'VOGELS',
        features: this.birdsGeoSet.features.filter(bird => {
          return this.getCheckedBirds().includes(bird.properties.Vogel)
        })
      }
    }
  },
  created() {
    this.$store.watch(
        () => {
          return this.birds
        },
        () => {
          if (this.mapLoaded) {
            this.calculateTotalBirds()
            return this.map.getSource('birds').setData(this.filteredBirds())
          }
        },
        {deep: true}
    )
  }
}
</script>

<style scoped>
.legend {
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  position: absolute;
  width: 200px;
  height: 140px;
  bottom: 50px;
  right: 0;
  border-radius: 5px;
  padding: 10px;
  color: black;
  font-size: 20px;
}

input {
  margin: 0 5px;
}

.circle {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
}
</style>