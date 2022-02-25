<template>
  <div>
    <div id="map" class="map"></div>
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
.map {
  width: 100%;
  height: 800px
}
</style>