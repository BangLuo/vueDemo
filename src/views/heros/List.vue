<template>
<div>
      <h2 class="sub-header">英雄列表</h2>
      <!-- <a class="btn btn-success" href="add.html" @click="handleAdd">添加</a> -->
      <router-link class="btn btn-success" :to="{name:'herosadd'}">添加</router-link>
      <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>名称</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr :key="item.id" v-for="(item, index) in list">
                <td>{{index + 1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>
                  <a href="edit.html">编辑</a>
                  &nbsp;&nbsp;
                  <a href="#" @click.prevent="handleDel(item.id)">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
</div>
</template>
<script>
//1 安装并导入axios
import axios from 'axios';
    export default {
        data(){
          return {
            list:[

            ]
          }
        },
        // 在created钩子函数中加载数据 
        created(){
          this.loadData();
        },
        methods:{
          // 加载英雄列表
          loadData(){
            axios.get('http://localhost:3000/heros')
                 .then((res)=>{
                   const {status, data} = res;
                   if(status === 200){
                     this.list = data;
                   }
                 })
          },
          //删除英雄
          handleDel(id){
            if(!confirm('你确认删除吗？')){
                return;
            }
              axios.delete(`http://localhost:3000/heros/${id}`)
              .then((res)=>{
                const {status, data} = res;
                if(status === 200){
                  this.loadData();
                }else{
                  alert('删除失败');
                }
              })
          }
        }
    };
</script>
<style>

</style>