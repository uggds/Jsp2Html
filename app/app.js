Vue.use(VueRouter)

const Sample1 = { template: `
<div>
  <h2>This is sample1</h2>
  <iframe id="iframe" src="/sample1/sample1.html"></iframe>
  <ul>
    <li class="js-display-block">display:block</li>
    <li class="js-display-none">display:none</li>
  </ul>
</div>
`,
  mounted: function() {
    this.$nextTick(function () {
      jQuery(".js-display-block").on("click", function () {
        var $iframe = jQuery('#iframe');
        var ifrmDoc = $iframe[0].contentWindow.document;
        var $ele  = jQuery('.someClass', ifrmDoc);
        $ele.css("display", "block")
      });
      jQuery(".js-display-none").on("click", function () {
        var $iframe = jQuery('#iframe');
        var ifrmDoc = $iframe[0].contentWindow.document;
        var $ele  = jQuery('.someClass', ifrmDoc);
        $ele.css("display", "none")
      });
    })
  }
}
const Home = {
  template: '<div>This is Home</div>',
}
const Foo = { template: '<div>This is Foo</div>' }
const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/sample1', name: 'sample1', component: Sample1 },
    { path: '/foo', name: 'foo', component: Foo },
    { path: '/bar/:id', name: 'bar', component: Bar }
  ]
})

new Vue({
  router,
  template: `
    <div id="app">
      <h1>Named Routes</h1>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
        <li><router-link :to="{ name: 'sample1' }">sample</router-link></li>
        <li><router-link :to="{ name: 'home' }">home</router-link></li>
        <li><router-link :to="{ name: 'foo' }">foo</router-link></li>
        <li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li>
      </ul>
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')
