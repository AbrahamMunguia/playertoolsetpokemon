<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          glossy
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          <q-icon name="img:https://pbs.twimg.com/media/Cw2SMxJWIAEvO5D.png" />
          Pokemon DND Tools
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-scroll-area class="fit">
        <q-item-label header>Menu</q-item-label>
        <q-list v-for="(menuItem, iteration) in pokeMenu" :key="iteration">
          <q-item clickable :active="menuItem.label === Outbox" v-ripple :to="menuItem.to">
            <q-item-section avatar>
              <q-icon :name="menuItem.icon"/>
            </q-item-section>
            <q-item-section>
              {{menuItem.label}}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
const pokeMenu = [
  {
    icon: 'img:https://pokemonalpha.xyz/wp-content/uploads/2016/06/Pok%C3%A9-Ball.png',
    label: 'Trainer',
    separator: false,
    to: '/trainer'
  },
  {
    icon: 'img:https://pokemonalpha.xyz/wp-content/uploads/2016/06/Super-Ball.png',
    label: 'Pokemon',
    separator: false,
    to: '/pokemon'
  },
  {
    icon: 'img:https://pokemonalpha.xyz/wp-content/uploads/2016/06/Ultra-Ball.png',
    label: 'Box',
    separator: false,
    to: '/box'
  },
  {
    icon: 'img:https://pokemonalpha.xyz/wp-content/uploads/2016/06/Safari-Ball.png',
    label: 'Misc',
    separator: false,
    to: '/misc'

  }

]
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      pokeMenu
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
