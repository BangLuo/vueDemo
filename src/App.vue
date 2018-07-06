<template>
    <!-- 1 将index.html复制在此  -->
  <div>
    <!-- 提取头部组件-->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 提取侧边栏组件 -->
        <app-sidebar></app-sidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h2 class="sub-header">Hero List</h2>
          <a class="btn btn-success" href="add.html">Add</a>
            <div class="table-responsive">
              <!-- 提取英雄列表组件 -->
              <heros-list></heros-list> 
            </div>
        </div>
       
      </div>
    </div>
  </div>
 
</template>

<script>
//es6 导出模块的语法
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // 
  components: {
    AppHeader,
    AppSidebar,
    HerosList
  }

}
//导入头部、侧边栏组件
import AppHeader from './compronents/AppHeader.vue';
import AppSidebar from './compronents/AppSidebar.vue';
import HerosList from './views/heros-list';



//webpack 支持各种模块化的语法 CommonJS AMD ES6

</script>

<style>

</style>
