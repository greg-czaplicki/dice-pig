<template>
  <div id="app">
    <player-names />
    <player-scores />
  </div>
</template>

<script>
import PlayerScores from './components/PlayerScores';
import PlayerNames from './components/PlayerNames';

export default {
  components: {
    PlayerScores,
    PlayerNames
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  display: grid;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}
</style>
