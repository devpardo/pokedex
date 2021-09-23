<template>
  <div>
    <b-container>
      <b-row class="mb-3">
         <router-link class="font-big my-font m-2 rounded" tag="button" to="/">Search</router-link>
      </b-row>
      <b-row>
        <b-col cols="12" lg="3" v-for="pokemon in items" :key="pokemon.name">
          <PokemonCard :details="pokemon" />
        </b-col>

        <b-pagination
          center
          v-model="currentPage"
          :total-rows="count"
          :per-page="20"
          aria-controls="my-table"
          size="lg"
          align="center"
          class="mb-5"
          id="paginate"
        ></b-pagination>

      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import PokemonCard from '../components/PokemonCard.vue';

export default {
  components: { PokemonCard },
  name : 'List',
  data() {
    return {
      items : [],
      count : 0,
      limit : 20,
      offset : 20,
      currentPage : 1,
      next : 0,
      previous : 0
    }
  },
  mounted() {
    this.getPokemonList(null, null);
  },
  methods : {
    getPokemonList(limit, offset) {
      axios.get('/pokemon/', {
        params : {
          limit : limit,
          offset : offset
        }
      }).then((res) => {
        
        let pokemons = res.data.results;
        this.count = res.data.count;

        this.next = res.data.next;
        this.previous = res.data.previous;

        console.log(res.data);

        pokemons.forEach(pokemon => {
          axios.get(`/pokemon/${pokemon.name}`).then(result => {
            result.data.image = result.data.sprites.other.dream_world.front_default;
            this.items.push(result.data);
          })
        });
        
      }).catch((err) => {
        console.log(err);
      })
    }
  },
  watch: {
    currentPage: {
      handler: function(newval) {
        if(newval == 1){
          this.offset = null;
        } else {
          this.offset = 20;
          this.offset = this.offset * newval;
        }
        this.items = [];
        this.getPokemonList(this.limit, this.offset);
      }
    }
  }
}
</script>

<style scoped>
#paginate {
  font-family: 'Gluten', cursive;
}
</style>
