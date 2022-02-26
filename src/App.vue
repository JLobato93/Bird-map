<template>
  <div id="app">
    <Legend/>
    <Map/>
    <BirdCount/>
  </div>
</template>

<script>

import Map from './components/Map'
import Legend from "./components/Legend";
import BirdCount from "./components/BirdCount";
export default {
  name: 'App',
  components: {
    Map,
    Legend,
    BirdCount
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{
  margin: 0;
}
</style>
