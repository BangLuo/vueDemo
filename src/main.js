
//es6 导入模块
import Vue from 'vue'
import App from './App.vue'
//引入路由对象
import router from './routes/router'
//2 安装 bootstrap 导入css
import '../node_modules/bootstrap/dist/css/bootstrap.css'
//3 将本身的css 放到assets 中 并引入
import './assets/css/index.css'
//导入axios 
import axios from 'axios';
// 配置baseurl
axios.defaults.baseURL ='http://localhost:3000/';
Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  render: h => h(App),
  //配置路由对象
  router
})
