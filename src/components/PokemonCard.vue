<template>
  <b-row v-if="details" align-h="center">
    <b-col class="d-flex justify-content-center">
      <b-card text-variant="white" class="mb-3" :style="{'background' : getBG, 'width' : '18rem'}">
        <h2 class="text-capitalize m-0 poke-title">{{details.name}}</h2>
        <PokemonType :types="details.types"/>

        <b-img width="130" center :src="details.image"></b-img>

        <div class="poke-detail-card p-2 pt-4 text-black">
          <PokemonAbilities :abilities="details.abilities"/>
          <PokemonSkills :skills="details.stats"/>
          <PokemonOtherDetails :height="details.height" :weight="details.weight" />
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from 'vuex'
import PokemonAbilities from './PokemonAbilities.vue';
import PokemonOtherDetails from './PokemonOtherDetails.vue';
import PokemonSkills from './PokemonSkills.vue';
import PokemonType from './PokemonType.vue'
export default {
  name : 'PokemonCard',
  components : {
    PokemonType,
    PokemonOtherDetails,
    PokemonSkills,
    PokemonAbilities
  },
  props : {
    details : {
      type : Object,
      required: true
    }
  },
  computed : {
    ...mapGetters(['pokemonTypeList']),
    getBG() {

      let type = 'normal';
      if(this.details.types[0]){
        type = this.details.types[0].type.name;
      }

      let color = this.pokemonTypeList.filter(item => item.type == type);
      return color[0].color;
    }
  }
}
</script>

<style scoped>
.poke-detail-card {
  background-color: #fff;
  margin-top: -30px;
  border-radius: .3em
}

.poke-title {
  font-family: 'Gluten', cursive;
}
</style>