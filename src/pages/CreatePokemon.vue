<template>
    <q-page-container>
        <q-page padding>
            <div class="row">
                <div class="col-6">
                    <q-input label="Name" filled v-model="pokemonData.pokemonName" />
                </div>
                <div class="col-5 offset-md-1">
                    <q-input label="Number" filled v-model.number="pokemonData.pokemonId" />
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <q-input class="q-pt-sm" filled v-for="stat in stats" :label="stat" v-bind:key="stat" v-model.number="pokemonData.pokemonStats[stat]"  />
                </div>
                <div class="col-5 offset-md-1 items-start">
                    <q-select class="q-pt-sm" filled :options="types" label="Type(s)" multiple max-values="2" counter v-model="pokemonData.pokemonTypes"/>
                    <q-btn color="secondary" label="Add Ability" @click="value => {pokemonData.pokemonAbilities.push({type: '',name: ''})}"/>
                    <q-btn color="red" label="Remove Last Ability" @click="value => {pokemonData.pokemonAbilities.pop()}"/>
                    <div class="row q-pt-sm" v-for="abilities in pokemonData.pokemonAbilities" v-bind:key="abilities">
                        <div class="col-6">
                            <q-select :options="abilityKind" label="Ability" v-model="abilities.type"/>
                        </div>
                        <div class="col-6">
                            <q-input filled v-model="abilities.name"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <q-btn color="secondary" label="Add Skill" @click="value => {pokemonData.pokemonSkills.push({name: '', rank: ''})}" />
                <q-btn color="red" label="Remove Last Skill" @click="value => {pokemonData.pokemonSkills.pop()}" />
            </div>
             <div class="row q-pt-sm" v-for="skills in pokemonData.pokemonSkills" v-bind:key="skills">
                <div class="col-6">
                        <q-input filled label="Skill" v-model="skills.name"/>
                    </div>
                    <div class="col-5 offset-md-1">
                        <q-input filled  label="Rank" v-model="skills.rank"/>
                    </div>
            </div>
            <span>{{ JSON.stringify(pokemonData) }}</span>
        </q-page>
    </q-page-container>
</template>

<script>
export default {
  name: 'CreatePokemon',
  data () {
    return {
      pokemonData: {
        pokemonId: '',
        pokemonName: '',
        pokemonStats: { hp: 0, atk: 0, def: 0, spAtk: 0, spDef: 0, speed: 0 },
        pokemnTypes: [],
        pokemonAbilities: [],
        pokemonSkills: []
      },
      stats: ['hp', 'atk', 'def', 'spAtk', 'spDef', 'speed'],
      types: ['fire', 'water', 'grass', 'electric', 'ground', 'ice', 'flying', 'rock', 'steel', 'normal', 'fighting', 'ghost', 'dark', 'psychic', 'poison', 'dragon', 'fairy', 'bug'],
      abilityKind: ['basic', 'advance', 'high']
    }
  }
}
</script>
