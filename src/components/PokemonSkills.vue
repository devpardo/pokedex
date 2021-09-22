<template>
  <div class="mb-4">
    <small>STATS</small>
    <b-row>
      <b-col>
        <div class="text-center" v-for="item in skills" :key="item.stat.name">
          <b-progress variant="success" :value="item.base_stat" :max="100" height="0.5em"></b-progress>
          <p class="text-uppercase very-small m-0">
            {{item.stat.name}}
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name : 'PokemonSkills',
  props : {
    skills : {
      type : Array
    }
  }
}
</script>

<style scoped>
.very-small {
  font-size: .6em !important;
}
</style>