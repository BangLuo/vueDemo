<template>
<!-- 放置添加html -->
  <div>    
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
            <label for="name">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Name">
        </div>
        <div class="form-group">
            <label for="sex">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="Sex">
        </div>
        <button @click.prevent="handleAdd" type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    //绑定文本框 获取数据
        data(){
            return {    
                formData:{
                    name:'',
                    gender:''
                }
        }
    },
    methods:{
        //添加英雄
        handleAdd(){
        axios
        .post('http://localhost:3000/heros',this.formData)
        .then((res)=>{
            if(res.status === 201){
                // 添加成功 跳转页面 
            this.$router.push({ path: '/heros' })
            alert('添加成功');
            }else{
            alert('添加失败');
            }
        })
        .catch((err)=>{
            console.log(err);
        })

    }
    }
    //给添加按钮注册点击事件 
    // 发送axios请求
    
    
};
</script>
<style>

</style>

