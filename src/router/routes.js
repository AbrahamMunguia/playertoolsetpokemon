
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/pokedex', component: () => import('pages/Pokedex.vue') },
      { path: '/trainer', component: () => import('pages/Trainer.vue') },
      { path: '/createpokemon', component: () => import('pages/CreatePokemon.vue') },
      { path: '/pokemon', component: () => import('pages/Pokemon.vue') },
      { path: '/box', component: () => import('pages/Box.vue') },
      { path: '/misc', component: () => import('pages/Misc.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
