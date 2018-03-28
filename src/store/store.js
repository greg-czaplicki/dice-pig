import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: 'Pig',
    player_scores: [0, 0],
    roll: 0,
    round_total: 0,
    current_player: 1,
  }
})