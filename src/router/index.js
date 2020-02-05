import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
// 引入路由插件
Vue.use(VueRouter)
// 创建路由对象
const router = new VueRouter({
// 配置路由规则
  routes: [
    // 重定向回登录页
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login }
  ]
})
export default router
