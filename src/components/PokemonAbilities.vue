<template>
  <div>
    <small>SKILLS</small>
    <b-row>
      <b-col class="d-flex">
        <div v-for="item in abilities" class="m-1" :key="item.ability.name">
          <b-button variant="info" class="very-small p-0 text-uppercase">{{item.ability.name}}</b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name : 'PokemonAbilities',
  props : ['abilities']
}
</script>

<style scoped>
.very-small {
  font-size: .6em !important;
}
</style>