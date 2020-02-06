import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Profile from '../pages/Profile.vue'
// 引入路由插件
Vue.use(VueRouter)
// 创建路由对象
const router = new VueRouter({
// 配置路由规则
  routes: [
    // 重定向回登录页
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login, name: 'login' },
    { path: '/register', component: Register, name: 'register' },
    { path: '/profile', component: Profile, name: 'profile' }
  ]
})
export default router
