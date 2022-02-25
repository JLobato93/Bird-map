<template>
  <div id="app">
    <Map/>
    <Legend/>
    <BirdFilter/>
  </div>
</template>

<script>
// TODO map als volledig scherm maken
// TODO legenda boven in scherm plaatsen
// TODO zoom in en uit knoppen importeren mapbox
// TODO filter in map implementeren met een border achter
// TODO symbolen veranderen van de data punten

import Map from './components/Map'
import Legend from "./components/Legend";
import BirdFilter from "./components/BirdFilter";
export default {
  name: 'App',
  components: {
    Map,
    Legend,
    BirdFilter
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
