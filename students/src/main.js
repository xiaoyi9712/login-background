// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios"
import store from "./store"//引入store,全局都可以使用$store

import ElementUI from 'element-ui';//导入elementui框架
import 'element-ui/lib/theme-chalk/index.css';//导入elementui样式
Vue.use(ElementUI);//使用elementui框架
Vue.prototype.$axios = axios//vue原型中注入axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//注入store到根实例,全局都可以用
  components: { App },
  template: '<App/>'
})
