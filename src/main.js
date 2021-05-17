import * as echarts from 'echarts'
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Select } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

Vue.use(Button)
Vue.use(Select)

sessionStorage.setItem('token', 'hello')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
