<template>
  <div id="app">
    <Navigation/>
  </div>
  <div id="lander">
    <LanderWeb/>
  </div>

</template>

<script>
import Navigation from './components/NavigationWeb.vue'
import LanderWeb from './components/LanderWeb.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    LanderWeb,

}

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
