import Vue from 'vue'
import App from './App'

//导入vue-router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router'

//导入element ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

//引入animate
import animated from 'animate.css'
Vue.use(animated)

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)

Vue.config.productionTip = false


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
