<template>
    <div id="container">
      <h1 id="player1">Player 1</h1>
      <h1 id="title">{{ $store.state.title }}</h1>
      <h1 id="player2">Player 2</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>

