<template>
  <div id="player_scores_container">
    <h1 id="player1">{{ $store.state.player_scores[0] }}</h1>
    <button id="button">Roll Dice!</button>
    <h1 id="player2">{{ $store.state.player_scores[1] }}</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$button-background: #9baec8;
#player_scores_container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
}

#button {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 50%;
  font-size: 1.5em;
  background-color: $button-background;
  border: none;
  color: white;
  border-radius: 5px;
}

#button:hover {
  background-color: $button-background * 1.1%;
}
</style>

