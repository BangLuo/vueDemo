import Vue from 'vue';
//导入 vue-router
import VueRouter from 'vue-router';

import HerosList from '../views/heros/List.vue';
import WeaponsList from '../views/weapons/List.vue';
import EquipsList from '../views/equips/List.vue';


//!!!注册VueRouter组件-----------
Vue.use(VueRouter);
//2 创建路由对象，
const router = new VueRouter({
    linkExactActiveClass:'active',
    //路由规则
    routes:[
         // 配置根路径 默认重定向到英雄列表
        {name:'home',path:'/',redirect:'/heros'},
        // 路径规则
        {name:'heros', path:'/heros',component:HerosList},
        {name:'weapons', path:'/weapons',component:WeaponsList},
        {name:'equips', path:'/equips',component:EquipsList},
    ]
});


//3 导出模块
export default router;
