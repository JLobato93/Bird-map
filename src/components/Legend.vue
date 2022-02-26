<template>
  <div class="legend">
    <div>
      <div id="gierzwaluw-color" class="circle"></div>
      <input type="checkbox" value="Gierzwaluw" v-model="$store.state.birds.checkedBirds">
      <label>Gierzwaluwen</label>
    </div>
    <div>
      <div id="boerzwaluw-color" class="circle"></div>

      <input type="checkbox" value="Boerenzwaluw" v-model="$store.state.birds.checkedBirds">
      <label>Boerenzwaluwen</label>
    </div>
    <div>
      <div id="huiszwaluw-color" class="circle"></div>

      <input type="checkbox" value="Huiszwaluw" v-model="$store.state.birds.checkedBirds">
      <label>Huiszwaluwen</label>
    </div>
    <div>
      <div id="huismus-color" class="circle"></div>

      <input type="checkbox" value="Huismus" v-model="$store.state.birds.checkedBirds">
      <label>Huismussen</label>
    </div>
    <div>
      <div id="spreeuw-color" class="circle"></div>

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
#gierzwaluw-color{
background-color: #43e2ce;
}

#boerzwaluw-color{
  background: #0b379d;
}

#huiszwaluw-color{
  background-color: #ff7b00;
}

#huismus-color{
  background-color: #8f2f67;
}

#spreeuw-color{
  background-color: #008f06;
}
.circle{
  height: 15px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
}
</style>