import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';

// axios引入
import axios from 'axios';
import qs from 'qs'

// 将axios添加到Vue.prototype中
Vue.prototype.axios = axios
Vue.prototype.qs = qs
// vue启动优化
Vue.config.productionTip = false
// 请求头设置
axios.defaults.headers.post['Content-Type'] = 'application/json'
// 请求路由头
axios.defaults.baseURL = 'http://u33288p940.zicp.vip/' // 设置王彦宝网段

Vue.use(Vant);
Vue.use(require('vue-wechat-title'))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
