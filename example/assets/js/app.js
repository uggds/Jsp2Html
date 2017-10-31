require(['assets/js/modules/routes'], function(routes) {
  Vue.use(VueRouter)
  const router = new VueRouter({
    mode: 'history',
    routes
  })


new Vue({
  router,
  template: `
    <div id="app" class="u-m--xs">
      <div class="ui pagination menu">
        <router-link class="item" active-class="active" :to="{ name: 'step01' }">01</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step02' }">02</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step03' }">03</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step04' }">04</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step05' }">05</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step06' }">06</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step07' }">07</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step08' }">08</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step09' }">09</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step10' }">10</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step11' }">11</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step12' }">12</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step13' }">13</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step14' }">14</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step15' }">15</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step16' }">16</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step17' }">17</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step18' }">18</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step19' }">19</router-link>
        <router-link class="item" active-class="active" :to="{ name: 'step20' }">20</router-link>
      </div>                                                                                          
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')
})
