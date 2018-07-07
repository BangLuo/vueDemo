
//es6 导入模块
import Vue from 'vue'
import App from './App.vue'
//引入路由对象
import router from './routes/router'
//2 安装 bootstrap 导入css
import '../node_modules/bootstrap/dist/css/bootstrap.css'
//3 将本身的css 放到assets 中 并引入
import './assets/css/index.css'
// 导入自定义插件
import MyAxios from'./plugins/myaxios.js'
//注册插件
Vue.use(MyAxios);


new Vue({
  el: '#app',
  render: h => h(App),
  //配置路由对象
  router
})
