/*定义（路由）组件*/
var Normal = {
    template: '#normal'
}

var Movies ={
    template: '#movies'
}

var Tvs ={
    template: '#tvs'
}

/*  定义路由  */
const routes =[
    {path:'/normal',component:Normal},
    {path:'/movies',component:Movies},
    {path:'/tvs',component:Tvs},
    {path:'/',component:Movies}
]



/* 创建 router 实例，然后传 `routes` 配置  */
const router = new VueRouter({
    routes
})

/*创建和挂载根实例*/
const app = new Vue({
	router
}).$mount("#app")

/*
new Vue({
    router,
    el:'#app'
})
*/