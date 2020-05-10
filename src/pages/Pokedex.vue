<template>
  <div class="q-pa-md">
    <q-page padding>
      <div class="row">
        <div class="col">
          <q-input filled v-model="inputFilter" @change="value => updateRequest(value)" label="Name or #" />
        </div>
        <div class="col">
          <q-btn :size="'lg'" :icon="'search'" color="primary" label="" @click="value => {this.getFromApi(this.inputFilter)}"/>
        </div>
      </div>
      <div class="row">
      <div class="col-4">
        <PokemonImage v-bind:spriteURL="pokemonData.sprites"/>
      </div>
      <div class="col" v-if="this.pokemonData.id != ''">
        <q-card dark bordered class="bg-grey-9 my-card">
          <q-card-section>
            <div class="row">
              <div class="col text-h6">No.{{ this.pokemonData.id  }}</div>
              <div class="col text-h6">{{ this.pokemonData.name}}</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    </q-page>
  </div>
</template>

<script>

export default {
  name: 'PokedexIndex',
  data () {
    return {
      inputFilter: '',
      pokedexEntry: '',
      pokemonData: { id: '', sprites: '', name: '', types: '' }
    }
  },
  components: {
    'PokemonImage': require('../components/PokemonPicture.vue').default
  },
  methods: {
    getFromApi (entry = '') {
      var current = this
      this.$axios.get('https://pokeapi.co/api/v2/pokemon/' + entry.toLowerCase() + '/').then((response) => {
        // DATA: from poke API
        const { name, sprites } = response.data
        const types = response.data.types.map((row) => { return row.type.name })
        current.pokemonData = { id: response.data.id, name, sprites: sprites.front_default, types }
      }).catch((e) => console.log(e, 'not found'))
    },
    updateRequest (value) {
      const self = this
      setTimeout(function () {
        self.getFromApi(value.target.value)
      }, 2000)
    }
  }
}
</script>
