import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemons : [],
    pokemonTypeList : [
      { type : 'normal', color: '#f5e281'},
      { type : 'fighting', color: '#d64826'},
      { type : 'flying', color: '#c8eaff'},
      { type : 'poison', color: '#a96ce8'},
      { type : 'ground', color: '#825c00'},
      { type : 'rock', color: '#3e3726'},
      { type : 'bug', color: '#1d8630'},
      { type : 'ghost', color: '#535f55'},
      { type : 'steel', color: '#0f1510'},
      { type : 'fire', color: '#f19116'},
      { type : 'water', color: '#1782b7'},
      { type : 'grass', color: '#1b8e2a'},
      { type : 'electric', color: '#ffd326'},
      { type : 'psychic', color: '#ff26ba'},
      { type : 'ice', color: '#0799d4'},
      { type : 'dragon', color: '#1f4a2d'},
      { type : 'dark', color: '#000000'},
      { type : 'fairy', color: '#f49af9'},
      { type : 'unknown', color: '#a091a0'},
      { type : 'shadow', color: '#b5b0b6'}
    ]
  },
  getters : {
    pokemonList(state) {
      return state.pokemons;
    },
    pokemonTypeList(state) {
      return state.pokemonTypeList;
    }
  },
  mutations: {
    addToPokemonList(state, items){
      let names = items.map(name => name.name);
      state.pokemons = names;
    }
  },
  actions: {
    getPokemonList(context) {
      return new Promise((resolve, reject) => {
        axios.get('/pokemon', {
          params : {
            limit : -1
          }
        }).then((res) => {
          resolve(res.status);
          context.commit('addToPokemonList', res.data.results);
        }, error => {
          reject(error);
        });
      })
    }
  },
  modules: {
  }
})
