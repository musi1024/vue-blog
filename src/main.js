import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import util from '@/helpers/util'

Vue.config.productionTip = false

Vue.use(util)
Vue.use(ElementUI)
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
