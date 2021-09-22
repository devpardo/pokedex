<template>
  <div class="border-top p-2">
    <b-row>
      <b-col>
        <h5 class="small">Height</h5>
        {{height}} ft
      </b-col>
      <b-col>
        <h5 class="small">Weight</h5>
        {{weight}} lbs
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name : 'PokemonOtherDetails',
  props : ['height', 'weight']
}
</script>

<style scoped>

</style>