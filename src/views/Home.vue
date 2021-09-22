<template>
  <div class="home">
    
    <b-container>
      <b-row align-h="center" class="test py-5">
        <b-col cols="12" lg="8" md="6" class="mb-5">
          <vue-bootstrap-typeahead 
            v-model="query"
            :data="pokemonList"
            placeholder="Enter a pokemon's name"
            @hit="getPokemon"
            size="lg"
            class="search"
            id="pokesearch"
          />
        </b-col>
        <b-col cols="12" lg="6" md="6">
          <PokemonCard v-if="isLoading" :details="pokemon"/>
          <b-img :src="ash" center fluid v-else></b-img>
        </b-col>
      </b-row>
    </b-container>
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import axios from 'axios';
import PokemonCard from '../components/PokemonCard';

export default {
  name: 'Home',
  components: {
    VueBootstrapTypeahead,
    PokemonCard
  },
  data() {
    return {
      error : [],
      query : '',
      pokemon : {
        name : '',
        image : '',
        height : '',
        weight : '',
        stats : [],
        types : [],
        abilities : []
      },
      isLoading : false,
      ash : require('../assets/ash.png')
    }
  },
  computed: {
    ...mapGetters(['pokemonList'])
  },
  mounted() {
    if(!this.$store.state.pokemons.length){
      this.getPokemons();
    }
  },
  methods: {
    getPokemons() {
      this.$store.dispatch('getPokemonList'); 
    },
    getPokemon() {
      axios.get(`/pokemon/${this.query}`).then(res => {

        this.isLoading = true;
        let data = res.data;
        let pokemon = this.pokemon;

        pokemon.name = this.query;
        pokemon.image = data.sprites.other.dream_world.front_default;
        pokemon.height = data.height;
        pokemon.weight = data.weight;
        pokemon.stats = data.stats;
        pokemon.types = data.types;
        pokemon.abilities = data.abilities;

      });
    }
  }
}
</script>

<style scoped>
.search {
  font-family: 'Gluten', cursive;
  text-transform: capitalize;
} 

</style>
