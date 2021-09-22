<template>
  <div>
    <div class="d-flex p-1">
      <div v-for="item in types" :key="item.slot">
        <b-button variant="danger" size="sm" pill rounded class="m-1 pr-0">{{item.type.name}}</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'PokemonType',
  props : {
    types : {
      type : Array,
      required : true
    }
  }
}
</script>

<style scoped>

</style>