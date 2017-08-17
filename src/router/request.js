import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
export default {
  login: () => {
    return Vue.http.get('http://sso.dev.gdy.io/sso/api/supported')
  }
}
