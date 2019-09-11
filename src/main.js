import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import VueStore from './store'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store(VueStore)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
