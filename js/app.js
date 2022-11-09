let routes = [
  { path: '/', component: HomePage },
]

const router = new VueRouter({
  routes
})

const vue = new Vue({
  router
}).$mount('#app')