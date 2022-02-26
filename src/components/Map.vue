<template>
  <div>
    <div id="map"></div>
  </div>

</template>

<script>
import { mapActions} from "vuex";

export default {
  name: "Map",
  methods: {
    ...mapActions('map', ['loadMap']),
    ...mapActions('birds', ['fetchBirds'])
  },
  async mounted() {
    await this.fetchBirds()
    this.loadMap()
  }
}
</script>

<style scoped>
#map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>