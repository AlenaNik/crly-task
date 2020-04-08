<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.component'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import "./assets/scss/variables";
#app {
  font-family: $font-family;
  font-size: $paragraph;
  color: $text-primary;
  font-weight: $medium;
}
body {
  margin: 0;
  box-sizing: border-box;
  ul {
    padding: 0;
  }
}

</style>
