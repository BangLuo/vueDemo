<template>
<!-- 放置添加html -->
  <div>    
    <h2 class="sub-header">修改英雄</h2>
    <form>
      <div class="form-group">
            <label for="name">英雄名称</label>
            <input v-model="formData.name" type="text" class="form-control" id="name" placeholder="Name">
        </div>
        <div class="form-group">
            <label for="sex">英雄性别</label>
            <input v-model="formData.gender" type="text" class="form-control" id="sex" placeholder="Sex">
        </div>
        <button @click.prevent="handleEdit" type="submit" class="btn btn-success">修改</button>
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
                },
                heroId:-1
        }
    },
    created(){
        this.heroId = this.$route.params.id;
        this.getHeroById();
    },
    methods:{
        getHeroById(heroId){
        axios.get(`http://localhost:3000/heros/${this.heroId}`)
             .then((res)=>{
                const {status, data} = res;
                if(status === 200){
                    this.formData = data;
                    // console.log(this.formData);
                    // this.handleEdit();
              
                }
             
            })
        },
          // 渲染数据结束 在此提交数据完成修改
        handleEdit(){
            axios
                .patch(`http://localhost:3000/heros/${this.heroId}`, this.formData)
                .then((res)=>{
                    if(res.status === 200){
                        this.$router.push({name:'heros'});
                        alert('编辑成功');
                    }else{
                        alert('编辑失败');
                    }
                })
                .catch((err)=>{
                    console.log(err);
                })

        }
    }  
};
</script>
<style>

</style>

