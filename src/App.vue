<template>
  <Register />
</template>

<script>
import CardGame from './components/cardgame.vue'
import Register from './components/register.vue'

export default {
  name: 'App',
  components: {
    CardGame,
    Register
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
