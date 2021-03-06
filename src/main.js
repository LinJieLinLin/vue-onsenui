// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import router from './router'
import store from './store'
import App from './App'
Vue.config.productionTip = true
Vue.use(VueOnsen)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
