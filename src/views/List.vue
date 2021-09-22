<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" lg="3" v-for="item in items" :key="item.name">
          <PokemonCard :isList="true" :details="item" />
        </b-col>
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
      items : []
    }
  },
  mounted() {
    this.getPokemonList();
  },
  methods : {
    getPokemonList() {
      axios.get('/pokemon/').then((res) => {
        
        let items = res.data.results
        items.forEach(item => {
          axios.get(`/pokemon/${item.name}`).then(result => {
            result.data.image = result.data.sprites.other.dream_world.front_default;
            this.items.push(result.data);
          })
        });
        
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>

</style>
