<template>
  <div>
    <div>
      <input type="checkbox" value="Gierzwaluw" v-model="$store.state.birds.checkedBirds">
      <label>Gierzwaluwen</label>
      <input type="checkbox" value="Boerenzwaluw" v-model="$store.state.birds.checkedBirds">
      <label>Boerenzwaluwen</label>
      <input type="checkbox" value="Huiszwaluw" v-model="$store.state.birds.checkedBirds">
      <label>Huiszwaluwen</label>
      <input type="checkbox" value="Huismus" v-model="$store.state.birds.checkedBirds">
      <label>Huismussen</label>
      <input type="checkbox" value="Spreeuw" v-model="$store.state.birds.checkedBirds">
      <label>Spreeuwen</label>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Legend",
  watch: {
    '$store.state.birds.checkedBirds'() {
      this.filterBirds()
      return this.$store.state.map.map.getSource('birds').setData(this.$store.state.birds.filteredBirds)
    }
  },
  methods: {
    ...mapActions('birds', ['filterBirds'])
  }
}
</script>

<style scoped>

</style>