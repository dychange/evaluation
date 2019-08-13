import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/css/normalize.css'
import axios from 'axios'
import {Lazyload} from 'vant'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(Vant)
Vue.prototype.$axios=axios
Vue.use(Lazyload);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
