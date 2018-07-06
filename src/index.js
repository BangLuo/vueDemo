import VueRouter from 'vue-router';
// 注册路由插件
Vue.use(VueRouter);


// 配置路由规则
//实例路由器
const router = new VueRouter({
    // 设计具体路由规则
    routes:[
    {'name':'home',path:'/',redirect:{name:'heros'}},
    ]
});

new Vue({
    el:'#app',
    render:c=c(App),
    // 设置路由
    router
});